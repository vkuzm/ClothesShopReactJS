import { ShopActionTypes } from './shop.types';

export const updateCollections = (collections) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collections
});

export const searchCollection = (text) => ({
  type: ShopActionTypes.SEARCH_COLLECTIONS,
  payload: text
});