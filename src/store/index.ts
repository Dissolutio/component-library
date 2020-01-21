import { Action, configureStore } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import { rootReducer } from "./rootReducer";
import { getInitialData } from './gallerySlice'
import { getVRPin } from './vrPinSlice'

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, store, getInitialData, getVRPin };
