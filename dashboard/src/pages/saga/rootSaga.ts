import {all,fork} from "redux-saga/effects";
import MainSaga from "./main/mainSaga";
import EventSaga from "./event/eventSaga";
import WsSaga from "./ws/wsSaga";
import statSaga from "./stat/statSaga";

export default function* rootSaga(){
    yield all([
        fork(MainSaga),
        fork(EventSaga),
        fork(WsSaga),
        fork(statSaga)
    ])
}