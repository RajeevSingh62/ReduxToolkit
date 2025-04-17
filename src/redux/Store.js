import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./CartSlice"
import productsReducer from './ProductSlice';
import themeReducer from './ThemeSlice';
import authReducer from './Auth/AuthSlice';

const store = configureStore({
  reducer: {  
    products: productsReducer,
    cart: cartReducer,
    theme:themeReducer,
    auth:authReducer

  }
});

export default store;




