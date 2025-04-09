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
            <p>{product.name}</p>
            <img src={product.image} alt="product.name"  style={{width:"120px"}}/>
              <p><strong>Price:</strong> {product.price}</p>
              <p>{product.description}</p>
              <button onClick={()=>dispatch(addToCart(product))}>AddToCart</button>
            </div>
          )})
        }
      </div>
    </>
  );
};

export default ProductsList;
