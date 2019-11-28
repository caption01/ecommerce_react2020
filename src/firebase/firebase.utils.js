import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCZ3sjNwPR2F4VIsiCIo_H8RIARjb9uVGg",
    authDomain: "ecommerce-db-50f33.firebaseapp.com",
    databaseURL: "https://ecommerce-db-50f33.firebaseio.com",
    projectId: "ecommerce-db-50f33",
    storageBucket: "ecommerce-db-50f33.appspot.com",
    messagingSenderId: "718211312846",
    appId: "1:718211312846:web:25dcb7efb12472715cb49f",
    measurementId: "G-E76975GHDL"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error to create user', err.message)
    }

  }
  return userRef;
} 


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach( obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  })

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map( doc => {
    const { title, items }  = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
 
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc
  }, {})
}


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;