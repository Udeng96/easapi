import {createAction} from "@reduxjs/toolkit";
import {IotDvcStreamIdDataType, SearchStat} from "../../../../config/interface/stat/statInterface";

const types = {
    REQUEST_GET_DEVICE_STREAM : `REQUEST_GET_DEVICE_STREAM`,
    REQUEST_GET_IOT_STAT_DATA : `REQUEST_GET_IOT_STAT_DATA`,
    REQUEST_GET_IOT_EXCEL_DOWNLOAD : `REQUEST_GET_IOT_EXCEL_DOWNLOAD`
}

const actions= {
    // requestGetDeviceStream : createAction(types.REQUEST_GET_DEVICE_STREAM)
    requestGetDeviceStream : createAction(types.REQUEST_GET_DEVICE_STREAM),
    requestGetIotData : createAction<SearchStat>(types.REQUEST_GET_IOT_STAT_DATA),
    requestGetIotExcelDownload : createAction<Array<IotDvcStreamIdDataType | null>>(types.REQUEST_GET_IOT_EXCEL_DOWNLOAD)
}

export {types,actions}