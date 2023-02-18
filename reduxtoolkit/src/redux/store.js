import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
/**
 This creates a Redux store, and also automatically 
 configure the Redux DevTools extension so that 
 you can inspect the store while developing.
 */
