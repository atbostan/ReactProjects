import { createContext, useState, useEffect } from "react";

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
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [existingCartItems, setExistingCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  //With useEffect , every time when cartItems changes call-back will triggered
  useEffect(() => {
    const newCartCount = existingCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [existingCartItems]);

  useEffect(() => {
    const cartTotal = existingCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    setCartTotal(cartTotal);
  }, [existingCartItems]);

  const addItemToCart = (productToAdd) => {
    setExistingCartItems(addOrUpdateCartItem(existingCartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setExistingCartItems(removeCartItem(existingCartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setExistingCartItems(clearCartItem(existingCartItems, cartItemToClear));
  };
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
