import { configureStore } from '@reduxjs/toolkit';
import appSlice from './app/appSlice';

const store = configureStore({
  reducer: { 
    appSlice,
  },
});

export default store;