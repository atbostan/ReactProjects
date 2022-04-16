import { createAction } from "../../../utils/reducer/reducer.util"
import { CATEGORY_ACTION_TYPES } from "./category.action-types";

export const setCategories = (categoriesArray)=>{
  return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES,categoriesArray);
  }