import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: state => {
      let localState = { ...state };
      localState.value += 1;
      return localState;
    },
    decrement: state => {
      let localState = { ...state };
      localState.value -= 1;
      return localState;
    },
    incrementByAmount: (state, action) => {
      let localState = { ...state };
      localState.value += action.payload;
      return localState;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
/*
*************
Creating a slice requires a string name to 
identify the slice, an initial state value, 
and one or more reducer functions to define 
how the state can be updated. Once a slice is 
created, we can export the generated

 Redux action creators 
 and the 
 reducer function for the whole slice.

*************
 */
