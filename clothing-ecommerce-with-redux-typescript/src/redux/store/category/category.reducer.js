import { CATEGORY_ACTION_TYPES } from "./category.action-types";

const CATEGORY_INITIAL_STATE= {
    categories:[],
    isLoading:false,
    error:null,
}


//START SUCCESS FAIL Phase For Async fetching while redux thunk integration
export const categoriesReducer = (state=CATEGORY_INITIAL_STATE,action={})=>{
    const {type,payload} = action;
    switch (type) {
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {...state,isLoading:true}
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            
            return {
                ...state,
                categories:payload,
                isLoading:false
            }

            case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAIL:
                return {...state,error:payload,isLoading:false}
    
        default:
           return state;
    }
}