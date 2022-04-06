import React, {  Fragment, useContext } from "react";
import "./categories-preview.style.scss";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
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