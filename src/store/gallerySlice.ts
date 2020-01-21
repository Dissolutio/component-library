import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '.';
import { getTreeBase } from './terraApi';
import { ApiSeriesModel, ApiSessionsModel, ApiVideoModelBasic } from './terraApi/constants';

export interface GallerySeriesModel extends ApiVideoModelBasic {
    children: number[]
}
export interface GallerySessionsRecord {
    [key: string]: ApiSessionsModel
}
export interface GallerySeriesRecord {
    [key: string]: GallerySeriesModel
}
export interface GalleryState {
    authToken: string
    videoSeries: GallerySeriesRecord
    videoSessions: GallerySessionsRecord
    loadingInit: boolean
    errorInit: string | null
}
const initialState: GalleryState = {
    authToken: '',
    videoSeries: {},
    videoSessions: {},
    loadingInit: false,
    errorInit: null
}
const galleryDataSlice = createSlice({
    name: 'galleryData',
    initialState,
    reducers: {
        getInitalDataStart(galleryData, action: Action) {
            galleryData.loadingInit = true
            galleryData.errorInit = null
        },
        getInitalDataSuccess(galleryData, action: Action) {
            galleryData.loadingInit = false
            galleryData.errorInit = null
        },
        getInitalDataFailure(galleryData, action: PayloadAction<string>) {
            galleryData.loadingInit = false
            galleryData.errorInit = action.payload
        },
        addVideoSeries(state, action: PayloadAction<ApiSeriesModel[]>) {
            action.payload.forEach(newVideoSeries => {
                const childrenById = { children: newVideoSeries.children.data.map(session => session.id) }
                state.videoSeries[newVideoSeries.id] = Object.assign({}, newVideoSeries, childrenById)
            })
        },
        addVideoSessions(state, action: PayloadAction<ApiSessionsModel[]>) {
            action.payload.forEach(newVideoSession => {
                state.videoSessions[newVideoSession.id] = newVideoSession
            })
        },
    }
})

export const {
    getInitalDataStart,
    getInitalDataSuccess,
    getInitalDataFailure,
    addVideoSessions,
    addVideoSeries,
} = galleryDataSlice.actions
// THUNKS
export const getInitialData = (authToken: string): AppThunk => async dispatch => {
    try {
        dispatch(getInitalDataStart())
        const { videoSeries, videoSessions } = await getTreeBase(authToken)
        dispatch(getInitalDataSuccess())
        dispatch(addVideoSeries(videoSeries))
        dispatch(addVideoSessions(videoSessions))
    } catch (error) {
        getInitalDataFailure(error)
    }
}
export default galleryDataSlice.reducer