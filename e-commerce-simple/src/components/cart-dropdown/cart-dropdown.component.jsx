import "./cart-dropdown.style.scss"
import React from 'react';
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => {
  return <div className="cart-dropdown">
      <div className="cart-items">
          <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
  </div>;
};

export default CartDropdown;
