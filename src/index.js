import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/App.scss";

// import ProductCard from "./components/ProductCard";
import { Aside } from "./components/Aside";
import { Catalog } from "./components/Catalog";

import { computePrice } from "././helpers/computePrice";
// import { countDuplicates } from "././helpers/countDuplicates";

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

  const handleAdd = (prodId, qty) => {
    const productToAddToCart = products.filter((product) => {
      return product.id === prodId;
    });
    for (var i = 0; i < qty; i++) {
      currentCartInClient.push(productToAddToCart[0]);
    }
    localStorage.setItem("cartInClient", JSON.stringify(currentCartInClient));
    //UPDATE STATE
    updateCartInState(currentCartInClient);
    comput(computePrice(currentCartInClient));
  };

  const handleChange = (prodId, qty) => {
    handleRemove(prodId);
    handleAdd(prodId, qty);
  };

  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col col-6 col-lg-8 p-4">
          <section className="row row-cols-1">
            <div className="col">
              <h1 className="mb-4">Shop</h1>
            </div>
            <Catalog
              products={products}
              handleAdd={handleAdd}
              cartInState={cartInState}
            />
          </section>
        </div>
        <Aside
          cartInState={cartInState}
          handleRemove={handleRemove}
          handleChange={handleChange}
          computed={computed}
        />
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
