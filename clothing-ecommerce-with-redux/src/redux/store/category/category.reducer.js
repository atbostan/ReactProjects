import { CATEGORY_ACTION_TYPES } from "./category.action-types";

const CATEGORY_INITIAL_STATE= {
    categories:[]
}



export const categoriesReducer = (state=CATEGORY_INITIAL_STATE,action={})=>{
    const {type,payload} = action;
    debugger;
    switch (type) {
        case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
            
            return {
                ...state,
                categories:payload
            }
    
        default:
           return state;
    }
}