import { createSelector } from "reselect";

const selectCartReducer = (state) => {
  console.table(state);
  return state.cart
};

export const selectCartItemsMemoized = createSelector(
  [selectCartReducer],
  (cart) => cart.existingCartItems
);

export const selectIsCartOpenMemoized = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectIsCartCountMemoized = createSelector(
  [selectCartItemsMemoized],
  (existingCartItems) =>
  existingCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectIsCartTotalMemoized = createSelector(
  [selectCartItemsMemoized],
  (existingCartItems) =>
  existingCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
);
