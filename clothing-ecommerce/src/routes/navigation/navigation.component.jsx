import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.style.scss"

import {ReactComponent as NavLogo}  from '../../assets/crown.svg'
const Navigation = () => {
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
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;