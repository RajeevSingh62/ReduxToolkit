import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      alert("add to cart");
      const item = action.payload;
      const existingItem = state.cartItems.find((p) => p.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: () => {},
    clearCart: () => {},
    decreaseQuantity: () => {},
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload);
      if (item) item.quantity += 1;
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
