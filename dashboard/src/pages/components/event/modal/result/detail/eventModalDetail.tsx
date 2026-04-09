import EventModalDetailItem from "./eventModalDetailItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {EVENT_GRADE} from "../../../../../../config/const/event/eventConst";

const EventModalDetail = () => {

    const activeModalEvent = useSelector((state: RootState) => state.view.event.list.activeModalEvent);

    const setDtm = (dtm:string) => {

        let month = dtm.substring(4,6);
        let date = dtm.substring(6,8);
        let hour = dtm.substring(8,10);
        let min = dtm.substring(10,12);

        return `${month}-${date} ${hour}:${min}`

    }

    const setGradeForm = (code:string) => {

        let grade = code.substring(6,9);
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
        <div className="evt_detail_info">
            <p className="evt_detail_info_title">이벤트 상세정보</p>

            <div className="evt_detail_info_frame">
                {

                    activeModalEvent ?
                        <>
                            <EventModalDetailItem title={"지역"} value={activeModalEvent.place}/>
                            <EventModalDetailItem title={"이벤트"} value={"수위 계측"}/>
                            <EventModalDetailItem title={"등급"} value={setGradeForm(activeModalEvent.eventCd)}/>
                            <EventModalDetailItem title={"발생일시"} value={setDtm(activeModalEvent.outbDtm)}/>
                            <EventModalDetailItem title={"해제일시"} value={activeModalEvent.clrDtm ? setDtm(activeModalEvent.clrDtm) : '-'}/>
                            <EventModalDetailItem title={"상태"} value={"해제"}/>
                            <EventModalDetailItem title={"상태"} value={activeModalEvent.cntn} isWide={true}/>
                        </>

                        :
                        <div className="no_select_area">
                            <p className="no_select_message">선택된 이벤트가 없습니다.</p>
                        </div>


                }


            </div>
        </div>
    )

}
export default EventModalDetail