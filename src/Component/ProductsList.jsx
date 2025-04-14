import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/ProductsThunk";
import { addToCart } from "../redux/CartSlice";

const ProductsList = () => {
  const[query,setQuerry]=useState("");

  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.products);
console.log("products list1",products)



const productss=products.filter((product)=> product ?.category ?.toLowerCase().includes("query"))
console.log("productss",productss)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
        <input type="text" style={{margin:"20px",height:"30px",width:"180px" ,textAlign:"center"}} placeholder="search" onChange={(e)=>setQuerry(e.target.value)} />
      <div  style={{  display: "flex",flexWrap: "wrap", gap: "10px", }}>
        {products.filter((product)=>
         product?.name?.toLowerCase().includes(query.toLowerCase()) ||
         product?.category?.toLowerCase().includes(query.toLowerCase())
        
        ) 
         ?.map((product)=> 
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
            
            <h3> {product.title}</h3>
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
