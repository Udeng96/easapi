import {EventInfo} from "../../../../../../config/interface/event/eventInterface";
import {useDispatch, useSelector} from "react-redux";
import {
    updateActiveEvent,
    updateEventModal,
    updateModalActiveEvent
} from "../../../../../store/view/event/list/eventListStore";
import {RootState} from "../../../../../store/rootStore";
import {EVENT_GRADE} from "../../../../../../config/const/event/eventConst";

const EventModalItem = (props:{event : EventInfo, index : number}) => {

    const dispatch = useDispatch();
    const activeModalEvent = useSelector((state:RootState) => state.view.event.list.activeModalEvent);


    const onClickListItem = () => {

        if(activeModalEvent){
            if(activeModalEvent.eventSeq === props.event.eventSeq){
                dispatch(updateModalActiveEvent(null));
            }else{
                dispatch(updateModalActiveEvent(props.event));
            }
        }else{
            dispatch(updateModalActiveEvent(props.event));
        }
    }

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
        <li onClick={onClickListItem}>
            <ul className={`search_list_item ${activeModalEvent && activeModalEvent.eventSeq === props.event.eventSeq ? 'active' : ''}`} >
                <li>{props.index}</li>
                <li>수위 계측</li>
                <li>{setGradeForm(props.event.eventCd)}</li>
                <li>{setDtm(props.event.outbDtm)}</li>
                <li>{props.event.clrDtm?setDtm(props.event.clrDtm) : '-'}</li>
                <li>{props.event.procNm}</li>
            </ul>
        </li>

    )

}

export default EventModalItem