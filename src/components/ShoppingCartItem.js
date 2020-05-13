import React from "react";

import { RemoveFromCartButton } from "./RemoveFromCartButton";
import { ChangeQty } from "./ChangeQty";

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
                    <ChangeQty handleChange={handleChange} qty={qty} id={id} />
                    <RemoveFromCartButton handleRemove={handleRemove} id={id} />
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
