import { ShopActionTypes } from './shop.types';

const INITIAL_STATE = {
  collections: null,
  search: ''
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
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
