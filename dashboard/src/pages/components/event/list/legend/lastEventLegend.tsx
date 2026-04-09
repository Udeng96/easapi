import LastEventLegendItem from "./lastEventLegendItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/rootStore";
import {useEffect, useState} from "react";
import {StandardData} from "../../../../../config/interface/event/eventInterface";

const LastEventLegend = () => {

    const standard = useSelector((state:RootState)=>state.server.main.sensorStandard);
    const sensorList = useSelector((state:RootState)=>state.server.main.sensorList);
    const [nm, setNm] = useState<string>("");

    useEffect(()=>{

        if (standard){

            sensorList.map((sensor)=>{
                if (sensor.streamId === standard.streamId){
                    setNm(sensor.dvcNm);
                }
            })

        }
    },[standard])



    return(
        <div className="sensor_standard_frame">
            <p className="event_main_title type_sensor_standard">이벤트 발생 센서 발령 기준표</p>
            <div className="sensor_name_area">
                <p className="sensor_name">{nm}</p>
            </div>
            <div className="sensor_standard_area">
                {/*<LastEventLegendItem id={"attention"} nm={"관심"} startScope={0} endScope={25}/>*/}
                <LastEventLegendItem id={"caution"} nm={"주의"} startScope={standard && standard.caution} endScope={standard && standard.alert}/>
                <LastEventLegendItem id={"alert"} nm={"경계"} startScope={standard  && standard.alert} endScope={standard && standard.serious}/>
                <LastEventLegendItem id={"serious"} nm={"위험"} startScope={standard && standard.serious} endScope={100}/>
            </div>
        </div>
    )


}

export default LastEventLegend