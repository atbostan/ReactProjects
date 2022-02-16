import "./cart-dropdown.style.scss"
import React from 'react';
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({cartItems,history,dispatch}) => {
  return <div className="cart-dropdown">
      <div className="cart-items">
        {
        cartItems.length ? 
        cartItems.map(item=>(<CartItem key={item.id} item={item} />))
          :
          <span className="empty-message">Your cart is empty!!</span>
      }
          <CustomButton onClick={()=>{history.push("/checkout");
          dispatch(toggleCartHidden());  
        }
        }>GO TO CHECKOUT</CustomButton>
      </div>
  </div>;
}; 

// This method can be pass dispatch to props , if we not specified the second argument
const mapStateToProps= (state)=>({
  cartItems : selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
