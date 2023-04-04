import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import counterReducer from "./slice/counterSlice";
import { counterReducer } from "./createreducer/reducers";
import { usersSlice } from "./createasyncthunk/createAsyncThunk";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { pokemonApi } from "../services/pokemon";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersSlice.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
