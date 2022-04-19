import { combineReducers } from "redux";
import { categoriesReducer } from "./category/category.reducer";
import { userReducer } from "./user/user.reducer";

//Even though just one of them update entire root reducer updated.

export const rootReducer = combineReducers({
    user:userReducer,
    categories:categoriesReducer,
})


