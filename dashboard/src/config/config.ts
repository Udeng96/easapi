import {LatLngTuple} from "leaflet";


export const domain = (window.location.host);


// const API_URL : string = `http://localhost:22510/eas`;
const API_URL : string = `http://${domain}/eas`; //배포용

export const STREAM_URL = `ws://${domain}/xeus-gate-1/stream`;
export const HS_POS : LatLngTuple = [37.199782, 126.830556];

export const PLAYER_ID_PREFIX = 'player'

// const API_WS_URL : string = `ws://localhost:22510/eas/ws/event`;
const API_WS_URL : string = `ws://${domain}/eas/rino/event`;

const URL_API = {
    WEATHER_INFO : `${API_URL}/api/weather/forecast`, // 기상 예보
    WARN_INFO : `${API_URL}/api/weather/warnInfo` // 기상 특보
}

const URL_EVENT = {
    EVENT_LIST : `${API_URL}/event`,
    EVNET_TARGET : `${API_URL}/member/target`,
    EVENT_RELEASE : `${API_URL}/event/updSt`,
}

const URL_HISTORY = {
    HISTORY_TRANSFER : `${API_URL}/disaster/upd`,
    HISTORY_HISTORY : `${API_URL}/disaster/{id}`
}

const URL_SENSOR = {
    SENSOR_LIST : `${API_URL}/iot/device`,
    SENSOR_RAWDATA : `${API_URL}/iot/raw`,
    SENSOR_LATEST : `${API_URL}/iot/latest`,
    SENSOR_STANDARD : `${API_URL}/iot/standard`,
    SENSOR_EVENT_LIST : `${API_URL}/event/sensor`,
}

const URL_IOT = {
    DEVICE_LIST : `${API_URL}/iot/device`,
    STAT_DATA : `${API_URL}/iot/stat`,
    EXCEL_DOWNLOAD : `${API_URL}/iot/excel/download`
}

const URL_CCTV = {
    CCTV_LIST : `${API_URL}/cctv`
}

const API = {
    API_WS_URL,
    API : {
        URL_API
    },
    EVENT : {
        URL_EVENT,
    },
    SENSOR : {
        URL_SENSOR,
    },
    HISTORY : {
        URL_HISTORY
    },
    IOT : {
        URL_IOT
    },
    CCTV : {
        URL_CCTV
    }
}

export default {
    API,
}

