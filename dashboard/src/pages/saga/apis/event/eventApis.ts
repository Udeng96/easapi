import {xhr} from "../xhr";
import conf from "../../../../config/config";
import {EventInfo, ModalParam, TransferBody} from "../../../../config/interface/event/eventInterface";

export const fetchEventList = async () => {
    const {data} = await xhr.get(conf.API.EVENT.URL_EVENT.EVENT_LIST);

    return data
}

export const fetchLastEventList = async (param : ModalParam ) => {
    const {data} = await xhr.get(conf.API.EVENT.URL_EVENT.EVENT_LIST,{params : param});
    return data
}

 export const fetchTargetList  = async() => {
    const {data} = await xhr.get(conf.API.EVENT.URL_EVENT.EVNET_TARGET);
    return data
 }

 export const fetchEventRelease = async(params: EventInfo) => {
    const {data} = await xhr.post(conf.API.EVENT.URL_EVENT.EVENT_RELEASE, params)
     return data
 }

 export const fetchHistoryTransfer = async(params : TransferBody) => {
    const {data} = await xhr.post(conf.API.HISTORY.URL_HISTORY.HISTORY_TRANSFER, params);
    return data
 }

 export const fetchHistoryById = async(params : string) => {
    const {data} = await xhr.get(conf.API.HISTORY.URL_HISTORY.HISTORY_HISTORY.replace("{id}",params));
    return data
 }

export const fetchCctvList = async() => {
    const {data} = await xhr.get(conf.API.CCTV.URL_CCTV.CCTV_LIST);
    return data;
}