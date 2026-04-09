import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/rootStore";
import {updateCheckTargetList, updateSelectTargetList} from "../../../../store/view/event/box/eventBoxStore";

const TargetItem = (props:{name:string, isModal:boolean}) => {

    const dispatch = useDispatch();
    const checkTargetList = useSelector((state:RootState) => state.view.event.box.checkTargetList);
    const selectTargetList = useSelector((state:RootState) => state.view.event.box.selectTargetList);

    const onClickDeleteBtn = () => {


        const newCheckTargetList = [...checkTargetList];
        let findIndex = newCheckTargetList.indexOf(props.name);
        newCheckTargetList.splice(findIndex,1);

        dispatch(updateCheckTargetList(newCheckTargetList));
        if(!props.isModal){
            const newSelectTargetList = [...selectTargetList];
            let findIndex = newSelectTargetList.indexOf(props.name);
            newSelectTargetList.splice(findIndex, 1);
            dispatch(updateSelectTargetList(newSelectTargetList));
        }

    }

    const setTargetForm = (target : string) => {
        let name = target.split("(")[0];
        let phone = target.split("(")[1];
        let phone_first = phone.substring(0,3);
        let phone_second = phone.substring(3,7);
        let phone_third = phone.substring(7,11);

        return `${name}(${phone_first}-${phone_second}-${phone_third})`
    }

    return(
        <div className="target_box">
            <p className="target_text">{props.name.split(' ')[1]==='newTarget' ? setTargetForm(props.name.split(' ')[2]) : props.name.split(' ')[2]}</p>
            <button type="button" className="btn_target_delete" onClick={onClickDeleteBtn}></button>
        </div>
    )

}

export default TargetItem
