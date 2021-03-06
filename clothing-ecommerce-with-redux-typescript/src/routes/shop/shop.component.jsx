import React, {useEffect } from "react";
import "./shop.style.scss";
import { Routes,Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesAsync, setCategories } from "../../redux/store/category/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    // If we want to use async function inside of the useEffect() we should use this with create new async function
  dispatch(fetchCategoriesAsync())
}, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<Category />}/>
    </Routes>
  );
};

export default Shop;
