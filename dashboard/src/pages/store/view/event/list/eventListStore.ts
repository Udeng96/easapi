import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DTM_OPTION} from "../../../../../config/const/event/eventConst";
import {
    EventInfo,
    ModalParam, ModalStoreParam
} from "../../../../../config/interface/event/eventInterface";
import moment from "moment";

interface eventListType{
    isEventModalOpen : boolean,
    isReleaseModalOpen : boolean,
    activePage : number
    activeEvent : EventInfo | null,
    activeModalEvent : EventInfo | null,
    activeDtmOption : string,
    activeGradeOption : string[],
    modalOption : ModalStoreParam,

}

const initialState : eventListType = {
    isEventModalOpen : false,
    isReleaseModalOpen : false,
    activePage : 1,
    activeEvent : null,
    activeModalEvent : null,
    activeDtmOption : DTM_OPTION.week,
    activeGradeOption : ['01','02','03'],
    modalOption : {
        startDtm : moment().subtract(1, 'weeks').format("YYYYMMDD").toString(),
        endDtm :moment().format("YYYYMMDD").toString(),
        eventGrade : [],
        rows : 10,
        pageNumber : 1
    },
}

const eventListStore = createSlice({
    name: 'eventListStore',
    initialState : initialState,
    reducers : {
        updateEventModal : (state:eventListType, action:PayloadAction<boolean>) => {
            return{
                ...state,
                isEventModalOpen : action.payload
            }
        },
        updateReleaseModal : (state:eventListType, action:PayloadAction<boolean>) => {
            return{
                ...state,
                isReleaseModalOpen : action.payload
            }
        },
        updateActivePage : (state:eventListType, action:PayloadAction<number>) => {
            return{
                ...state,
                 activePage : action.payload
            }
        },
        updateActiveEvent : (state:eventListType, action:PayloadAction<EventInfo|null>) => {
            return{
                ...state,
                activeEvent : action.payload
            }
        },
        updateModalActiveEvent : (state:eventListType, action:PayloadAction<EventInfo|null>) => {
            return{
                ...state,
                activeModalEvent : action.payload

            }
        },
        updateActiveDtmOption : (state:eventListType, action:PayloadAction<string>) => {
            return{
                ...state,
                activeDtmOption : action.payload
            }
        },
        updateActiveGradeOption : (state:eventListType, action:PayloadAction<string[]>) => {
            return{
                ...state,
                activeGradeOption : action.payload
            }
        },
        updateModalOption : (state:eventListType, action:PayloadAction<ModalStoreParam>) => {
            return{
                ...state,
                modalOption : action.payload
            }
        }



    }
})


export const {
    updateEventModal,
    updateReleaseModal,
    updateActivePage,
    updateActiveEvent,
    updateModalActiveEvent,
    updateActiveDtmOption,
    updateActiveGradeOption,
    updateModalOption,
} = eventListStore.actions

export default eventListStore;