import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
    hats : 1,
    sneakers : 2,
    jackets : 3,
    womens : 4,
    mens : 5
}

const selectShop = state => state.shop;

export  const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection  = collectionUrl => {
    return createSelector(
        [selectCollections],
        collections=>collections.find(c=>c.id ===COLLECTION_ID_MAP[collectionUrl])
    )
}