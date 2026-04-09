import LastEventList from "./lastEventList";
import LastEventLegend from "./legend/lastEventLegend";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateEventModal} from "../../../store/view/event/list/eventListStore";

const LastEventListArea = () => {

    const dispatch = useDispatch();

    const onClickModalBtn = () => {

        dispatch(updateEventModal(true));

    }


    return(
        <section className="event_list_container">
            <p className="event_main_title type_event_list">이벤트 목록</p>
            <button type="button" className="btn_history" onClick={onClickModalBtn}>지난 이벤트 내역 보기</button>

            {/*eventListFrame*/}
            <LastEventList/>

            {/*sensorStandardFrame*/}
            <LastEventLegend/>
        </section>
    )

}

export default LastEventListArea