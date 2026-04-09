import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {DTM_OPTION} from "../../../../../../config/const/event/eventConst";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {useEffect, useState} from "react";
import moment from "moment";
import {updateActiveDtmOption} from "../../../../../store/view/event/list/eventListStore";

const DateOption = (props:{setStartDate : Function, setEndDate : Function}) =>{

    const dispatch = useDispatch();

    const activeDtmOption = useSelector((state:RootState)=> state.view.event.list.activeDtmOption);
    const eventModalState = useSelector((state:RootState)=> state.view.event.list.isEventModalOpen);

    const [today, setToday] = useState(moment());
    const [startDtm,setStartDtm] = useState(moment().subtract(1, 'weeks'));
    const [endDtm,setEndDtm] = useState(moment());

    useEffect(()=>{

        if(eventModalState){
            setEndDtm(moment());
            setStartDtm(moment().subtract(1, 'weeks'));
        }

    },[eventModalState])

    useEffect(()=>{


        if(endDtm.toDate().toDateString() === moment().toDate().toDateString()){
            if(startDtm.toDate().toDateString() === moment().subtract(1,'years').toDate().toDateString()){
                dispatch(updateActiveDtmOption(DTM_OPTION.year))
            }else if(startDtm.toDate().toDateString() === moment().subtract(6,'months').toDate().toDateString()){
                dispatch(updateActiveDtmOption(DTM_OPTION.six))
            }else if(startDtm.toDate().toDateString() === moment().subtract(3,'months').toDate().toDateString()){
                dispatch(updateActiveDtmOption(DTM_OPTION.three))
            }else if(startDtm.toDate().toDateString() === moment().subtract(1,'months').toDate().toDateString()){
                dispatch(updateActiveDtmOption(DTM_OPTION.month))
            }else if(startDtm.toDate().toDateString() === moment().subtract(1, 'weeks').toDate().toDateString()){
                dispatch(updateActiveDtmOption(DTM_OPTION.week))
            }else{
                dispatch(updateActiveDtmOption("none"));
            }
        }else{
            dispatch(updateActiveDtmOption("none"));
        }


    },[endDtm, startDtm])

    const setDtmForm = (e:Date | null) => {

        if(e) {
            let year = e.getFullYear();
            let month = e.getMonth();
            let date = e.getDate();

            let newYear = `${year}`
            let newMonth = month + 1 < 10 ? `0${month + 1}` : `${month + 1}`;
            let newDate = date < 10 ? `0${date}` : `${date}`;


            let newSelect = `${newYear}-${newMonth}-${newDate}`

            return newSelect
        }

    }

    const onChangeStartDtm = (e:Date | null) => {


            props.setStartDate(setDtmForm(e));
            setStartDtm(moment(setDtmForm(e)));


    }

    const onChangeEndDtm = (e:Date | null) => {


            props.setEndDate(setDtmForm(e));

            setEndDtm(moment(setDtmForm(e)));

    }

    const onClickDtmBtn = (dtm:string) => {


        dispatch(updateActiveDtmOption(dtm));
        props.setEndDate(setDtmForm(moment().toDate()));
        setEndDtm(moment());

        // let endDate = endDtm;
        if(dtm === DTM_OPTION.year){
            let start = moment().subtract(1,'years');
            setStartDtm(start);

            props.setStartDate(setDtmForm(start.toDate()));

        }else if(dtm === DTM_OPTION.six){
            setStartDtm(moment().subtract(6,'months'));
            props.setStartDate(setDtmForm((moment().subtract(6,'months').toDate())));

        }else if(dtm === DTM_OPTION.three){
            setStartDtm(moment().subtract(3, 'months'));
            props.setStartDate(setDtmForm((moment().subtract(3,'months').toDate())));

        }else if(dtm=== DTM_OPTION.month){
            setStartDtm(moment().subtract(1,'months'));
            props.setStartDate(setDtmForm((moment().subtract(1,'months').toDate())));

        }else{
            setStartDtm(moment().subtract(1,'weeks'));

            props.setStartDate(setDtmForm((moment().subtract(1,'weeks').toDate())));

        }
    }




    return(
        <div className="evt_search_row">
            <div className="evt_search_name"><span>&middot;</span>검색 기간 설정</div>
            <div className="btn_period_group">
                <button type="button" className={`btn_period ${activeDtmOption === DTM_OPTION.year && 'active'}`} onClick={(e) => onClickDtmBtn(DTM_OPTION.year)}>1년</button>
                <button type="button" className={`btn_period ${activeDtmOption === DTM_OPTION.six && 'active'}`} onClick={(e) => onClickDtmBtn(DTM_OPTION.six)}>6개월</button>
                <button type="button" className={`btn_period ${activeDtmOption === DTM_OPTION.three && 'active'}`} onClick={(e) => onClickDtmBtn(DTM_OPTION.three)}>3개월</button>
                <button type="button" className={`btn_period ${activeDtmOption === DTM_OPTION.month && 'active'}`} onClick={(e) => onClickDtmBtn(DTM_OPTION.month)}>1개월</button>
                <button type="button" className={`btn_period ${activeDtmOption === DTM_OPTION.week && 'active'}`} onClick={(e) => onClickDtmBtn(DTM_OPTION.week)}>1주일</button>
            </div>
            <div className="datepicker_area">
                <div className="calendar_input_box">
                    <DatePicker onChange={(e) => onChangeStartDtm(e)}
                                className={"calendar_input"} id={"fromCalendar"}
                                selected={startDtm.toDate()}
                                value={startDtm.format('YYYY-MM-DD')}
                                maxDate={endDtm.toDate()}
                    />
                 </div>
                <p className="term_text">~</p>
                <div className="calendar_input_box">
                    <DatePicker onChange={(e) => onChangeEndDtm(e)}
                                className={"calendar_input"}
                                id={"toCalendar"}
                                selected={endDtm.toDate()}
                                value={endDtm.format('YYYY-MM-DD')}
                                maxDate={today.toDate()}
                                minDate={startDtm.toDate()}
                    />
                </div>
            </div>
        </div>
    )

}

export default DateOption