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


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;