import {
    IotParam, IotRawResponse, IotStandardData, SensorEventParam, SensorEventParameter,
    SensorInfo,
    SensorResponse,
    WarnInfoResponse,
    WeatherResponse
} from "../../../config/interface/main/mainInterface";
import {call, put, takeLatest, takeEvery} from "redux-saga/effects";
import {
    fetchSensorEventList,
    fetchSensorInfo,
    fetchSensorList, fetchSensorRawData, fetchSensorStandard,
    fetchWarnInfo,
    fetchWeatherInfo
} from "../apis/main/mainApis";
import {types} from "../actions/main/mainActions";
import {
    updateIotRawData,
    updateSensorInfo,
    updateSensorList,
    updateWarnInfo,
    updateWeatherInfo,
    updateIotStandard, updateSensorTodayList, updateSensorMonthList
} from "../../store/server/main/mainServerStore";
import {PayloadAction} from "@reduxjs/toolkit";
import {EventResponse} from "../../../config/interface/event/eventInterface";
import {SENSOR_EVENT_TYPE} from "../../../config/const/commonConst";

const requestWeatherInfo = function* () {
    try{
        const response : WeatherResponse = yield call(fetchWeatherInfo);




        yield put(updateWeatherInfo(response.data));

    }catch (e) {
        console.log("e:",e);
    }
}

const requestWarnInfo = function* () {
    try{
        const response : WarnInfoResponse = yield call(fetchWarnInfo);

        if(response.code!=="003"){
            yield put(updateWarnInfo(response.data));
        }else{
            yield put(updateWarnInfo([]));
        }
    }catch (e) {
        console.log("e:",e);
    }
}

const requestSensorList = function*() {
    try{
        const response : SensorResponse = yield call(fetchSensorList);

        yield put(updateSensorList(response.data));
    }catch (e){
        console.log("e:",e);
    }
}

const requestSensorInfo = function*(action:PayloadAction<string>) {
    try{
        const response : SensorInfo = yield call(fetchSensorInfo, action.payload);
        yield put(updateSensorInfo(response));
    }catch (e) {
        console.log("e:",e);
    }
}

const requestSensorRawData = function*(action: PayloadAction<IotParam>){
    try{
        const response : IotRawResponse = yield call(fetchSensorRawData, action.payload);
        yield put(updateIotRawData(response.data));
    }catch (e) {
        console.log("e:",e);
    }
}

const requestSensorStandard = function*(action : PayloadAction<string>){
    try{
        const response : IotStandardData = yield call(fetchSensorStandard,action.payload);
        yield put(updateIotStandard(response))
    }catch (e) {
        console.log("e:",e);
    }
}

const requestSensorEventList = function*(action : PayloadAction<SensorEventParameter>){
    try {
        const response: EventResponse = yield call(fetchSensorEventList, action.payload.param);
        if (action.payload.type === SENSOR_EVENT_TYPE.day){
            yield put(updateSensorTodayList(response.eventList));
        }else{
            yield put(updateSensorMonthList(response.eventList));
        }
    }catch (e) {
        console.log("e:",e);
    }
}





export default function* MainSaga(){
    yield takeLatest(types.REQUEST_GET_WEATHER_INFO, requestWeatherInfo);
    yield takeLatest(types.REQUEST_GET_WARN_INFO, requestWarnInfo);
    yield takeLatest(types.REQUEST_GET_SENSOR_LIST,requestSensorList);
    yield takeLatest(types.REQUEST_GET_SENSOR_INFO,requestSensorInfo);
    yield takeLatest(types.REQUEST_GET_SENSOR_RAWDATA,requestSensorRawData);
    yield takeLatest(types.REQUEST_GET_SENSOR_STANDARD,requestSensorStandard);
    yield takeEvery(types.REQUEST_GET_SENSOR_EVENT_LIST,requestSensorEventList);
}

