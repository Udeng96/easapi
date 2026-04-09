import {useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {useEffect, useState} from "react";

const OptionArea = () => {

    const paramOption = useSelector((state:RootState) => state.view.event.list.modalOption);
    const eventModal = useSelector((state: RootState) => state.server.event.modalEventList);

    const [eventGrade, setEventGrade] = useState<string>('#전체');

    useEffect(()=>{

        if(paramOption?.eventGrade){
            if(paramOption.eventGrade.length === 0){
                setEventGrade('-');
            }else if(paramOption.eventGrade.length === 3){
                setEventGrade('#전체');
            }else{
                let result = '';
                paramOption.eventGrade.map((item) => {
                    result += `#${setGrade(item)} `;
                })

                setEventGrade(result);
            }
        }
    },[paramOption])

    const setGrade = (id : string) => {
        let result = '';
        id === '01' ? result = "주의" :
            id === '02' ? result = "경계" :
                result = "위험"

        return result;

    }


    return(
        <div className="evt_search_result_area">
            <p className="evt_search_result_text">
                <span>{`${paramOption?.startDtm ? paramOption.startDtm : '-'} ~ 
                ${paramOption?.endDtm ? paramOption.endDtm : '-'} 까지 / 
                  ${eventGrade}`}</span>{`검색결과 [${eventModal && eventModal.total}]`}
            </p>
        </div>
    )

}

export default OptionArea