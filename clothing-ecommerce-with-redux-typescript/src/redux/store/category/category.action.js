import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import { createAction } from "../../../utils/reducer/reducer.util"
import { CATEGORY_ACTION_TYPES } from "./category.action-types";

export const setCategories = (categoriesArray)=>{
  return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES,categoriesArray);
  }

export const fetchCategoriesStart = ()=>createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray)=>createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray);

export const fetchCategoriesFailed = (error)=>createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAIL,error);

//Redux Thunk Integration

export const fetchCategoriesAsync = ()=>async (dispatch) => {
  dispatch(fetchCategoriesStart())
  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray))

  } catch (error) {
    dispatch(fetchCategoriesFailed(error))

  }
  
}