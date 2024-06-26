import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import cartReducer from './slices/cartSlice'
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    user:userSlice
  },
});

export default store;
