import {call, put, takeLatest} from "redux-saga/effects";
import {types} from "../actions/stat/statAction";
import {
    IotDvcStreamId,
    IotDvcStreamIdDataType,
    IotResponseMeasureData,
    SearchStat
} from "../../../config/interface/stat/statInterface";
import {fetchDeviceByClientId, fetchGetIotExcelDownload, fetchGetIotStatData} from "../apis/stat/statApis";
import {updateDvcStreamId, updateGetIotStatData} from "../../store/server/stat/statServerStore";
import {PayloadAction} from "@reduxjs/toolkit";


const requestIotDevice = function* () {
    try {
        let response: IotDvcStreamId = yield call(fetchDeviceByClientId);
        yield put(updateDvcStreamId(response));


    } catch (e) {
        console.log("e:", e);
    }
}

const requestIotStatData = function* (action: PayloadAction<SearchStat>) {
    try {

        const payload = action.payload
        let response: Array<IotResponseMeasureData> = yield call(fetchGetIotStatData, payload);

        if(response) {
            yield put(updateGetIotStatData(response));
        }

    } catch (e) {
        yield put(updateGetIotStatData([]))
        console.log("e:", e);
    }
}

const requestIotStatExcelDownload = function* (action: PayloadAction<Array<IotDvcStreamIdDataType | null>>) {
    try {
        const payload: Array<IotDvcStreamIdDataType | null> = action.payload;

        //@ts-ignore
         let response = yield call(fetchGetIotExcelDownload, payload);

        const blob = new Blob([response], { type: 'application/octet-stream' });



    } catch (e) {

        console.log("e:", e);
    }
}

export default function* statSaga() {
    yield takeLatest(types.REQUEST_GET_DEVICE_STREAM, requestIotDevice)
    yield takeLatest(types.REQUEST_GET_IOT_STAT_DATA, requestIotStatData)
    yield takeLatest(types.REQUEST_GET_IOT_EXCEL_DOWNLOAD, requestIotStatExcelDownload)
}