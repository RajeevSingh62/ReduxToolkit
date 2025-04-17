// import React from "react";
// import Header from "./Component/Header";
// import ProductsList from "./Component/ProductsList";
// import AddProducts from "./Component/AddProducts";
// import Cart from "./Component/Cart";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import "./App.css";
// import Login from "./Component/Authentication/Login";
// import Register from "./Component/Authentication/Register";

// const App = () => {
//   const theme = useSelector((store) => store.theme.theme);
//   console.log(theme);
//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<ProductsList />} />
//           <Route path="/cart" element={<Cart />} />

//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/addproducts" element={<AddProducts />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Component/Header";
import ProductsList from "./Component/ProductsList";
import AddProducts from "./Component/AddProducts";
import Cart from "./Component/Cart";
import Login from "./Component/Authentication/Login";
import Register from "./Component/Authentication/Register";

import "./App.css";
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  const theme = useSelector((store) => store.theme.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<ProductsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addproducts"
          element={
            <ProtectedRoute>
              <AddProducts />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
