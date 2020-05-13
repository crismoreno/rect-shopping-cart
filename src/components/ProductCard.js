import React from "react";

function ProductCard(props) {
  const addToCart = () => {
    props.handleAddToCart(props.id);
  };

  let addToCartButton;
  if (props.qty >= 10) {
    addToCartButton = (
      <button className="btn btn-dark disabled" onClick={addToCart}>
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

  return (
    <div className="col mb-4 d-flex flex-column product__card">
      <img className="product__img" src={props.img} alt="" />
      <div className="d-block">
        <h3 className="h5">{props.title}</h3>
        <p>{props.price}€</p>
        {addToCartButton}
      </div>
    </div>
  );
}

export default ProductCard;
