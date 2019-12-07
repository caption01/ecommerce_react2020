import ShopActionType from './shop.type';
import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
    type: ShopActionType.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionType.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = (errMessage) => ({
    type: ShopActionType.FETCH_COLLECTIONS_FAILURE,
    payload: errMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {

        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart())

        collectionRef.get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
                dispatch(fetchCollectionsSuccess(collectionsMap))
            }).catch(err => dispatch(fetchCollectionsFailure(err.message)))
    }
}