import React from "react";

const Cart = () => {
  const cartItems = [
    { 
      id: 1, 
      name: "Product 1", 
      price: 10,
      image: "https://via.placeholder.com/100",
      quantity: 1
    },
    { 
      id: 2, 
      name: "Product 2", 
      price: 20,
      image: "https://via.placeholder.com/100",
      quantity: 1
    },
  ];
debugger
  return (
    <>
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Cart;
