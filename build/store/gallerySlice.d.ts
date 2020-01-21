import { Action } from '@reduxjs/toolkit';
import { ApiSeriesModel, ApiSessionsModel, ApiVideoModelBasic } from './terraApi/constants';
export interface GallerySeriesModel extends ApiVideoModelBasic {
    children: number[];
}
export interface GallerySessionsRecord {
    [key: string]: ApiSessionsModel;
}
export interface GallerySeriesRecord {
    [key: string]: GallerySeriesModel;
}
export interface GalleryState {
    authToken: string;
    videoSeries: GallerySeriesRecord;
    videoSessions: GallerySessionsRecord;
    loadingInit: boolean;
    errorInit: string | null;
}
export declare const getInitalDataStart: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, getInitalDataSuccess: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, getInitalDataFailure: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string, string>, addVideoSessions: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<ApiSessionsModel[], string>, addVideoSeries: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<ApiSeriesModel[], string>;
export declare const getInitialData: (authToken: string) => import("redux-thunk").ThunkAction<void, import("redux").CombinedState<{
    galleryData: GalleryState;
    vrPin: import("./vrPinSlice").VRPinState;
}>, null, Action<string>>;
declare const _default: import("redux").Reducer<GalleryState, import("redux").AnyAction>;
export default _default;
