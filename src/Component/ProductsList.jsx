import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/ProductsThunk";
import { addToCart } from "../redux/CartSlice";

const ProductsList = () => {

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
console.log("products list1",products)


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <h2>Products List</h2>
      <div  style={{  display: "flex",flexWrap: "wrap", gap: "10px", }}>
        {(Array.isArray(products) ? products : []).map((product)=> 
        {
        
          return(
            <div
              key={product.id}
              style={{
              
                border: "1px solid #ccc",
                padding: "10px",
                maxWidth: "300px",
              }}
            >
            
            <h3>Product ID: {product.id}</h3>
              <p><strong>Price:</strong> {product.price}</p>
              <p>{product.description}</p>
              <button onClick={dispatch=>{addToCart}}>AddToCart</button>
            </div>
          )})
        }
      </div>
    </>
  );
};

export default ProductsList;
