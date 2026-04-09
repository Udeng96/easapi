import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DATE_PERIOD_OPTION} from "../../../../config/const/commonConst";
import {SearchStat, SearchStatId} from "../../../../config/interface/stat/statInterface";

interface statType {
    statType : string,
    activeOption : string
    searchStatId : SearchStatId | null
    searchStatInfo : SearchStat | null
}

const initialState : statType = {
    statType : 'time',
    activeOption : DATE_PERIOD_OPTION.week,
    searchStatId : null,
    searchStatInfo : null
}

const statStore = createSlice({
    name: 'statStore',
    initialState : initialState,
    reducers : {
        updateStatType : (state:statType=initialState, action:PayloadAction<string>) => {
            return{
                ...state,
                statType: action.payload
            }
        },
        updateActiveOption : (state:statType=initialState, action:PayloadAction<string>) => {
            return{
                ...state,
                activeOption: action.payload
            }
        },
        updateSearchStatId : (state:statType=initialState, action:PayloadAction<SearchStatId>) => {
            return{
                ...state,
                searchStatId: action.payload
            }
        },
        updateSearchStatInfo : (state:statType=initialState, action:PayloadAction<SearchStat>) => {
            return{
                ...state,
                searchStatInfo: action.payload
            }
        }
    }
})


export const {
    updateStatType,
    updateActiveOption,
    updateSearchStatId,
    updateSearchStatInfo,
} = statStore.actions


export default statStore