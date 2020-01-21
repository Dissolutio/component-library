import axios from 'axios'
import { ApiTransformedTreeResponseBasic, ApiTreeResponseSeries, treeUrl } from './constants';

export async function getTreeBase(token: string): Promise<ApiTransformedTreeResponseBasic> {
    try {
        const { data } = await axios.get(`${treeUrl}?limit=1`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        const { videoSessions, videoSeries } = transformInitData(data)
        console.log("TCL: videoSessions, videoSeries", videoSessions, videoSeries)
        return { videoSessions, videoSeries }
    } catch (error) {
        throw error
    }
}
export async function getAllSessionsForSeries(token: string): Promise<ApiTransformedTreeResponseBasic> {
    try {
        const { data } = await axios.get(`${treeUrl}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        const { videoSessions, videoSeries } = transformInitData(data)
        console.log("TCL: videoSessions, videoSeries", videoSessions, videoSeries)
        return { videoSessions, videoSeries }
    } catch (error) {
        throw error
    }
}

const transformInitData = (data: ApiTreeResponseSeries) => {
    const videoSeries = data.data
    const videoSessions = videoSeries[0].children.data
    return { videoSeries, videoSessions }
}