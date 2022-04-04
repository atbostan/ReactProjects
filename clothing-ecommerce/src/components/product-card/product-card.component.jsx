import React, { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import Button from '../ui/button/button.component'
import "./product-card.style.scss"
const ProductCard = ({product}) => {
  
    const  {name,price,imageUrl} = product
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = ()=>addItemToCart(product);
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