import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { 
    appSlice,
  },
});

export default store;