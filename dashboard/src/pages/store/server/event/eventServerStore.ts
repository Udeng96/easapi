import {
    CctvData,
    EventInfo,
    EventResponse, EventStateStat,
    Subgroup,
    TargetMember,
    TransferBody
} from "../../../../config/interface/event/eventInterface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IotDvcStreamId} from "../../../../config/interface/stat/statInterface";

interface EventServerType {
    eventList : EventInfo[],
    modalEventList : null|EventResponse,
    modalAllEventListSize : number,
    targetList : Subgroup[],
    memberList : TargetMember[],
    transferContent : TransferBody | null,
    dvcStreamId : IotDvcStreamId | null,
    cctvList : CctvData[],
    stateStat : EventStateStat,
}

const initialState:EventServerType = {
    eventList: [],
    modalEventList : null,
    modalAllEventListSize : 0,
    targetList : [],
    memberList : [],
    transferContent : null,
    dvcStreamId : null,
    cctvList : [],
    stateStat : {caution : 0, serious : 0, alert : 0}
}

const eventServerStore = createSlice({
    name: 'eventServerStore',
    initialState : initialState,
    reducers : {
        updateEventList : (state:EventServerType=initialState, action:PayloadAction<EventInfo[]>) => {
            return{
                ...state,
                eventList : action.payload
            }
        },
        updateModalEventList :  (state:EventServerType = initialState, action : PayloadAction<EventResponse | null>) => {
            return{
                ...state,
                modalEventList : action.payload,
            }
        },
        updateTargetList : (state:EventServerType = initialState, action: PayloadAction<Subgroup[]>) => {
            return {
                ...state,
                targetList: action.payload
            }
        },
        updateMemberList : (state:EventServerType = initialState, action:PayloadAction<TargetMember[]>) => {
            return{
                ...state,
                memberList : action.payload
            }
        },
        updateTransferContent : (state:EventServerType = initialState, action:PayloadAction<TransferBody |null>) => {
            return{
                ...state,
                transferContent : action.payload
            }
        },

        updateCctvList : (state:EventServerType = initialState, action:PayloadAction<CctvData[]>) => {
            return{
                ...state,
                cctvList : action.payload
            }
        },

        updateEventStateStat : (state:EventServerType = initialState, action:PayloadAction<EventStateStat>) => {
            return{
                ...state,
                stateStat : action.payload
            }
        },

    }
})


export const {
    updateEventList,
    updateModalEventList,
    updateTargetList,
    updateMemberList,
    updateTransferContent,
    updateCctvList,
    updateEventStateStat
} = eventServerStore.actions

export default eventServerStore;