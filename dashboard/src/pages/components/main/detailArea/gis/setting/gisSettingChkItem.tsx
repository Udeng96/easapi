import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {useEffect, useState} from "react";
import {updateActiveCctv, updateGisSetIconList} from "../../../../../store/view/event/gis/eventGisStore";
import {updateActiveDetailMarker, updateActiveSensor} from "../../../../../store/view/main/mainStore";

const GisSettingChkItem = (props:{id:string, nm:string}) => {


    const dispatch = useDispatch();
    const gisSetIconList = useSelector((state:RootState)=> state.view.event.gis.gisSetIconList);

    const [isChk, setIsChk] = useState<boolean>(false);
    useEffect(()=>{

        if (gisSetIconList.includes(props.id)){
            setIsChk(true);
        }else{
            setIsChk(false);
        }

    },[gisSetIconList])

    const onClickChkBox = () => {

        let newIconList = [...gisSetIconList];
        let findIndex = newIconList.indexOf(props.id);

        if (props.id === 'cctv'){
            dispatch(updateActiveCctv(null));
        }

        if (props.id === 'tidelevel'){
            dispatch(updateActiveDetailMarker(null));
        }

        if (findIndex>-1){
            newIconList.splice(findIndex, 1);
        }else{
            newIconList.push(props.id);
        }

        dispatch(updateGisSetIconList(newIconList));
    }
    return(
        <div className="check_box">
            <label className="container">
                <input type="checkbox" checked={isChk} onClick = {onClickChkBox}/>
                <span className="checkmark"></span>
                <div className={`check_name ${props.id}`}>{props.nm}</div>
            </label>
        </div>
    )

}

export default GisSettingChkItem