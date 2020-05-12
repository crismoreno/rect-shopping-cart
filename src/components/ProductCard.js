import React from "react";

function ProductCard(props) {
  return (
    <div className="col mb-4 d-flex flex-column product__card">
      <img className="product__img" src={props.img} alt="" />
      <div className="d-block">
        <h3 className="h5">{props.title}</h3>
        <p>{props.price}€</p>
        <button className="btn btn-dark" onClick={props.handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
