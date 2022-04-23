import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../redux/store/cart/cart.action";
import { selectCartItemsMemoized } from "../../redux/store/cart/cart.selector";
import "./checkout-item.style.scss";
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch()
  const existingCartItems = useSelector(selectCartItemsMemoized)
  const clearItemHandler = () => dispatch(clearItemFromCart(existingCartItems,cartItem));
  const addItemHandler = () => dispatch(addItemToCart(existingCartItems,cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(existingCartItems,cartItem));
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>

      <span onClick={clearItemHandler} className="remove-button">
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
