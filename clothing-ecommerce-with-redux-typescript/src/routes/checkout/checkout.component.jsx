import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectCartItemsMemoized, selectIsCartTotalMemoized } from "../../redux/store/cart/cart.selector";
import "./checkout.style.scss";
const Checkout = () => {
  const existingCartItems = useSelector(selectCartItemsMemoized);
  const cartTotal = useSelector(selectIsCartTotalMemoized)
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Remove</span>   
        </div>
      </div>

      {existingCartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total : {cartTotal} $ </span>
    </div>
  );
};

export default Checkout;
