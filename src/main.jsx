// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'


// import { Provider } from 'react-redux'
// import store from './redux/Store.js'

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
 
//     <App />
 
//   </Provider>
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/Store.js'; // Import persistor

import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* PersistGate ensures that the persisted state is rehydrated */}
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
