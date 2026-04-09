import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LatLng, LatLngExpression, LatLngTuple} from "leaflet";
import {LAYER} from "../../../../../config/const/commonConst";
import {CctvData} from "../../../../../config/interface/event/eventInterface";
import EventGisSetting from "../../../../components/event/gis/setting/eventGisSetting";

interface eventGisType {
    layerType: string,
    eventMapCenter: LatLngTuple,
    eventZoomLevel: number,
    eventVideoReloadCnt: number,
    activeCctv: CctvData | null,
    playEventLatLng : LatLngExpression | null,
    gisSetIconList : string[],
}

const initialState: eventGisType = {
    layerType: LAYER.sate,
    eventMapCenter: [37.199782, 126.830556],
    eventZoomLevel: 16,
    eventVideoReloadCnt: 0,
    activeCctv: null,
    playEventLatLng : null,
    gisSetIconList : ["cctv","tidelevel"],
}

const eventGisStore = createSlice({
    name: 'eventGisStore',
    initialState: initialState,
    reducers: {
        updateEventLayerType: (state: eventGisType = initialState, action: PayloadAction<string>) => {
            return {
                ...state,
                layerType: action.payload
            }
        },
        updateEventMapCenter: (state: eventGisType, action: PayloadAction<LatLngTuple>) => {
            return {
                ...state,
                eventMapCenter: action.payload
            }
        },
        updateVideoReloadCnt: (state: eventGisType, action: PayloadAction<number>) => {
            return {
                ...state,
                eventVideoReloadCnt: state.eventVideoReloadCnt + 1
            }
        },
        updateActiveCctv: (state: eventGisType, action: PayloadAction<CctvData | null>) => {
            return {
                ...state,
                activeCctv: action.payload
            }
        },
        updateEventZoomLevel: (state: eventGisType, action: PayloadAction<number>) => {
            return {
                ...state,
                eventZoomLevel: action.payload
            }
        },
        updatePlayEventLatLng : (state:eventGisType, action:PayloadAction<LatLngExpression | null>) => {
            return{
                ...state,
                playEventLatLng : action.payload
            }
        },
        updateGisSetIconList : (state:eventGisType, action : PayloadAction<string[]>)=>{
            return{
                ...state,
                gisSetIconList : action.payload
            }
        }
    }
})

export const {
    updateEventLayerType,
    updateEventMapCenter,
    updateEventZoomLevel,
    updateVideoReloadCnt,
    updateActiveCctv,
    updatePlayEventLatLng,
    updateGisSetIconList,
} = eventGisStore.actions

export default eventGisStore