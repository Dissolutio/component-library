export const baseApiUrl = "https://api-dev.proj-terra.com/v1"
export const treeUrl = `${baseApiUrl}/tree`
export const VRPinUrl = `${baseApiUrl}/tokens/pin`

export type ApiVideoModelType = "series" | "sessions"

export interface ApiTreeResponseBase {
    count?: number
    next?: number
    nextType?: ApiVideoModelType
}
export interface ApiTreeResponseSeries extends ApiTreeResponseBase {
    data: ApiSeriesModel[]
}
export interface ApiTreeResponseSeriesChildren extends ApiTreeResponseBase {
    data: ApiSessionsModel[]
}
export interface ApiTransformedTreeResponseBasic {
    videoSeries: ApiSeriesModel[]
    videoSessions: ApiSessionsModel[]
}
export interface ApiVideoModelBasic {
    id: number
    type: ApiVideoModelType
    name: string
    shortName: string
    description: string
    thumbnail: string
}
export interface ApiSeriesModel extends ApiVideoModelBasic {
    isBookmark?: boolean
    children: ApiTreeResponseSeriesChildren
}
export interface ApiSessionsModel extends ApiVideoModelBasic {
    duration?: number
    percentWatched?: number
    video?: string
    video360?: string
    isStereo?: boolean
    seriesId?: number
}
export interface VRPinData {
    pin: string
    exp: number
}