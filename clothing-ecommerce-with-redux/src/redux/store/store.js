//Store file all of redux combined here.

import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import {persistStore,persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

//Redux Persist -> Tool that allows us the persist the reducer values inside of local storage



const persistConfig = {
    key : 'root',
    storage : storage, //What do we want store this into
    blacklist :['user'],  //Values which we dont want to persist

}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);

//Every store needs reducers in here root reducer 
    //Root Reducer => Combination of all reducers
                     //We need to rootReducer so that generate store
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(persistedReducer,undefined,composedEnhancers)

export const persistor = persistStore(store);