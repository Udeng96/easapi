import {
    IotRawData, IotStandardData,
    SensorInfo,
    WarnInfo,
    WeatherInfo
} from "../../../../config/interface/main/mainInterface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../rootStore";
import {EventInfo} from "../../../../config/interface/event/eventInterface";

interface MainServerType {
    weatherInfo: WeatherInfo[],
    warnInfo: WarnInfo[],
    sensorList: SensorInfo[],
    activeSensor: SensorInfo | null,
    rawDataList: IotRawData[],
    sensorStandard: IotStandardData | null,
    sensorTodayEventList: EventInfo[],
    sensorMonthEventList: EventInfo[],


}

const initialState: MainServerType = {
    weatherInfo: [],
    warnInfo: [],
    sensorList: [],
    activeSensor: null,
    rawDataList: [],
    sensorStandard: null,
    sensorTodayEventList: [],
    sensorMonthEventList: [],
}

const MainServerStore = createSlice({
    name: 'mainServerStore',
    initialState: initialState,
    reducers: {
        updateWeatherInfo: (state: MainServerType = initialState, action: PayloadAction<WeatherInfo[]>) => {
            return {
                ...state,
                weatherInfo: action.payload
            }
        },
        updateWarnInfo: (state: MainServerType = initialState, action: PayloadAction<WarnInfo[]>) => {
            return {
                ...state,
                warnInfo: action.payload
            }
        },
        updateSensorList: (state: MainServerType = initialState, action: PayloadAction<SensorInfo[]>) => {
            return {
                ...state,
                sensorList: action.payload
            }
        },
        updateSensorInfo: (state: MainServerType = initialState, action: PayloadAction<SensorInfo | null>) => {
            return {
                ...state,
                activeSensor: action.payload
            }
        },
        updateIotRawData: (state: MainServerType = initialState, action: PayloadAction<IotRawData[]>) => {
            return {
                ...state,
                rawDataList: action.payload
            }
        },
        updateIotStandard: (state: MainServerType = initialState, action: PayloadAction<IotStandardData | null>) => {
            return {
                ...state,
                sensorStandard: action.payload
            }
        },
        updateSensorTodayList: (state: MainServerType = initialState, action: PayloadAction<EventInfo[]>) => {
            return {
                ...state,
                sensorTodayEventList: action.payload
            }
        },
        updateSensorMonthList: (state: MainServerType = initialState, action: PayloadAction<EventInfo[]>) => {
            return {
                ...state,
                sensorMonthEventList: action.payload
            }
        }
    }
})

export const {

    updateWeatherInfo,
    updateWarnInfo,
    updateSensorList,
    updateSensorInfo,
    updateIotRawData,
    updateIotStandard,
    updateSensorTodayList,
    updateSensorMonthList
} = MainServerStore.actions

export default MainServerStore