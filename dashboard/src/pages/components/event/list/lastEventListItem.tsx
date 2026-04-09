import {useDispatch, useSelector} from "react-redux";
import {updateActiveEvent, updateReleaseModal} from "../../../store/view/event/list/eventListStore";
import {EventInfo} from "../../../../config/interface/event/eventInterface";
import {RootState} from "../../../store/rootStore";
import {updateEventMapCenter} from "../../../store/view/event/gis/eventGisStore";
import {LatLngTuple} from "leaflet";
import * as EventActions from "../../../saga/actions/event/eventActions";
import * as MainActions from "../../../saga/actions/main/mainActions";
import {EVENT_GRADE} from "../../../../config/const/event/eventConst";
import {IotParam} from "../../../../config/interface/main/mainInterface";
import moment from "moment";


const LastEventListItem = (props: { event: EventInfo, index: number }) => {

    const dispatch = useDispatch();
    const activeEvent = useSelector((state: RootState) => state.view.event.list.activeEvent);

    const onClickReleaseBtn = () => {
        dispatch(updateReleaseModal(true));

        const payload: EventInfo = props.event
        // dispatch(EventActions.actions.requestGetEventRelease(payload))
        dispatch(updateActiveEvent(payload))
    }


    const setDtm = (dtm: string) => {

        let month = dtm.substring(4, 6);
        let date = dtm.substring(6, 8);
        let hour = dtm.substring(8, 10);
        let min = dtm.substring(10, 12);

        return `${month}-${date} ${hour}:${min}`

    }

    const onClickEventItem = () => {

        dispatch(updateActiveEvent(props.event));
        let position: LatLngTuple = [Number(props.event.lng), Number(props.event.lat)];
        dispatch(updateEventMapCenter(position));

        dispatch(EventActions.actions.requestGetHistory(props.event.eventSeq));
        dispatch(MainActions.actions.requestGetSensorStandard(props.event.sensorId));

        let iotParam : IotParam = {
            streamPkId : props.event.streamPkId,
            dvcPkId : props.event.dvcPkId,
            startDtm : moment().format("YYYYMMDD"),
            endDtm : moment().format("YYYYMMDD")
        }
        dispatch(MainActions.actions.requestGetSensorRawData(iotParam));

    }

    const setGradeForm = (code:string) => {

        let grade = "";

        if (code.length>9){
            grade = code.substring(9,12);
        }else{
           grade = code.substring(6,9);
        }
        let result = "";
        if(grade === EVENT_GRADE.caution){
            result = "주의"
        }else if (grade === EVENT_GRADE.alert) {
            result = "경계"
        }else{
            result = "위험"
        }

        return result;
    }


    return (
        <li>
            <ul className={`event_list_item ${activeEvent && activeEvent.eventSeq === props.event.eventSeq ? 'active' : ''}`}
                onClick={onClickEventItem}>
                <li>
                </li>
                <li>{props.index + 1}</li>
                <li>수위 계측</li>
                <li>{setGradeForm(props.event.eventCd)}</li>
                <li>{setDtm(props.event.outbDtm)}</li>
                <li>{props.event.clrDtm ? setDtm(props.event.clrDtm) : '-'}</li>
                <li>
                    <button type="button" className={`btn_release ${props.event.procSt === '5' ? 'active' : ''}`}
                            onClick={(e) => {
                                props.event.procSt !== '5' && onClickReleaseBtn()
                            }}>해제
                    </button>
                </li>
            </ul>
        </li>
    )

}

export default LastEventListItem;