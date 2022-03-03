import { createSelector } from "reselect";



const selectShop = state => state.shop;
console.log("ssadas",selectShop);
export  const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection  = collectionUrl => {
    return createSelector(
        [selectCollections],
        collections=>collections[collectionUrl]
    )
}