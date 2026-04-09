import {
    CctvResponse,
    EventInfo,
    EventResponse, EventStateStat, EventTarget,
    EventTargetResponse, HistoryResponse,
    Leaf, ModalParam, ResponseData, Subgroup,
    TargetMember, TargetOrgan,
    TransferBody, UpdateResponse
} from "../../../config/interface/event/eventInterface";
import {call, delay, put, takeEvery, takeLatest} from "redux-saga/effects";
import {
    fetchCctvList,
    fetchEventList, fetchEventRelease, fetchHistoryById,
    fetchHistoryTransfer, fetchLastEventList, fetchTargetList
} from "../apis/event/eventApis";
import {
    updateCctvList,
    updateEventList,
    updateEventStateStat,
    updateMemberList,
    updateModalEventList,
    updateTargetList,
    updateTransferContent
} from "../../store/server/event/eventServerStore";
import {types} from "../actions/event/eventActions";
import {PayloadAction} from "@reduxjs/toolkit";
import {RESPONSE_CODE} from "../../../config/const/commonConst";
import {updateAlertModal} from "../../store/view/event/box/eventBoxStore";
import moment from "moment";

const requestEventList = function* () {
    try {

        const response: EventResponse = yield call(fetchEventList);
        yield put(updateEventList(response.eventList));

    } catch (e) {

        console.log("e:", e);

    }
}

const requestEventModalList = function* (action: PayloadAction<ModalParam>) {
    try {

        const response: EventResponse = yield call(fetchLastEventList, action.payload);
        yield put(updateModalEventList(response));

    } catch (e) {
        console.log("e:", e);
    }
}

const requestEventStateStat = function*(){
    try{
        let cautionParam : ModalParam = {
            startDtm : moment().subtract(30, "months").format("YYYYMMDD"),
            endDtm : moment().format("YYYYMMDD"),
            eventGrade : "01",
            rows : 10000,
            pageNumber : 1
        }

        let alertParam : ModalParam = {
            startDtm : moment().subtract(30, "months").format("YYYYMMDD"),
            endDtm : moment().format("YYYYMMDD"),
            eventGrade : "02",
            rows : 10000,
            pageNumber : 1
        }

        let seriousParam : ModalParam = {
            startDtm : moment().subtract(30, "months").format("YYYYMMDD"),
            endDtm : moment().format("YYYYMMDD"),
            eventGrade : "03",
            rows : 10000,
            pageNumber : 1
        }
        const cautionResponse : EventResponse  = yield call(fetchLastEventList,cautionParam);
        const alertResponse : EventResponse = yield call(fetchLastEventList, alertParam);
        const seriousResponse : EventResponse = yield call(fetchLastEventList, seriousParam);

        let result : EventStateStat = {
            caution : cautionResponse.total,
            alert : alertResponse.total,
            serious : seriousResponse.total
        }

        yield put(updateEventStateStat(result));

    }catch (e) {
        console.log("e",e);
    }
}

const requestEventTargetList = function* () {
    try {
        const response: EventTargetResponse = yield call(fetchTargetList);

        const targetList: EventTarget[] = response.data;

        let result: Subgroup[] = [];
        let memberList: TargetMember[] = [];


        targetList.map((target: EventTarget, target_index: number) => {

            let subGroups: Subgroup[] = [];

            let organList: TargetOrgan[] = target.organList;

            organList.map((organ: TargetOrgan, organ_index: number) => {

                let leaves: Leaf[] = [];


                organ.memberList.map((mem: TargetMember, index) => {

                    let leaf: Leaf = {
                        value: `${organ.organId} ${mem.userId} ${mem.userName}(${mem.cpNo})`,
                        label: mem.userName + `(${mem.cpNo})`,
                        className: 'leaf',
                    }

                    leaves.push(leaf);

                    if (target_index === 0) {

                        memberList.push(mem)
                    }

                })


                if (leaves.length !== 0) {

                    let subGroup: Subgroup = {
                        value: 'target' + target_index + organ.organId,
                        label: organ.organNm,
                        className: 'organ_sub',
                        showCheckbox: true,
                        icon: null,
                        children: leaves
                    }

                    subGroups.push(subGroup);

                }

                result = subGroups

            })
        })

        yield put(updateMemberList(memberList));
        yield put(updateTargetList(result));


    } catch (e) {
        console.log("e:", e);
    }
}

const requestEventRelease = function* (action: PayloadAction<EventInfo>) {
    try {
        const payload = action.payload
        const response: ResponseData = yield call(fetchEventRelease, payload);

        if (response.code === RESPONSE_CODE.success) {
            const responseList: EventResponse = yield call(fetchEventList);
            yield put(updateEventList(responseList.eventList));
        }

    } catch (e) {

        console.log("e:", e);

    }
}

const requestTransferHistory = function* (action: PayloadAction<TransferBody>) {
    try {

        let response: UpdateResponse = yield call(fetchHistoryTransfer, action.payload);
        // 성공하면
        if (response.code === RESPONSE_CODE.success) {
            yield put(updateAlertModal(true)); // alert 창을 띄운다.
        }

    } catch (e) {
        console.log("e:", e);
    }
}

const requestHistory = function* (action: PayloadAction<string>) {
    try {
        let response: HistoryResponse = yield call(fetchHistoryById, action.payload);

        if (response.count === 0) {
            yield put(updateTransferContent(null));
        } else {
            yield put(updateTransferContent(response.data[0]));
            yield delay(3000);
        }
    } catch (e) {
        console.log("e:", e);
    }
}

const requestCctvList = function* () {
    try{
        let response : CctvResponse = yield call(fetchCctvList);
        yield put(updateCctvList(response.data));
    }catch(e){
        console.log("e:",e);
    }
}

export default function* EventSaga() {
    yield takeLatest(types.REQUEST_GET_EVENT_LIST, requestEventList);
    yield takeLatest(types.REQUEST_GET_MODAL_EVENT_LIST, requestEventModalList);
    yield takeLatest(types.REQUEST_GET_TARGET_LIST, requestEventTargetList);
    yield takeLatest(types.REQUEST_GET_EVENT_RELEASE, requestEventRelease)
    yield takeLatest(types.REQUEST_POST_HISTORY_TRANSFER, requestTransferHistory);
    yield takeLatest(types.REQUEST_GET_HISTORY, requestHistory);
    yield takeLatest(types.REQUEST_GET_CCTV_LIST, requestCctvList);
    yield takeEvery(types.REQUEST_GET_EVENT_STATE_STAT,requestEventStateStat);

}