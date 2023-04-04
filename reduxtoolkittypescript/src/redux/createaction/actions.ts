import { createAction } from "@reduxjs/toolkit";

export const increment = createAction<number | undefined>("counter/increment");
export const decrement = createAction<number | undefined>("counter/decrement");
export const increaseByAmount = createAction<number | undefined>(
  "counter/incresebyamount"
);
// console.log(increment(), decrement(), increaseByAmount(7));
