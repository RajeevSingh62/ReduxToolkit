import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);


  return (
    <header
      style={{
        padding: "15px 30px",
        background: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.72)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <h2 style={{ margin: 0, color: "#333" }}>🛍️ My Store</h2>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          Products
        </Link>
        <Link
          to="/cart"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
            fontSize: "16px",
            position: "relative",
          }}
        >
          🛒 Cart{" "}
          <span
            style={{
              backgroundColor: "crimson",
              color: "white",
              borderRadius: "50%",
              padding: "2px 8px",
              fontSize: "12px",
              position: "absolute",
              top: "-8px",
              right: "-16px",
            }}
          >
            {cartItems.length}
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
