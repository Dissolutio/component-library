export interface VideoSession {
    name: string;
    id: string;
}
export interface IVideoSessionRecord {
    [key: string]: VideoSession;
}
export declare const addVideoSessions: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<VideoSession[], string>;
declare const _default: import("redux").Reducer<IVideoSessionRecord, import("redux").AnyAction>;
export default _default;
