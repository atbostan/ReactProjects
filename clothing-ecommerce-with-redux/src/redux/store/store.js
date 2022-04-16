//Store file all of redux combined here.

import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";


const middleWares = [logger];


//Every store needs reducers in here root reducer 
    //Root Reducer => Combination of all reducers
                     //We need to rootReducer so that generate store
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer,undefined,composedEnhancers)