import React from "react";

import "./App.scss";

import img_1 from "./img/img_1.jpeg";
import img_2 from "./img/img_2.jpeg";
import img_3 from "./img/img_3.jpeg";
import img_4 from "./img/img_4.jpeg";
import img_5 from "./img/img_5.jpeg";
import img_6 from "./img/img_6.jpeg";

import ProductCard from "./components/ProductCard";
import ShoppingCartItem from "./components/ShoppingCartItem";

// Render the products dinamically with a loop
import products from "./products";

function App() {
  function handleRemove() {
    console.log("handleRemove");
  }

  function handleChange() {
    console.log("handleChange");
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
                {/* {products.map((product) => (
                  map over products
                ))} */}
                <ProductCard
                  img={img_1}
                  title="Nike Runner 2000"
                  price={88}
                  handleAddToCart={() => {
                    console.log("Add to cart");
                  }}
                />
                <div className="col mb-4 d-flex flex-column product__card">
                  <img className="product__img" src={img_2} alt="" />
                  <div className="d-block">
                    <h3 className="h5">Puma 80's</h3>
                    <p>109€</p>
                    <button className="btn btn-dark">Add to cart</button>
                  </div>
                </div>
                <div className="col mb-4 d-flex flex-column product__card">
                  <img className="product__img" src={img_3} alt="" />
                  <div className="d-block">
                    <h3 className="h5">Nike Rev Lite</h3>
                    <p className="">66€</p>
                    <button className="btn btn-dark">Add to cart</button>
                  </div>
                </div>
                <div className="col mb-4 d-flex flex-column product__card">
                  <img className="product__img" src={img_4} alt="" />
                  <div className="d-block">
                    <h3 className="h5">Nike Air</h3>
                    <p className="">129€</p>
                    <button className="btn btn-dark">Add to cart</button>
                  </div>
                </div>
                <div className="col mb-4 d-flex flex-column product__card">
                  <img className="product__img" src={img_5} alt="" />
                  <div className="d-block">
                    <h3 className="h5">Adidas Run Kit</h3>
                    <p className="">199€</p>
                    <button className="btn btn-dark">Add to cart</button>
                  </div>
                </div>
                <div className="col mb-4 d-flex flex-column product__card">
                  <img className="product__img" src={img_6} alt="" />
                  <div className="d-block">
                    <h3 className="h5">Adidas Flyer</h3>
                    <p className="">59€</p>
                    <button className="btn btn-dark">Add to cart</button>
                  </div>
                </div>
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

            <ShoppingCartItem
              title="Nike Runner 2000"
              price={88}
              img={img_1}
              handleRemove={handleRemove}
              handleChange={handleChange}
            />

            <div className="col shopping__cart__item">
              <div className="row flex-column">
                <div className="col">
                  <div className="row">
                    <div className="col-12 col-xl-4 mb-3 mb-xl-0">
                      <img className="shopping__cart__img" src={img_2} alt="" />
                    </div>
                    <div className="col-12 col-xl-8">
                      <div className="row flex-column">
                        <div className="col">
                          <h4 className="h5 product-name">
                            <strong>Puma 80's</strong>
                          </h4>
                        </div>
                        <div className="col">
                          <p>
                            <strong>109€</strong>
                          </p>
                        </div>
                        <div className="col mt-auto">
                          <div className="row">
                            <div className="col col-6 col-lg-4">
                              <select
                                defaultValue="2"
                                className="custom-select"
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
                            <div className="col col-6 col-lg-8">
                              <button type="btn" className="btn btn-dark">
                                Remove
                              </button>
                            </div>
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
