import { Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import rootReducer from "./rootReducer";
import { increment } from "./counterSlice";
import { addVideoSessions } from "./videoSessionsSlice";
declare const store: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    counter: number;
    videoSessions: import("./videoSessionsSlice").IVideoSessionRecord;
}>, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    counter: number;
    videoSessions: import("./videoSessionsSlice").IVideoSessionRecord;
}>, import("redux").AnyAction, undefined>]>;
export declare type AppDispatch = typeof store.dispatch;
export declare type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export declare type RootState = ReturnType<typeof rootReducer>;
export { store, rootReducer, increment, addVideoSessions };
