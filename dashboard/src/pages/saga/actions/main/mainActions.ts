import {createAction} from "@reduxjs/toolkit";
import {IotParam, SensorEventParam, SensorEventParameter} from "../../../../config/interface/main/mainInterface";



const types = {
    REQUEST_GET_WEATHER_INFO : `REQUEST_GET_WEATHER_INFO`,
    REQUEST_GET_WARN_INFO : `REQUEST_GET_WARN_INFO`,
    REQUEST_GET_SENSOR_LIST : `REQUEST_GET_SENSOR_LIST`,
    REQUEST_GET_SENSOR_INFO  : `REQUEST_GET_SENSOR_INFO`,
    REQUEST_GET_SENSOR_RAWDATA : `REQUEST_GET_SENSOR_RAWDATA`,
    REQUEST_GET_SENSOR_STANDARD : `REQUEST_GET_SENSOR_STANDARD`,
    REQUEST_GET_SENSOR_EVENT_LIST: "REQUEST_GET_SENSOR_EVENT_LIST"

}

const actions = {
    requestGetWeatherInfo : createAction(types.REQUEST_GET_WEATHER_INFO),
    requestGetWarnInfo : createAction(types.REQUEST_GET_WARN_INFO),
    requestGetSensorList : createAction(types.REQUEST_GET_SENSOR_LIST),
    requestGetSensorInfo : createAction<string>(types.REQUEST_GET_SENSOR_INFO),
    requestGetSensorRawData : createAction<IotParam>(types.REQUEST_GET_SENSOR_RAWDATA),
    requestGetSensorStandard : createAction<string>(types.REQUEST_GET_SENSOR_STANDARD),
    requestGetSensorEventList : createAction<SensorEventParameter>(types.REQUEST_GET_SENSOR_EVENT_LIST),

}


export {types,actions}