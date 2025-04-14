import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from '../redux/CartSlice';


const Cart = () => {
 
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch=useDispatch();
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
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
                <img src={item.image} alt={item.name}  style={{width:"80px"}}/>
                <h3>{item.name}</h3>
                <p>price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
              
            ))}
          </div>
          
        )}
      </div>

      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <div>
          <button style={{backgroundColor:"green"}} onClick={()=>dispatch(clearCart())}>clear cart</button>
        </div>

    </>
  );
};

export default Cart;
