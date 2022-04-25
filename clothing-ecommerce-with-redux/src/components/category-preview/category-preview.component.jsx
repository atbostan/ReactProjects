import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading } from "../../redux/store/category/category.selector";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.style.scss";
const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="category-preview-container">
          <h2>
            <span className="title">{title.toUpperCase()}</span>
            <div className="preview">
              {products
                .filter((_, idx) => idx < 4)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </h2>
        </div>
      )}
    </Fragment>
  );
};

export default CategoryPreview;
