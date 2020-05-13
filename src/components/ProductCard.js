import React from "react";

import { AddToCartButton } from "./AddToCartButton";

const ProductCard = ({ id, qty, img, title, price, handleAddToCart }) => {
  return (
    <div className="col mb-4 d-flex flex-column product__card">
      <img className="product__img" src={img} alt="" />
      <div className="d-block">
        <h3 className="h5">{title}</h3>
        <p>{price}€</p>
        <AddToCartButton qty={qty} handleAddToCart={handleAddToCart} id={id} />
      </div>
    </div>
  );
};

export default ProductCard;
