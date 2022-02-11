import React from 'react';
import './header.style.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({currentUser}) => {
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
      </div>
  </div>;
};


const mapStateToProps=(state)=>({
  currentUser : state.user.currentUser
})
export default connect(mapStateToProps)(Header);
