import CartActiontypes from "./cart.actiontypes";



export const toggleCartHidden = ()=>({
    type:CartActiontypes.TOGGLE_CART_HIDDEN
})


export const addItem = (cartItem)=>({
    type:CartActiontypes.ADD_ITEM,
    payload : cartItem
})