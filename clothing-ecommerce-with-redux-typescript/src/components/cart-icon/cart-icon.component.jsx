import React from 'react'
import "./cart-icon.style.scss"
import {ReactComponent as ShoppingIcon} from "./../../assets/shopping-bag.svg"
import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartCountMemoized, selectIsCartOpenMemoized } from '../../redux/store/cart/cart.selector';
import { setIsCartOpen } from '../../redux/store/cart/cart.action';
const CartIcon = () => {

  const dispatch = useDispatch();
  const cartCount =useSelector(selectIsCartCountMemoized)
  const isCartOpen = useSelector(selectIsCartOpenMemoized)

 const toggleIsCartOpen = ()=> dispatch(setIsCartOpen(!isCartOpen));
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon