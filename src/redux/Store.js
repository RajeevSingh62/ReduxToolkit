import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './ProductSlice';
const store = configureStore({
  reducer: {  
    products: productsReducer,
    cart: cartReducer,
  }
});

export default store;