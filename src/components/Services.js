import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartActions";
import Menu from "./Menu";

const Services = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <Menu />
      <h2>Usługi</h2>
    </div>
  );
};

export default Services;
