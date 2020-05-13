import React from "react";

import ProductCard from "./ProductCard";

import { countDuplicates } from "../helpers/countDuplicates";

const Catalog = ({ products, handleAdd, cartInState }) => {
  return (
    <div className="col">
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
        {products.map((product, index) => (
          <ProductCard
            img={product.img}
            title={product.title}
            key={index}
            qty={countDuplicates(product.id, cartInState)}
            price={product.price}
            id={product.id}
            handleAddToCart={handleAdd}
          />
        ))}
      </div>
    </div>
  );
};

export { Catalog };
