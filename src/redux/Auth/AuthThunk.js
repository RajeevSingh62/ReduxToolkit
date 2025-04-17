// redux/Auth/AuthThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://67efa7932a80b06b889534c4.mockapi.io/Users';

// Login thunk
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.get(API_URL);
      const users = res.data;
     
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        return user;
        console.log("user logged in ",user);
      } else {
        return rejectWithValue('Invalid email or password');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Register thunk
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post(API_URL, {
        name,
        email,
        password,
        role: 'user',
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
