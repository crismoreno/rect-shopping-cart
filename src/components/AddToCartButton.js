import React from "react";

const AddToCartButton = ({ qty, handleAddToCart, id }) => {
  const addToCart = () => {
    handleAddToCart(id, 1);
  };

  let addToCartButton;
  if (qty >= 10) {
    addToCartButton = (
      <button className="btn btn-dark disabled" onClick={addToCart} disabled>
        Add to cart
      </button>
    );
  } else {
    addToCartButton = (
      <button className="btn btn-dark" onClick={addToCart}>
        Add to cart
      </button>
    );
  }

  return addToCartButton;
};

export { AddToCartButton };
