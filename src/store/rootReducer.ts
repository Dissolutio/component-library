import { combineReducers } from "@reduxjs/toolkit";
import vrPinReducer from "./vrPinSlice";
import galleryReducer from "./gallerySlice";

export const rootReducer = combineReducers({
  vrPin: vrPinReducer,
  galleryData: galleryReducer
});
