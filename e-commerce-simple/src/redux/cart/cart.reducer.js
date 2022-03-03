import CartActionTypes from "./cart.actiontypes";
import CartActiontypes from "./cart.actiontypes";
import { addItemToCart, removeItemFromChart } from "./cart.utils";

const INITIAL_STATE = {
    isHidden:true,
    cartItems : []
};

const cartReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case CartActiontypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                isHidden : !state.isHidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems : addItemToCart(state.cartItems,action.payload)
            }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems : state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems : removeItemFromChart(state.cartItems,action.payload)

            }    
        default:
            return state;
    }
}

export default cartReducer;