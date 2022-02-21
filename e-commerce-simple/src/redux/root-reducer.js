/**Represents all of the state of app.Todo so combines all of the state together */

import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user-reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";


const persistConfig={
    key : 'root',
    storage,
    whitelist : ['cart']

}

const rootReducer = combineReducers({
    user:userReducer,
    cart : cartReducer
})

export default  persistReducer(persistConfig,rootReducer)