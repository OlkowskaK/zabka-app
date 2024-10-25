import React from "react";
import { Link } from "react-router-dom";
import "./MenuCss.css";

import { FiHome, FiUser, FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { AiFillProduct } from "react-icons/ai"; // Używamy oryginalnej ikony

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FiHome className="icon" />
            <p>Start</p>
          </Link>
        </li>
        <li>
          <Link to="/products">
            <FiShoppingBag className="icon" />
            <p>Żabka</p>
          </Link>
        </li>
        <li>
          <Link to="/services">
            <AiFillProduct className="icon" /> {/* Używamy oryginalnej ikony */}
            <p>Usługi</p>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <FiShoppingCart className="icon" />
            <p>Koszyk</p>
          </Link>
        </li>
        <li>
          <Link to="/profil">
            <FiUser className="icon" />
            <p>Profil</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
