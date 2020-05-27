import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectSearchText = createSelector(
  [selectShop],
  (shop) => shop.search
);

export const selectCollection = (collectionUrlParam) => (
   createSelector(
    [selectCollections],
    (collections) => (collections ? collections[collectionUrlParam] : null)
  )
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => (collections ? Object.values(collections) : [])
);

export const selectCollectionsForSearch = createSelector(
  [selectCollectionsForPreview],
  (collections) =>
    collections
      .map((collection) => collection.items)
      .reduce((accumulator, items) => accumulator.concat(items), [])
);
