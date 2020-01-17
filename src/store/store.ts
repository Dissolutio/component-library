import { Action, configureStore } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import videoSessionsReducer from "./videoSessionsSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  videoSessions: videoSessionsReducer
});

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type RootState = ReturnType<typeof rootReducer>;

export { store, rootReducer };
