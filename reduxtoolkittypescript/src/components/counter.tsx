import React, { FC } from "react";

import { useAppSelector, useAppDispatch } from "../redux/hook";

import { decrement, increment } from "../redux/slice/counterSlice";

const Counter: FC = () => {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
