import { Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { getInitialData } from './gallerySlice';
import { getVRPin } from './vrPinSlice';
declare const store: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    galleryData: import("./gallerySlice").GalleryState;
    vrPin: import("./vrPinSlice").VRPinState;
}>, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    galleryData: import("./gallerySlice").GalleryState;
    vrPin: import("./vrPinSlice").VRPinState;
}>, import("redux").AnyAction, undefined>]>;
export declare type AppDispatch = typeof store.dispatch;
export declare type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export declare type RootState = ReturnType<typeof rootReducer>;
export { rootReducer, store, getInitialData, getVRPin };
