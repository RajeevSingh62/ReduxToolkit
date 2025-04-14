import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./CartSlice"
import productsReducer from './ProductSlice';
import themeReducer from './ThemeSlice';


const store = configureStore({
  reducer: {  
    products: productsReducer,
    cart: cartReducer,
    theme:themeReducer,

  }
});

export default store;




