import { Action, configureStore } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import { rootReducer } from "./rootReducer";
import { increment } from "./counterSlice";
import { addVideoSessions } from "./videoSessionsSlice";

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type RootState = ReturnType<typeof rootReducer>;

export { store, rootReducer, increment, addVideoSessions };
