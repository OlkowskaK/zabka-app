import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Strona Główna</Link>
        </li>
        <li>
          <Link to="/products">Produkty</Link>
        </li>
        <li>
          <Link to="/cart">Koszyk</Link>
        </li>
        <li>
          <Link to="/checkout">Zamówienie</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
