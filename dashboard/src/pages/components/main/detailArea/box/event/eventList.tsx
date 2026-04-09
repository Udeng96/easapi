import EventListItem from "./eventListItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {EVENT_GRADE} from "../../../../../../config/const/event/eventConst";
import {useEffect} from "react";

const EventList = () => {

    let todayList = useSelector((state:RootState)=>state.server.main.sensorTodayEventList);


    const setDtm = (dtm:string) => {

        let month = dtm.substring(4,6);
        let date = dtm.substring(6,8);
        let hour = dtm.substring(8,10);
        let min = dtm.substring(10,12);

        return `${month}-${date} ${hour}:${min}`

    }
    const setGradeForm = (code:string) => {

        let grade = "";


        if (code.length>9){
            grade = code.substring(9,12);
        }else{
            grade = code.substring(6,9);
        }


        // let grade = code.substring(9,12);
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

    return(
        <>
            <div className="dash_body">
                <div className="dash_info event_list_wrap">
                    <ul className="list_head">
                        <li>No.</li>
                        <li>이벤트</li>
                        <li>등급</li>
                        <li>발생 시간</li>
                        <li>해제 시간</li>
                        <li>상태</li>
                    </ul>
                    <div className="list_area">
                        <ul className="list_body">
                            {
                                todayList.map((event,index)=>(
                                    <EventListItem idx={index+1} nm={"수위 계측"} grade={setGradeForm(event.eventCd)} dtm={setDtm(event.outbDtm)} state={Number(event.procSt)}/>

                                ))
                            }
                            {/*<EventListItem idx={1} nm={"수위 계측"} grade={"주의보"} dtm={"10-18 14:22"} state={1}/>*/}
                            {/*<EventListItem idx={2} nm={"수위 계측"} grade={"주의보"} dtm={"10-18 14:22"} clrDtm={"10-18 09:37"} state={5}/>*/}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}

export default EventList