import { Action } from '@reduxjs/toolkit';
import { VRPinData } from './terraApi/constants';
export interface VRPinState {
    error: string;
    exp: number;
    loading: boolean;
    pin: string;
}
export declare const getVRPinStart: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, getVRPinSuccess: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<VRPinData, string>, getVRPinFailure: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string, string>;
export declare const getVRPin: (authToken: string) => import("redux-thunk").ThunkAction<void, import("redux").CombinedState<{
    galleryData: import("./gallerySlice").GalleryState;
    vrPin: VRPinState;
}>, null, Action<string>>;
declare const _default: import("redux").Reducer<VRPinState, import("redux").AnyAction>;
export default _default;
