import EventGisSettingChk from "./eventGisSettingChk";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/rootStore";
import {LAYER} from "../../../../../config/const/event/eventConst";
import {updateEventLayerType} from "../../../../store/view/event/gis/eventGisStore";
import {useState} from "react";

const EventGisSetting = () => {

    const dispatch = useDispatch();
    const activeLayerType = useSelector((state:RootState)=> state.view.event.gis.layerType);

    const [isIconAreaOpen, setIsIconAreaOpen] = useState<boolean>(false);

    const onClickLayerBtn = (type:string) => {
        dispatch(updateEventLayerType(type))
    }


    return(
        <div className="btn_map_setting_frame">
            <div className="btn_map_type_group">
                <button type="button" className={`btn_map_type ${activeLayerType === LAYER.normal && 'active'}`} onClick={e=>onClickLayerBtn(LAYER.normal)}>일반</button>
                <button type="button" className={`btn_map_type ${activeLayerType === LAYER.sate && 'active'}`} onClick={e=> onClickLayerBtn(LAYER.sate)}>위성</button>
            </div>
            {/*<div className="btn_map_setting_area">*/}
            {/*    <button type="button" className={`btn_map_icon_setting ${isIconAreaOpen && 'active'}`} onClick={e=>setIsIconAreaOpen(!isIconAreaOpen)}>지도 아이콘 설정</button>*/}
            {/*    <EventGisSettingChk isOpen={isIconAreaOpen}/>*/}
            {/*</div>*/}

        </div>

    )


}
export default EventGisSetting