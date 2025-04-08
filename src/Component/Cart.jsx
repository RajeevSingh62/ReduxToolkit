import React from "react";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      image: "https://via.placeholder.com/100",
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      image: "https://via.placeholder.com/100",
      quantity: 1,
    },
  ];

  return (
    <>
      <div style={{ alignItems: "center" }}>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>cart is empty </p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  margin: "10px",
                  width: "200px",
                }}
              >
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
