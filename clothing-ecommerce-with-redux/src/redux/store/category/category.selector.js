//Memoization cache the previous value of something if the input has not change returns the same result
import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

//CreateSelector(inputs,output) : if inputs not change return from the memoized value else returns new
export const selectCategoriesMemoized = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategories = createSelector(  //As long as the selectCategoriesMemoized did not change dont rerun method, just return prev value
  [selectCategoriesMemoized],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
