import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Subgroup} from "../../../../../config/interface/event/eventInterface";

interface eventBoxType {
    isTargetModalOpen : boolean,
    isAlertModalOpen : boolean,
    isFullCctvOpen : boolean,
    checkTargetList : string[],
    selectTargetList : string[],
    expandTargetList : string[],
}

const initialState : eventBoxType = {
    isTargetModalOpen : false,
    isAlertModalOpen : false,
    isFullCctvOpen : false,
    checkTargetList : [],
    selectTargetList : [],
    expandTargetList : [],
}

const eventBoxStore = createSlice({
    name : 'eventBoxStore',
    initialState : initialState,
    reducers : {
        updateTargetModal : (state:eventBoxType = initialState, action:PayloadAction<boolean>)=> {
            return{
                ...state,
                isTargetModalOpen : action.payload
            }
        },
        updateAlertModal : (state:eventBoxType = initialState, action: PayloadAction<boolean>)=>{
            return{
                ...state,
                isAlertModalOpen : action.payload
            }
        },
        updateFullCctvModal : (state:eventBoxType = initialState, action:PayloadAction<boolean>) => {
            return{
                ...state,
                isFullCctvOpen : action.payload
            }
        },
        updateCheckTargetList : (state:eventBoxType = initialState, action:PayloadAction<string[]>) => {
            return{
                ...state,
                checkTargetList : action.payload
            }
        },
        updateSelectTargetList : (state:eventBoxType = initialState, action:PayloadAction<string[]>) => {
            return{
                ...state,
                selectTargetList : action.payload
            }
        },
        updateExpandTreeList : (state:eventBoxType = initialState, action:PayloadAction<string[]>) => {
            return{
                ...state,
                expandTargetList : action.payload
            }
        }
    }
})

export const {
    updateTargetModal,
    updateAlertModal,
    updateFullCctvModal,
    updateCheckTargetList,
    updateSelectTargetList,
    updateExpandTreeList,
} = eventBoxStore.actions

export default eventBoxStore