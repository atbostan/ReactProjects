import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import Button from "../ui/button/button.component";
import "./cart-dropdown.style.scss";
const CartDropdown = () => {
  const { existingCartItems } = useContext(CartContext);
  const navigate  =useNavigate();

  const goToCheckoutHandler = ()=>{
    navigate('/checkout')
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {existingCartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
