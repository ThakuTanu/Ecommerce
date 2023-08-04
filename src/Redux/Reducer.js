// someReducer.js or someReducer.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Your initial state goes here
  name: 'John Doe',
  age: 30,
};

const someSlice = createSlice({
  name: 'some',
  initialState,
  reducers: {
    // Your reducer functions go here
    updateName(state, action) {
      state.name = action.payload;
    },
    updateAge(state, action) {
      state.age = action.payload;
    },
  },
});

export const { updateName, updateAge } = someSlice.actions;
export default someSlice;
