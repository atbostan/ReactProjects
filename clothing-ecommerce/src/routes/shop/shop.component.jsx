import React, { Fragment, useContext } from "react";
import "./shop.style.scss";
import SHOP_DATA from "../../shop-data.json";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log("categoriesMap", categoriesMap);
  return (
    <Fragment>
      {/* Because of categoriesMap is an Object which includes key-value pair, so that we iterate it we use Object.keys and returns
      keys of object as an array */}
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2 style={{marginTop:"2rem"}}>{title.toUpperCase()}</h2>

          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
