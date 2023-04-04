import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "./util";
import type { PayloadAction } from "@reduxjs/toolkit";

// action creator

export const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId: number, thunkAPI) => {
    const response = await userAPI(userId);
    return response;
  }
);

// slice/reducer creator

interface userData {
  userId: number;
  businessId: any;
  text: string;
}

interface usersState {
  entities: userData[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  entities: [],
  loading: "idle",
} as usersState;

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchUserById.fulfilled,
      (state, action: PayloadAction<userData>) => {
        state.entities.push(action.payload);
      }
    );
  },
});
