import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartActions";
import Menu from "./Menu";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Mleko", price: 5.99 },
    { id: 2, name: "Chleb", price: 3.49 },
  ];

  return (
    <div>
      <Menu />
      <h2>Lista Produktów</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} zł
            <button onClick={() => dispatch(addToCart(product))}>
              Dodaj do koszyka
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
