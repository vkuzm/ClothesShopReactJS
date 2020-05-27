import { ShopActionTypes } from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isLoading: true,
  errorMessage: null,
  search: ''
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collections: action.payload
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    case ShopActionTypes.SEARCH_COLLECTIONS:
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
