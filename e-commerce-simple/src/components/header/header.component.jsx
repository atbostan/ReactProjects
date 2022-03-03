import React from 'react';
import './header.style.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
const Header = ({currentUser,isHidden}) => {
  return <div className='header'>
      <Link to="/">
        <Logo className='logo'/>
      </Link>
      <div className='menu-items'>
            <Link className='menu-item' to="/shop">SHOP</Link>
            <Link className='menu-item' to="/contact">CONTACT</Link>
            {currentUser ?
            <div className='menu-item' onClick={()=>auth.signOut()}>SIGN OUT</div> :
            <Link className='menu-item' to="/sign-in">SIGN IN</Link>
            }

            <CartIcon/>

      </div>
      {isHidden ? null: <CartDropdown/> }

      

  </div>;
};


const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  isHidden:selectCartHidden
})
export default connect(mapStateToProps)(Header);
