import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../ui/button/button.component'
import "./product-card.style.scss"
import {addItemToCart} from "../../redux/store/cart/cart.action"
import { selectCartItemsMemoized } from '../../redux/store/cart/cart.selector'
const ProductCard = ({product}) => {
    const  {name,price,imageUrl} = product
    const existingCartItems = useSelector(selectCartItemsMemoized);
    const dispatch = useDispatch();
    
    const addProductToCart = ()=>dispatch(addItemToCart(existingCartItems,product));
  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={name} />
        <div className='footer'>
            <span className='product-name'>{name}</span>
            <span className='product-price'>{price}</span>
        </div>
        <Button type="inverted" onClick={addProductToCart}>Add To Card</Button>
    </div>
  )
}

export default ProductCard