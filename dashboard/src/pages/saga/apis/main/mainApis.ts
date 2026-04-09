import {xhr} from "../xhr";
import conf from "../../../../config/config";
import {IotParam, IotStandardData, SensorEventParam} from "../../../../config/interface/main/mainInterface";
import {Util} from "leaflet";
import getParamString = Util.getParamString;

export const fetchWeatherInfo = async () => {
    const {data} = await xhr.get(conf.API.API.URL_API.WEATHER_INFO);
    return data;
}

export const fetchWarnInfo = async() => {
    const {data} = await xhr.get(conf.API.API.URL_API.WARN_INFO);
    return data;
}

export const fetchSensorList = async() => {
    const {data} = await xhr.get(conf.API.SENSOR.URL_SENSOR.SENSOR_LIST);
    return data;
}

export const fetchSensorInfo = async(id:string) => {
    const {data} = await xhr.get(conf.API.SENSOR.URL_SENSOR.SENSOR_LIST+`/${id}`);
    return data;
}

export const fetchSensorRawData = async(param: IotParam) => {
    const {data} = await xhr.get(conf.API.SENSOR.URL_SENSOR.SENSOR_RAWDATA,{params : param});
    return data;
}

export const fetchSensorStandard = async(param : string) => {
    const {data} = await xhr.get(conf.API.SENSOR.URL_SENSOR.SENSOR_STANDARD+`?sensorId=${param}`);
    return data;
}

export const fetchSensorEventList = async(param : SensorEventParam) => {
    const {data} = await xhr.get(conf.API.SENSOR.URL_SENSOR.SENSOR_EVENT_LIST,{params : param})
    return data
}