import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import HomePage from "./components/HomePage";
import ProductList from "./components/ProductList";
import Services from "./components/Services";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Profil from "./components/Profil";

function App() {
  return (
    <Provider store={store}>
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
