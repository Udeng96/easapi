import GisSettingChk from "./gisSettingChk";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {LAYER} from "../../../../../../config/const/commonConst";
import {updateLayer} from "../../../../../store/view/main/mainStore";
import EventGisSettingChk from "../../../../event/gis/setting/eventGisSettingChk";
import {useState} from "react";

const GisSetting = () => {

    const dispatch = useDispatch();
    const mainBaseLayer = useSelector((state:RootState) => state.view.main.activeLayer);

    const [isIconAreaOpen, setIsIconAreaOpen] = useState<boolean>(false);

    const onClickLayerBtn = (layer:string) => {

        dispatch(updateLayer(layer));

    }

    return(
        <div className={"btn_map_setting_frame"}>
            <div className="btn_map_type_group">
                <button type="button" className={`btn_map_type ${mainBaseLayer === LAYER.normal ? 'active' : ''}`} onClick={(e) => onClickLayerBtn(LAYER.normal)}>일반</button>
                <button type="button" className={`btn_map_type ${mainBaseLayer === LAYER.sate ? 'active' : ''}`} onClick={(e) => onClickLayerBtn(LAYER.sate)}>위성</button>
            </div>
            <div className="btn_map_setting_area">
                <button type="button" className={`btn_map_icon_setting ${isIconAreaOpen && 'active'}`} onClick={e=>setIsIconAreaOpen(!isIconAreaOpen)}>지도 아이콘 설정</button>

                <GisSettingChk isOpen={isIconAreaOpen}/>
            </div>

            {/*<div className="btn_map_setting_area">*/}
            {/*    <button type="button" className={`btn_map_icon_setting ${isIconAreaOpen && 'active'}`} onClick={e=>setIsIconAreaOpen(!isIconAreaOpen)}>지도 아이콘 설정</button>*/}
            {/*    <EventGisSettingChk isOpen={isIconAreaOpen}/>*/}
            {/*</div>*/}
        </div>
    )
}

export default GisSetting