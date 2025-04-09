import React from "react";
import cartImg from "../assets/shopping-cart.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <header
        style={{
          padding: "10px",
          background: "#f0f0f0",
          display: "flex",
          alignContent: "space-between",
        }}
      >
        <h2>My Store</h2>
        <nav>
          <Link to="/">Products</Link> |{" "}
          <Link to="/cart">🛒 Cart {cartItems.length} </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
