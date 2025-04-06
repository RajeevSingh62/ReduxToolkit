import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addProduct } from "../redux/ProductsThunk";

const ProductList = () => {
  const dispatch = useDispatch();
  
  const { products } = useSelector((state) => state.products);

  const [title, setTitle] = useState("");
  const [description, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      title,
     description: description,
    };

    dispatch(addProduct(newProduct));
    setTitle("");
    setPrice("");
  };

  return (
    <div>
      <h2> Add product Products</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product description"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={description}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>

    
    </div>
  );
};

export default ProductList;
