import React, { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.style.scss";

import { ReactComponent as NavLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
  
  const { currentUser } = useState();
  const { isCartOpen } = useContext(CartContext);


  return (
    /*We use fragment because of the react needs a parent component and we use instead of div , so fragment render nothing */
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <NavLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              <b> SING OUT</b>
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon/>
        </div>
        {isCartOpen && 
        <CartDropdown/> 
      }
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
