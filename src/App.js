import React from "react";
import { useState, useEffect } from "react";

import "./App.scss";

import ProductCard from "./components/ProductCard";
import ShoppingCartItem from "./components/ShoppingCartItem";

import products from "./products";

function App() {
  const defaultCart = [];
  const [cartInState, updateCartInState] = useState(defaultCart);
  const currentCartInClient = JSON.parse(localStorage.getItem("cartInClient"));

  useEffect(() => {
    function populateStatefromStorage() {
      if (!localStorage.getItem("cartInClient"))
        localStorage.setItem("cartInClient", "[]");
      const initialCartInState = localStorage.getItem("cartInClient")
        ? JSON.parse(localStorage.getItem("cartInClient"))
        : [];
      updateCartInState(initialCartInState);
    }
    populateStatefromStorage();
  }, []);

  function handleRemove(prodId) {∫
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
  }

  function handleAdd(prodId) {
    const productToAddToCart = products.filter((product) => {
      return product.id === prodId;
    });
    currentCartInClient.push(productToAddToCart[0]);
    localStorage.setItem("cartInClient", JSON.stringify(currentCartInClient));
    //UPDATE STATE
    updateCartInState(currentCartInClient);
  }

  function handleChange() {
    console.log("handleChange");
  }

  function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }

  function countDuplicates(id) {
    var countOcurrences = cartInState.filter((element) => {
      return element.id === id;
    });
    return countOcurrences.length;
  }

  let cartLook;
  if (cartInState.length) {
    cartLook = removeDuplicates(cartInState, "id").map((product, index) => (
      <ShoppingCartItem
        title={product.title}
        price={product.price}
        id={product.id}
        key={index}
        qty={countDuplicates(product.id)}
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
                    qty={countDuplicates(product.id)}
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
                      <strong>306€</strong>
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
}

export default App;
