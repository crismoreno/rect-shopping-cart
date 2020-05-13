import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";

import { removeDuplicates } from "../helpers/removeDuplicates";
import { countDuplicates } from "../helpers/countDuplicates";

const Aside = ({ cartInState, handleRemove, handleChange, computed }) => {
  let cartLook;
  if (cartInState.length) {
    cartLook = removeDuplicates(cartInState, "id").map((product, index) => (
      <ShoppingCartItem
        title={product.title}
        price={product.price}
        id={product.id}
        key={index}
        qty={countDuplicates(product.id, cartInState)}
        img={product.img}
        handleRemove={handleRemove}
        handleChange={handleChange}
      />
    ));
  } else {
    cartLook = (
      <div className="col">
        <p className="text-warning">Cart is empty</p>
      </div>
    );
  }
  return (
    <aside className="col col-6 col-lg-4 p-4">
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Shopping Cart</h2>
          <hr className="mb-3" />
        </div>
        {cartLook}
        <div className="col shopping__cart__footer">
          <div className="row row-cols-1 flex-column">
            <div className="col">
              <div className="d-flex justify-content-between">
                <h4 className="h5">Total</h4>
                <h4>
                  <strong>{computed}€</strong>
                </h4>
              </div>
              <hr />
            </div>
            <div className="col">
              <button type="btn" className="btn btn-primary btn-block btn-lg">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export { Aside };
