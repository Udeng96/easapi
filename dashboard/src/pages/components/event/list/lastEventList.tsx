import LastEventListItem from "./lastEventListItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/rootStore";
import {useEffect} from "react";
import {updateActiveEvent} from "../../../store/view/event/list/eventListStore";
import {updateEventMapCenter} from "../../../store/view/event/gis/eventGisStore";
import * as EventActions from "../../../saga/actions/event/eventActions";
import * as MainActions from "../../../saga/actions/main/mainActions";
import {IotParam} from "../../../../config/interface/main/mainInterface";
import moment from "moment/moment";
import {NAV} from "../../../../config/const/commonConst";

const LastEventList =() => {

    const dispatch = useDispatch();
    const eventList = useSelector((state:RootState) => state.server.event.eventList);
    const activeNav = useSelector((state:RootState)=>state.view.main.activeNav);

    useEffect(()=>{
        dispatch(updateActiveEvent(eventList[0]));
        dispatch(updateEventMapCenter([Number(eventList[0].lng),Number(eventList[0].lat)]))

        if (activeNav === NAV.event){
            let iotParam : IotParam = {
                streamPkId : eventList[0].streamPkId,
                dvcPkId : eventList[0].dvcPkId,
                startDtm : moment().format("YYYYMMDD"),
                endDtm : moment().format("YYYYMMDD")
            }
            dispatch(MainActions.actions.requestGetSensorRawData(iotParam));
            dispatch(MainActions.actions.requestGetSensorStandard(eventList[0].sensorId));

        }

    },[eventList])
    return(
        <div className="event_list_frame">
            <ul className="event_list_head">
                <li>

                </li>
                <li>No.</li>
                <li>이벤트</li>
                <li>등급</li>
                <li>발생 시간</li>
                <li>해제 시간</li>
                <li>상태</li>
            </ul>
            <div className="event_list_area">
                <ul className="event_list_body">
                    {
                        eventList.length > 0 &&
                            eventList.map((event,index)=> (
                                <LastEventListItem event={event} index={index}/>
                            ))

                    }

                </ul>
            </div>
        </div>
    )

}

export default LastEventList