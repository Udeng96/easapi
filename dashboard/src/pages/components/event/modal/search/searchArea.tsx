import DateOption from "./option/dateOption";
import GradeOption from "./option/gradeOption";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateModalOption} from "../../../../store/view/event/list/eventListStore";
import moment from "moment";
import {RootState} from "../../../../store/rootStore";
import * as EventActions from "../../../../saga/actions/event/eventActions";
import {ModalParam, ModalStoreParam} from "../../../../../config/interface/event/eventInterface";

const SearchArea = () => {

    const dispatch = useDispatch();
    const eventModalState = useSelector((state:RootState)=> state.view.event.list.isEventModalOpen);
    const activeGradeOptions = useSelector((state:RootState) => state.view.event.list.activeGradeOption);

    const [startOption, setStartOption] = useState<string>("");
    const [endOption, setEndOption] = useState<string>("");
    const [gradeOption, setGradeOption] = useState<string[]>([]);

    const [searchDtm , setSearchDtm ] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));


    useEffect(()=>{

        //@ts-ignore
         setStartOption(setDtm(moment().subtract(1, 'weeks').toDate()));
        //@ts-ignore

         setEndOption(setDtm(moment().toDate()));

        onClickSearchBtn();


    },[eventModalState])

    const setDtm = (e:Date) => {

        if(e){
            let year = e.getFullYear();
            let month = e.getMonth();
            let date = e.getDate();

            let newYear = `${year}`
            let newMonth = month+1< 10 ? `0${month+1}` : `${month+1}`;
            let newDate = date < 10 ?`0${date}` : `${date}`;


            let newSelect = `${newYear}-${newMonth}-${newDate}`

            return newSelect;

        }
    }

    const setGrade = ()=>{
        let result = "";
        activeGradeOptions.map((option,index)=>{
            if (index<activeGradeOptions.length-1){
                result += `${option},`;
            }else{
                result += option;
            }
        })

        return result;
    }


    const onClickSearchBtn = () => {

        setSearchDtm(moment().format('YYYY-MM-DD HH:mm:ss'));

        let storeParam : ModalStoreParam = {
            startDtm : startOption,
            endDtm : endOption,
            eventGrade : gradeOption,
            rows: 10,
            pageNumber : 1,
        }

        let startParam = startOption && startOption.replaceAll("-","");
        let endParam = endOption && endOption.replaceAll("-","");

        let param : ModalParam = {
            startDtm : startParam,
            endDtm : endParam,
            eventGrade : setGrade(),
            rows: 10,
            pageNumber : 1,
        }

        dispatch(updateModalOption(storeParam));
        dispatch(EventActions.actions.requestGetModalEventList(param));


        //todo : 검색하는 코드 추가해야함.
    }





    return(
        <div className="evt_search_area">
            <DateOption setStartDate={setStartOption} setEndDate={setEndOption}/>
            <GradeOption setGrade={setGradeOption}/>
            <button type="button" className="btn_evt_search" onClick={onClickSearchBtn}>검색<span>{`(업데이트 일시 : ${searchDtm})`}</span></button>
        </div>
    )

}

export default SearchArea;