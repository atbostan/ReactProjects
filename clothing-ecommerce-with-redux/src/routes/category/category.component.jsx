import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../redux/store/category/category.selector";
import "./category.style.scss";

const Category = () => {
  const { category } = useParams(); // For use url params , returns an Object which we should destructre all we need one
  const { categoriesMap } = useSelector(selectCategories);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      {isLoading ? (
        ("Loading...")
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
