// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from "./CartSlice"
// import productsReducer from './ProductSlice';
// const store = configureStore({
//   reducer: {  
//     products: productsReducer,
//     cart: cartReducer,
//   }
// });

// export default store;



//==========After implementing the redux persist=================

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import cartReducer from './CartSlice';
import productsReducer from './ProductSlice';

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // persist only the cart slice
};

// Create persisted reducer for the cart
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: persistedCartReducer, // Use persisted cart reducer
  },
});

// Create the persistor to handle rehydration
const persistor = persistStore(store);

export { store, persistor };
