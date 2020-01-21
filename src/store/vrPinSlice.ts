import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '.';
import { fetchVRPin } from './terraApi';
import { VRPinData } from './terraApi/constants';

export interface VRPinState {
    error: string
    exp: number
    loading: boolean
    pin: string
}
const initialState: VRPinState = {
    error: '',
    exp: 0,
    loading: false,
    pin: '',
}
const VRPinSlice = createSlice({
    name: 'vrPin',
    initialState,
    reducers: {
        getVRPinStart(vrPin, action: Action) {
            vrPin.loading = true
            vrPin.error = ''
        },
        getVRPinSuccess(vrPin, action: PayloadAction<VRPinData>) {
            vrPin.pin = action.payload.pin
            vrPin.exp = action.payload.exp
            vrPin.loading = false
            vrPin.error = ''
        },
        getVRPinFailure(vrPin, action: PayloadAction<string>) {
            vrPin.loading = false
            vrPin.error = action.payload
        },
    }
})

export const {
    getVRPinStart,
    getVRPinSuccess,
    getVRPinFailure
} = VRPinSlice.actions
// THUNKS
export const getVRPin = (authToken: string): AppThunk => async dispatch => {
    try {
        dispatch(getVRPinStart())
        const PIN = await fetchVRPin(authToken)
        dispatch(getVRPinSuccess(PIN))
    } catch (error) {
        getVRPinFailure(error)
    }
}
export default VRPinSlice.reducer