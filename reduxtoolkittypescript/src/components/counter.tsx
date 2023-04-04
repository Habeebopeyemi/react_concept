import React, { FC } from "react";

import { useAppSelector, useAppDispatch } from "../redux/hook";

// import { decrement, increment } from "../redux/slice/counterSlice";
import {
  increment,
  decrement,
  increaseByAmount,
} from "../redux/createaction/actions";
import { fetchUserById } from "../redux/createasyncthunk/createAsyncThunk";

const Counter: FC = () => {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
    dispatch(fetchUserById(4));
  }

  return (
    <div>
      <span>{count}</span>
      <div>
        <button
          aria-label="Increment value"
          onClick={handleIncrement}>
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button
          aria-label="Increment by amount"
          onClick={() => dispatch(increaseByAmount(3))}>
          Increment by amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
