import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartActions";
import Menu from "./Menu";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <Menu />
      <h2>Koszyk</h2>
      {cartItems.length === 0 ? (
        <p>Koszyk jest pusty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} zł
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Usuń
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
