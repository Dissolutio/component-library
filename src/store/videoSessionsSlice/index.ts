import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { exampleVideoSession } from './videoSessions.spec'

// this is the schema for a video session (we'll update it)
export interface VideoSession {
    name: string
    id: string
}
// store the sessions in an object, keyed by their ID's
export interface IVideoSessionRecord {
    [key: string]: VideoSession
}
// load in one sample video
const initialState: IVideoSessionRecord = {
    [exampleVideoSession.id]: exampleVideoSession
}
const videoSessionsSlice = createSlice({
    name: 'videoSessions',
    initialState,
    reducers: {
        // creates an action of type "videoSessions/addVideoSessions" and accepts payloads that are an array of sessions
        // ALSO, internally uses Immer library, which lets you write mutative code and it internally runs immutable code
        addVideoSessions(state, action: PayloadAction<VideoSession[]>) {
            action.payload.forEach(videoSession => {
                state[videoSession.id] = videoSession
            })
        }
    }
})

export const {
    addVideoSessions
} = videoSessionsSlice.actions

export default videoSessionsSlice.reducer