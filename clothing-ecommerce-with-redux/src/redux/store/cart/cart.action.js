import { createAction } from "../../../utils/reducer/reducer.util";
import { CART_ACTION_TYPES } from "./cart.action-types";

export const addCartItem = (existingCartItems, productToAdd) => {
  const existingCartItem = existingCartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return existingCartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...existingCartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (existingCartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = existingCartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return existingCartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back existingCartItems with matching cart item with reduced quantity
  return existingCartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};


export const clearCartItem = (existingCartItems, cartItemsToClear) => {
  return existingCartItems.filter(
    (cartItem) => cartItem.id !== cartItemsToClear.id
  );
};



// const addCartItemsToCartReducer = (newCartItems) => {
//   const newCartCount = newCartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity,
//     0
//   );

//   const cartTotal = newCartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//     0
//   );

//   dispatch(
//     createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//       existingCartItems: newCartItems,
//       cartTotal: cartTotal,
//       cartCount: newCartCount,
//     })
//   );
// };

export const addItemToCart = (existingCartItems,productToAdd) => {
  const newCartItems = addCartItem(existingCartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
};

export const removeItemFromCart = (existingCartItems,cartItemToRemove) => {
  const newCartItems = removeCartItem(existingCartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);

};

export const clearItemFromCart = (existingCartItems,cartItemToClear) => {
  const newCartItems = clearCartItem(existingCartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);

};

export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
};
