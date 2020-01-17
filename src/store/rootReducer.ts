import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import videoSessionsReducer from "./videoSessionsSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  videoSessions: videoSessionsReducer
});
