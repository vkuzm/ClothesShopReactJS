import { ShopActionTypes } from './shop.types';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

const fetchCollectionsLoading = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_LOADING
});

const fetchCollectionsSuccess = (collections) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollections = () => {
  return (dispatch) => {
    dispatch(fetchCollectionsLoading());

    firestore
      .collection('collections')
      .get()
      .then((snapshot) => {
        console.log(snapshot);
        const collections = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collections));
      })
      .catch((error) => {
        dispatch(fetchCollectionsFailure(error.message));
      });
  };
};

export const searchCollection = (text) => ({
  type: ShopActionTypes.SEARCH_COLLECTIONS,
  payload: text
});
