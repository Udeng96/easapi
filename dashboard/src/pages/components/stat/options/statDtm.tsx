import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/rootStore";
import {DATE_PERIOD_OPTION} from "../../../../config/const/commonConst";
import moment from "moment/moment";
import {updateActiveOption} from "../../../store/view/stat/statStore";
import DatePicker from "react-datepicker";
import StatSearchBtn from "./statSearchBtn";

const StatDtm = () => {

    const dispatch = useDispatch()
    const activeOption = useSelector((state:RootState)=> state.view.stat.activeOption)
    const [startDtm,setStartDtm] = useState(moment().subtract(1, 'weeks'));
    const [endDtm,setEndDtm] = useState(moment());
    const searchStatId  = useSelector((state : RootState) => state.view.stat.searchStatId)

    const onChangeDate = (e:Date | null, isStart: boolean) => {

        if(e){
            let year = e.getFullYear();
            let month = e.getMonth();
            let date = e.getDate();

            let newYear = `${year}`
            let newMonth = month < 9 ? `0${month + 1}` : `${month + 1}`;
            let newDate = date < 10 ?`0${date}` : `${date}`;


            let newSelect = `${newYear}-${newMonth}-${newDate}`

            // moment(newSelect).toDate();
            isStart ? setStartDtm(moment(newSelect)) : setEndDtm(moment(newSelect))
            dispatch(updateActiveOption(DATE_PERIOD_OPTION.none))
        }
    }

    const handleClick = (date: string) => {
        dispatch(updateActiveOption(date));
        if(date === DATE_PERIOD_OPTION.year){
            setStartDtm(moment().subtract(1,'years'));
            setEndDtm(moment())
        }else if(date === DATE_PERIOD_OPTION.half){
            setStartDtm(moment().subtract(6,'months'));
            setEndDtm(moment())
        }else if(date === DATE_PERIOD_OPTION.quarter){
            setStartDtm(moment().subtract(3, 'months'));
            setEndDtm(moment())
        }else if(date=== DATE_PERIOD_OPTION.month){
            setStartDtm(moment().subtract(1,'months'));
            setEndDtm(moment())
        }else{
            setStartDtm(moment().subtract(1,'weeks'));
            setEndDtm(moment())
        }
    }

    const formattedStartDate = moment(startDtm).format('yyyyMMDD');
    const formattedEndDate = moment(endDtm).format('yyyyMMDD');
    // console.log("formattedStartDate", formattedStartDate)
    // console.log("formattedEndDate", formattedEndDate)

    return(
        <div className="statis_row">
            <h2 className="statis_sub_title type_period"><i></i>기간 검색</h2>
            <div className="btn_period_group">
                {/*<DtmBtn id={"year"} nm={"1년"}/>*/}
                {/*<DtmBtn id={"sixMonth"} nm={"6개월"}/>*/}
                {/*<DtmBtn id={"threeMonth"} nm={"3개월"}/>*/}
                {/*<DtmBtn id={"oneMonth"} nm={"1개월"}/>*/}
                {/*<DtmBtn id={"week"} nm={"1주일"}/>*/}
                <button type="button" className={`btn_period ${activeOption === DATE_PERIOD_OPTION.year && 'active'}`} onClick={(e) => handleClick(DATE_PERIOD_OPTION.year)}>1년</button>
                <button type="button" className={`btn_period ${activeOption === DATE_PERIOD_OPTION.half && 'active'}`} onClick={(e) => handleClick(DATE_PERIOD_OPTION.half)}>6개월</button>
                <button type="button" className={`btn_period ${activeOption === DATE_PERIOD_OPTION.quarter && 'active'}`} onClick={(e) => handleClick(DATE_PERIOD_OPTION.quarter)}>3개월</button>
                <button type="button" className={`btn_period ${activeOption === DATE_PERIOD_OPTION.month && 'active'}`} onClick={(e) => handleClick(DATE_PERIOD_OPTION.month)}>1개월</button>
                <button type="button" className={`btn_period ${activeOption === DATE_PERIOD_OPTION.week && 'active'}`} onClick={(e) => handleClick(DATE_PERIOD_OPTION.week)}>1주일</button>

            </div>
                <div className="calendar_area">
                <div className="calendar_input_box">
                    {/*<input type="text" className="calendar_input" id="fromCalendar"/>*/}
                    <DatePicker
                        selected={startDtm.toDate()}
                        onChange={(e) => onChangeDate(e, true)}
                        className={"calendar_input"}
                        id={"fromCalendar"}
                        value={startDtm.format('YYYY-MM-DD')}
                        maxDate={endDtm.toDate()}
                    />
                </div>
                <p className="term_text">~</p>
                <div className="calendar_input_box">
                    {/*<input type="text" className="calendar_input" id="toCalendar"/>*/}
                    <DatePicker
                        selected={endDtm.toDate()}
                        onChange={(e) => onChangeDate(e, false)}
                        className={"calendar_input"}
                        id={"toCalendar"}
                        value={endDtm.format('YYYY-MM-DD')}
                        minDate={startDtm.toDate()}
                        maxDate={moment().toDate()}
                    />
                </div>
            </div>
            {/*<button type="button" className="btn_search">검색</button>*/}
            <StatSearchBtn searchId={searchStatId} searchStartDate={formattedStartDate} searchEndDate={formattedEndDate}/>
        </div>
    )
}

export default StatDtm