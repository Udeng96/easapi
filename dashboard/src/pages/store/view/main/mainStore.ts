import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LatLng, LatLngTuple} from "leaflet";
import {SensorInfo} from "../../../../config/interface/main/mainInterface";
import {CctvData} from "../../../../config/interface/event/eventInterface";

interface mainType{
    activeNav: string,
    activeLayer : string,
    detailMapCenter : LatLngTuple,
    mapCenter : LatLngTuple,
    detailMapZoomLevel : number,
    mapZoomLevel : number,
    activeSensor : SensorInfo | null,
    activeSensorIconList : SensorInfo[],
    activeMainMarker : SensorInfo|null,
    activeDetailMarker : SensorInfo|null,
    activeDetailCctv : CctvData|null,
}

const initialState : mainType = {
    activeNav : 'main',
    activeLayer : 'satellite',
    detailMapCenter : [37.199782, 126.980556],
    mapCenter : [37.199782, 126.830556],
    detailMapZoomLevel : 16,
    mapZoomLevel : 12,
    activeSensorIconList : [],
    activeSensor : null,
    activeMainMarker : null,
    activeDetailMarker : null,
    activeDetailCctv : null,
}

const mainStore = createSlice({
    initialState:initialState,
    reducers : {
        updateNav : (state: mainType = initialState, action:PayloadAction<string>) => {
            return{
                ...state,
                activeNav : action.payload
            }
        },
        updateLayer : (state:mainType = initialState, action:PayloadAction<string>) => {
            return{
                ...state,
                activeLayer : action.payload
            }
        },

        updateDetailCenter : (state:mainType = initialState, action : PayloadAction<LatLngTuple>) => {
            return{
                ...state,
                detailMapCenter : action.payload
            }
        },

        updateCenter : (state:mainType = initialState, action:PayloadAction<LatLngTuple>) => {
            return{
                ...state,
                mapCenter : action.payload
            }
        },

        updateDetailZoomLevel : (state:mainType = initialState, action:PayloadAction<number>) => {
            return{
                ...state,
                detailMapZoomLevel : action.payload
            }
        },

        updateZoomLevel : (state:mainType = initialState, action:PayloadAction<number>) => {
            return{
                ...state,
                mapZoomLevel : action.payload
            }
        },
        updateActiveSensorIconList : (state:mainType = initialState, action:PayloadAction<SensorInfo[]>)=>{

            return{
                ...state,
                activeSensorIconList : action.payload
            }
        },
        updateActiveMainMarker : (state:mainType = initialState, action:PayloadAction<SensorInfo | null> ) => {
            return{
                ...state,
                activeMainMarker : action.payload
            }
        },
        updateActiveSensor : (state:mainType = initialState, action : PayloadAction<SensorInfo |null>) => {
            return{
                ...state,
                activeSensor : action.payload
            }
        },
        updateActiveDetailMarker : (state:mainType = initialState, action: PayloadAction<SensorInfo | null>)=>{
            return{
                ...state,
                activeDetailMarker : action.payload
            }
        },
        updateActiveDetailCctv : (state:mainType = initialState, action: PayloadAction<CctvData | null>)=>{
            return{
                ...state,
                activeDetailCctv : action.payload
            }
        }
    },
    name : 'mainStore',
})


export const {
    updateNav,
    updateLayer,
    updateDetailCenter,
    updateCenter,
    updateDetailZoomLevel,
    updateZoomLevel,
    updateActiveSensorIconList,
    updateActiveMainMarker,
    updateActiveSensor,
    updateActiveDetailMarker,
    updateActiveDetailCctv,

} = mainStore.actions

export default mainStore