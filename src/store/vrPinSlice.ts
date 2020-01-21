import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit'
import { AppThunk } from '.'
import { VRPinData } from './terraApi/constants'
import { fetchVRPin } from './terraApi'
export interface VRPinState {
    pin: string
    exp: number
    error: string
    loading: boolean
}
const initialState: VRPinState = {
    pin: '',
    exp: 0,
    error: '',
    loading: false
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