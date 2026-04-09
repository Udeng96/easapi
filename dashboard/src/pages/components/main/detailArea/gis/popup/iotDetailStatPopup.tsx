import {Popup} from "react-leaflet";
import {SensorInfo} from "../../../../../../config/interface/main/mainInterface";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {
    updateActiveDetailMarker,
    updateActiveMainMarker,
    updateActiveSensor,
    updateActiveSensorIconList
} from "../../../../../store/view/main/mainStore";
import IotDetailChart from "./iotDetailChart";

const IotDetailStatPopup = (props: { sensor: SensorInfo }) => {

    const dispatch = useDispatch();

    const onClickCloseBtn = () =>{

        dispatch(updateActiveDetailMarker(null));

    }

    const setDtmForm = (dtm:string) => {
        if(dtm!=="-"){
            let calen = dtm.split(' ')[0];
            let time = dtm.split(' ')[1];
            let month = calen.split('-')[1];
            let date = calen.split('-')[2];
            let timeResult = time.substring(0,5);

            return `${month}/${date} ${timeResult}`

        }else{
            return dtm;
        }
    }

    return (



        <Popup
            position = {[Number(props.sensor.coordy), Number(props.sensor.coordx)]}
            interactive = {false}
        >

            <div className={`gis_sensor_popup detail`}>
                <button type="button" className="btn_popup_close" onClick={onClickCloseBtn}></button>
                <div className="gis_popup_title"><span className={`state_type_${props.sensor.state}`}>{`[${props.sensor.stateNm}]`}</span> {props.sensor.dvcNm}
                </div>
                <div className="popup_row">
                    <div className="info_name loc_icon">위치</div>
                    <div className="info_txt loc_txt">{props.sensor.locate}</div>
                </div>
                <div className="popup_row latitude_row">
                    <div className="info_txt">{`위도: ${props.sensor.coordy}`}</div>
                    <div className="info_txt">{`경도: ${props.sensor.coordx}`}</div>
                </div>
                {/*<div className="popup_row">*/}
                {/*    <div className="info_name state_icon">상태</div>*/}
                {/*    <div className={`info_txt state_${props.sensor.dvcSt==='N'? 'error':'normal'}`}>{props.sensor.dvcSt==='N'?'비정상':'정상'}</div>*/}
                {/*    /!* <div className="info_txt state_error">비정상</div> *!/*/}
                {/*</div>*/}
                <div className="popup_row">
                    <div className="info_name measure_icon">최근 측정 수치</div>
                    <div className="info_txt">{props.sensor.latest}<span>m</span><span
                        className="standard_value">{"( "+setDtmForm(props.sensor.latestDtm)+" 측정기준 )"}</span>
                    </div>
                </div>
            </div>


        </Popup>
    )
}

export default IotDetailStatPopup