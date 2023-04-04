import { createReducer } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  increment,
  decrement,
  increaseByAmount,
} from "../createaction/actions";

interface ICounterState {
  value: number;
}

const initialState = { value: 0 } as ICounterState;

// let incrementAction = increment();
// let decrementAction = decrement();
// let incrementByAmount = increaseByAmount(2);

export const counterReducer = createReducer(initialState, builder => {
  builder
    .addCase(increment, (state, action) => {
      state.value++;
    })
    .addCase(decrement, (state, action) => {
      state.value--;
    })
    .addCase(increaseByAmount.type, (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    });
});
