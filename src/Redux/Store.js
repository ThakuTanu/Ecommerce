// store.js or store.ts
import { configureStore } from '@reduxjs/toolkit';
import someSlice from './Reducer';


const store = configureStore({
  reducer: {
    app:someSlice.reducer
  }, 
});

export default store;
