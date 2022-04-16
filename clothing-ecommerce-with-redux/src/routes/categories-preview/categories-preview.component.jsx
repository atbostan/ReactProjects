import React, {  Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategories } from "../../redux/store/category/category.selector";

const CategoriesPreview = () => {
  const categoriesMap=useSelector(selectCategories)
  console.log(categoriesMap)
  return (
    <Fragment>
      {/* Because of categoriesMap is an Object which includes key-value pair, so that we iterate it we use Object.keys and returns
      keys of object as an array */}
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (<CategoryPreview key={title} title={title} products={products}/>)
      })}
    </Fragment>
  );
};

export default CategoriesPreview;