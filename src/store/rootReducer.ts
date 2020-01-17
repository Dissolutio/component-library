import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import videoSessionsReducer from "./videoSessionsSlice";

export default combineReducers({
  counter: counterReducer,
  videoSessions: videoSessionsReducer
});
