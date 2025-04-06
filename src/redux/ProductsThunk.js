import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
"products/fetchProducts",
  async () => {
  
    const response = await fetch('https://67efa7932a80b06b889534c4.mockapi.io/product');
    // console.log("fetch products",response)
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  }

);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (productData) => {
    const response = await fetch('https://67efa7932a80b06b889534c4.mockapi.io/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error('Failed to add product');
    }

    return response.json(); // API returns the created product
  }
);