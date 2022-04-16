import { createContext,  useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.util";

//-------------REDUX-------------
const INITIAL_STATE = {
  isCartOpen:false,
  existingCartItems: [],
  cartCount: 0,
  cartTotal: 0,

}

const cartReducerAction = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN:"SET_IS_CART_OPEN"
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case cartReducerAction.SET_CART_ITEMS:
      return { 
        ...state, 
        ...payload
      };
    case cartReducerAction.SET_IS_CART_OPEN:
      return { 
        ...state, 
        isCartOpen:payload
      };
    default:
      throw new Error(`Unexpected action type in cart-reducer-${type}`);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  existingCartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

const addOrUpdateCartItem = (existingCartItems, productToAdd) => {
  const checkIfExist = existingCartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (checkIfExist) {
    return existingCartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ); //If the one of the fields is different return a new array/object not manipulate the old one
  }

  return [...existingCartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (existingCartItems, cartItemToRemove) => {
  const checkIfExist = existingCartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (checkIfExist.quantity === 1) {
    return existingCartItems.filter(
      (cartItem) => cartItem.id !== cartItemToRemove.id
    );
  }

  if (checkIfExist) {
    return existingCartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (existingCartItems, cartItemsToClear) => {
  return existingCartItems.filter(
    (cartItem) => cartItem.id !== cartItemsToClear.id
  );
};

export const CartProvider = ({ children }) => {


  const [state,dispatch] = useReducer(cartReducer,INITIAL_STATE)
  const {existingCartItems,cartTotal,isCartOpen,cartCount}=state;

  //-----REDUCER-------

  const addCartItemsToCartReducer=(newCartItems)=>{
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const cartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(createAction(cartReducerAction.SET_CART_ITEMS,{existingCartItems:newCartItems,cartTotal:cartTotal,cartCount:newCartCount}))
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems =addOrUpdateCartItem(existingCartItems, productToAdd)
    addCartItemsToCartReducer(newCartItems)
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems =removeCartItem(existingCartItems, cartItemToRemove)
    addCartItemsToCartReducer(newCartItems)

  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems =clearCartItem(existingCartItems, cartItemToClear)
    addCartItemsToCartReducer(newCartItems)


  };

  const setIsCartOpen= (bool)=>{
    dispatch(createAction(cartReducerAction.SET_IS_CART_OPEN,bool))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    existingCartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
