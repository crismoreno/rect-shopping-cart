import React from "react";

import { RemoveFromCartButton } from "./RemoveFromCartButton";

const ShoppingCartItem = ({
  img,
  title,
  price,
  id,
  handleChange,
  qty,
  handleRemove,
}) => {
  return (
    <div className="col shopping__cart__item">
      <div className="row flex-column">
        <div className="col">
          <div className="row">
            <div className="col-12 col-xl-4 mb-3 mb-xl-0">
              <img className="shopping__cart__img" src={img} alt="" />
            </div>
            <div className="col-12 col-xl-8">
              <div className="row flex-column">
                <div className="col">
                  <h4 className="h5 product-name">
                    <strong>{title}</strong>
                  </h4>
                </div>
                <div className="col">
                  <p>
                    <strong>{price}€</strong>
                  </p>
                </div>
                <div className="col mt-auto">
                  <div className="row">
                    <div className="col col-6 col-lg-4">
                      <select
                        className="custom-select"
                        onChange={handleChange}
                        value={qty}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                    <RemoveFromCartButton handleRemove={handleRemove} id={id} />
                    {/* <div className="col col-6 col-lg-8">
                      <button
                        type="btn"
                        className="btn btn-dark"
                        onClick={removeClick}
                      >
                        Remove
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
