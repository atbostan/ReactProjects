import CartActiontypes from "./cart.actiontypes";


const INITIAL_STATE = {
    isHidden:true
};

const cartReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case CartActiontypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                isHidden : !state.isHidden
            }
    
        default:
            return state;
    }
}

export default cartReducer;