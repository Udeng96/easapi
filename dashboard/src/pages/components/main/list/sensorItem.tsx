import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/rootStore";
import {useEffect} from "react";
import {
    updateActiveDetailCctv,
    updateActiveDetailMarker,
    updateActiveSensor,
    updateActiveSensorIconList,
    updateDetailCenter,
    updateLayer
} from "../../../store/view/main/mainStore";
import {HS_POS} from "../../../../config/config";
import {LatLngTuple} from "leaflet";
import {LAYER, SENSOR_EVENT_TYPE} from "../../../../config/const/commonConst";
import {
    IotParam,
    SensorEventParam,
    SensorEventParameter,
    SensorInfo
} from "../../../../config/interface/main/mainInterface";
import moment from "moment";
import * as MainAction from "../../../saga/actions/main/mainActions";
import {
    updateIotRawData,
    updateIotStandard,
    updateSensorMonthList,
    updateSensorTodayList
} from "../../../store/server/main/mainServerStore";

const SensorItem = (props:{nm : string, id:string, sensor : SensorInfo}) => {

    const dispatch = useDispatch();
    const activeSensor = useSelector((state:RootState)=> state.view.main.activeSensor);


    useEffect(()=>{


        if(activeSensor){
            let center : LatLngTuple = [Number(activeSensor.coordy),Number(activeSensor.coordx)]
            dispatch(updateDetailCenter(center));
            dispatch(updateActiveSensorIconList([activeSensor]));
        }else{
            dispatch(updateDetailCenter(HS_POS));
        }
    },[activeSensor])

    const onClickSensor = () => {

        dispatch(updateActiveDetailCctv(null));

        if(activeSensor){
            if(activeSensor.dvcPkId === props.id){

                dispatch(updateActiveSensor(null));// sensor 메뉴 클릭 초기화
                dispatch(updateActiveDetailMarker(null)); // detail active sensor 초기화
                dispatch(updateLayer(LAYER.sate));
                dispatch(updateSensorTodayList([]));
                dispatch(updateSensorMonthList([]));



                dispatch(updateIotRawData([]));
                dispatch(updateIotStandard(null));

            }else{

                dispatch(updateActiveSensor(props.sensor)); // 메뉴 클릭
                dispatch(updateActiveDetailMarker(props.sensor)) // detail 화면 marker active

                let today = moment().format("YYYYMMDD");

                let rawParam : IotParam = {
                    dvcPkId : props.sensor.dvcPkId,
                    streamPkId : props.sensor.streamPkId,
                    startDtm : today,
                    endDtm : today
                }

                let todayEventParam : SensorEventParameter = {
                    type : SENSOR_EVENT_TYPE.day,
                    param : {
                        sensorId : props.sensor.streamId,
                        startDtm : moment().format('YYYYMMDD'),
                        endDtm : moment().format('YYYYMMDD')
                    }
                }

                let monthEventParam : SensorEventParameter = {
                    type : SENSOR_EVENT_TYPE.month,
                    param : {
                        sensorId : props.sensor.streamId,
                        startDtm : moment().subtract(1,'months').format('YYYYMMDD'),
                        endDtm : moment().format('YYYYMMDD')
                    }
                }

                dispatch(MainAction.actions.requestGetSensorRawData(rawParam));
                dispatch(MainAction.actions.requestGetSensorStandard(props.sensor.streamId));
                dispatch(MainAction.actions.requestGetSensorEventList(todayEventParam));
                dispatch(MainAction.actions.requestGetSensorEventList(monthEventParam));

            }
        }else{

            dispatch(updateActiveSensor(props.sensor)); // 메뉴 클릭
            dispatch(updateActiveDetailMarker(props.sensor)); // detail 화면 marker active;

            let today = moment().format("YYYYMMDD");

            let rawParam : IotParam = {
                dvcPkId : props.sensor.dvcPkId,
                streamPkId : props.sensor.streamPkId,
                startDtm : today,
                endDtm : today
            }

            let todayEventParam : SensorEventParameter = {
                type : SENSOR_EVENT_TYPE.day,
                param : {
                    sensorId : props.sensor.streamId,
                    startDtm : moment().format('YYYYMMDD'),
                    endDtm : moment().format('YYYYMMDD')
                }
            }

            let monthEventParam : SensorEventParameter = {
                type : SENSOR_EVENT_TYPE.month,
                param : {
                    sensorId : props.sensor.streamId,
                    startDtm : moment().subtract(1,'months').format('YYYYMMDD'),
                    endDtm : moment().format('YYYYMMDD')
                }
            }


            dispatch(MainAction.actions.requestGetSensorRawData(rawParam));
            dispatch(MainAction.actions.requestGetSensorStandard(props.sensor.streamId));
            dispatch(MainAction.actions.requestGetSensorEventList(todayEventParam));
            dispatch(MainAction.actions.requestGetSensorEventList(monthEventParam));


        }
    }




    return(
        <div className="btn_box">
            <button type="button" id={props.id} className={`btn_go ${ activeSensor&& activeSensor.dvcPkId === props.id ? 'active' : ''}`} onClick={onClickSensor}>{props.nm}</button>
        </div>
    )
}

export default SensorItem;