import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IotDvcStreamId, IotResponseMeasureData} from "../../../../config/interface/stat/statInterface";

interface StatServerType {
    dvcStreamId : IotDvcStreamId | null
    iotStatData: Array<IotResponseMeasureData | null> | null;
}

const initialState:StatServerType = {
    dvcStreamId : null,
    iotStatData : null
}

const statServerStore = createSlice({
    name: 'statServerStore',
    initialState : initialState,
    reducers : {
        updateDvcStreamId : (state:StatServerType = initialState, action:PayloadAction<IotDvcStreamId |null>) => {
            return {
                ...state,
                dvcStreamId: action.payload
            }
        },
        updateGetIotStatData : (state:StatServerType = initialState, action:PayloadAction<Array<IotResponseMeasureData | null>>) => {
            return {
                ...state,
                iotStatData: action.payload
            }
        }
    }
})

export const {
    updateDvcStreamId,
    updateGetIotStatData
} = statServerStore.actions

export default statServerStore