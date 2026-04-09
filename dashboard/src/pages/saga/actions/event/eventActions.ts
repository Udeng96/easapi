import {createAction} from "@reduxjs/toolkit";
import {EventInfo, ModalParam, TransferBody} from "../../../../config/interface/event/eventInterface";

const types = {
    REQUEST_GET_EVENT_LIST : `REQUEST_GET_EVENT_LIST`,
    REQUEST_GET_BOX_EVENT_LIST : `REQUEST_GET_BOX_EVENT_LIST`,
    REQUEST_GET_MODAL_EVENT_LIST : `REQUEST_GET_MODAL_EVENT_LIST`,
    REQUEST_GET_TARGET_LIST : `REQUEST_GET_TARGET_LIST`,
    REQUEST_GET_EVENT_RELEASE : `REQUEST_GET_EVENT_RELEASE`,
    REQUEST_POST_HISTORY_TRANSFER : `REQUEST_POST_HISTORY_TRANSFER`,
    REQUEST_GET_HISTORY : `REQUEST_GET_HISTORY`,
    REQUEST_GET_CCTV_LIST : `REQUEST_GET_CCTV_LIST`,
    REQUEST_GET_EVENT_STATE_STAT : `REQUEST_GET_EVENT_STATE_STAT`,

}

const actions = {
    requestGetEventList : createAction(types.REQUEST_GET_EVENT_LIST),
    requestGetModalEventList : createAction<ModalParam>(types.REQUEST_GET_MODAL_EVENT_LIST),
    requestGetTargetList : createAction(types.REQUEST_GET_TARGET_LIST),
    requestGetEventRelease : createAction<EventInfo>(types.REQUEST_GET_EVENT_RELEASE),
    requestPostHistoryTransfer : createAction<TransferBody>(types.REQUEST_POST_HISTORY_TRANSFER),
    requestGetHistory : createAction<string>(types.REQUEST_GET_HISTORY),
    requestGetCctvList : createAction(types.REQUEST_GET_CCTV_LIST),
    requestGetEventStateStat : createAction(types.REQUEST_GET_EVENT_STATE_STAT),
}

export {types,actions}