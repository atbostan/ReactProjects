/**Represents all of the state of app.Todo so combines all of the state together */

import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user-reducer";


export default combineReducers({
    user:userReducer,
    cart : cartReducer
})