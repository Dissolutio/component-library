import axios from 'axios'
import { VRPinData, VRPinUrl } from './constants'

export async function fetchVRPin(token: string): Promise<VRPinData> {
    try {
        const { data } = await axios.post(
            VRPinUrl,
            { token: `${token}` },
            { headers: { Authorization: `Bearer ${token}` } }
        )
        const PIN = transformVRPinData(data)
        return PIN
    } catch (error) {
        throw error
    }
}
const transformVRPinData = (data: VRPinData) => {
    return {
        pin: data.pin,
        exp: data.exp
    }
}
