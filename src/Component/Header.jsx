import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {FaMoon, FaSun} from "react-icons/fa"
import { toggleTheme } from "../redux/ThemeSlice";


const Header = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
         const theme=useSelector((store)=>store.theme.theme)
        const dispatch=useDispatch();

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
        <button onClick={() => {
    dispatch(toggleTheme());
    console.log("Theme toggled");
}}>
  {theme==="light" ? <FaMoon /> : <FaSun />}
</button>

      </nav>
    </header>
  );
};

export default Header;
