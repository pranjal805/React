// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userdetailsReducer from './slice/userslice'; 
const store = configureStore({
  reducer: {
    userdetails: userdetailsReducer,
  },
});

export default store;
