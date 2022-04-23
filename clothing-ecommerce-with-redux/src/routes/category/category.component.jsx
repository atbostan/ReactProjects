import React, {useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategories } from "../../redux/store/category/category.selector";
import "./category.style.scss";

const Category = () => {
  const { category } = useParams(); // For use url params , returns an Object which we should destructre all we need one
  const { categoriesMap } = useSelector(selectCategories);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div className="category-container">
      {products && products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Category;
