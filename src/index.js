import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

import ProductCard from "./components/ProductCard";
import ShoppingCartItem from "./components/ShoppingCartItem";
import { computePrice } from "././helpers/computePrice";
import { removeDuplicates } from "././helpers/removeDuplicates";
import { countDuplicates } from "././helpers/countDuplicates";

import products from "./productsService";

const App = () => {
  const defaultCart = [];
  const defaultPrice = 0;
  const [cartInState, updateCartInState] = useState(defaultCart);
  const [computed, comput] = useState(defaultPrice);
  const currentCartInClient = JSON.parse(localStorage.getItem("cartInClient"));

  useEffect(() => {
    const initialCartInState = localStorage.getItem("cartInClient")
      ? JSON.parse(localStorage.getItem("cartInClient"))
      : [];
    populateStatefromStorage(initialCartInState);
    comput(computePrice(initialCartInState));
  }, []);

  const populateStatefromStorage = (initialState) => {
    if (!localStorage.getItem("cartInClient"))
      localStorage.setItem("cartInClient", "[]");
    updateCartInState(initialState);
  };

  const handleRemove = (prodId) => {
    const indexArray = [];
    currentCartInClient.forEach((element, index) => {
      if (element.id === prodId) indexArray.push(index);
    });
    while (indexArray.length) {
      currentCartInClient.splice(indexArray.pop(), 1);
    }
    localStorage.setItem("cartInClient", JSON.stringify(currentCartInClient));
    //UPDATE STATE
    updateCartInState(currentCartInClient);
    comput(computePrice(currentCartInClient));
  };

  const handleAdd = (prodId) => {
    const productToAddToCart = products.filter((product) => {
      return product.id === prodId;
    });
    currentCartInClient.push(productToAddToCart[0]);
    localStorage.setItem("cartInClient", JSON.stringify(currentCartInClient));
    //UPDATE STATE
    updateCartInState(currentCartInClient);
    comput(computePrice(currentCartInClient));
  };

  const handleChange = () => {
    console.log("handleChange");
  };

  let cartLook;
  if (cartInState.length) {
    cartLook = removeDuplicates(cartInState, "id").map((product, index) => (
      <ShoppingCartItem
        title={product.title}
        price={product.price}
        id={product.id}
        key={index}
        qty={countDuplicates(product.id, cartInState)}
        // qty={.count(2)}
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
    <main className="container-fluid">
      <div className="row">
        <div className="col col-6 col-lg-8 p-4">
          <section className="row row-cols-1">
            <div className="col">
              <h1 className="mb-4">Shop</h1>
            </div>
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
          </section>
        </div>
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
                  <button
                    type="btn"
                    className="btn btn-primary btn-block btn-lg"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
