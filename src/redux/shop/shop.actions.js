import ShopActionTypes from './shop.types';

export const updateCollections = (collensMap) =>({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collensMap
});

