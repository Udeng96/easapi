import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {updateActiveGradeOption} from "../../../../../store/view/event/list/eventListStore";

const GradeOption = (props:{setGrade:Function}) => {

    const dispatch = useDispatch();

    const activeGradeList = useSelector((state:RootState) => state.view.event.list.activeGradeOption);


    const onClickBtn = (id : string) => {

        let newList = [...activeGradeList];

        if(newList.includes(id)){
            let index = newList.indexOf(id);
            newList.splice(index, 1);

        }else{
            newList.push(id);
        }

        props.setGrade(newList);

        dispatch(updateActiveGradeOption(newList));
    }


    return(
            <div className="evt_search_row">
                <div className="evt_search_name"><span>&middot;</span>이벤트 등급 설정</div>
                <div className="btn_grade_group">
                    <button type="button"
                            className={`btn_grade ${activeGradeList.includes('01') && 'active'}`}
                            id={"caution"}
                            onClick={(e) => onClickBtn('01')}>주의</button>
                    <button type="button"
                            className={`btn_grade ${activeGradeList.includes('02') && 'active'}`}
                            id={"alert"}
                            onClick={(e) => onClickBtn('02')}>경계</button>
                    <button type="button"
                            className={`btn_grade ${activeGradeList.includes('03') && 'active'}`}
                            id={"serious"}
                            onClick={(e) => onClickBtn('03')}>위험</button>
                </div>
            </div>
    )

}

export default GradeOption