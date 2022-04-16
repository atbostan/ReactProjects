import React, { Fragment, useContext, useEffect } from "react";
import "./shop.style.scss";
import { Routes,Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import { setCategories } from "../../redux/store/category/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    // If we want to use async function inside of the useEffect() we should use this with create new async function
  const getCategories = async () => {
    debugger;
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(setCategories(categoriesArray));
  };
  getCategories();
}, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<Category />}/>
    </Routes>
  );
};

export default Shop;
