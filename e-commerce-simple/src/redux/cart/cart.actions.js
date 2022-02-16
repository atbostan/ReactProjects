import CartActiontypes from "./cart.actiontypes";



export const toggleCartHidden = ()=>({
    type:CartActiontypes.TOGGLE_CART_HIDDEN
})


export const addItem = (cartItem)=>({
    type:CartActiontypes.ADD_ITEM,
    payload : cartItem
})


export const clearItem = (cartItem)=>({
    type:CartActiontypes.CLEAR_ITEM_FROM_CART,
    payload : cartItem
})

export const removeItem = (cartItem)=>({
    type:CartActiontypes.REMOVE_ITEM,
    payload : cartItem
})
