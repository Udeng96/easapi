import SensorErrList from "./sensorErrList";
import {useState} from "react";
import moment from "moment";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";

const SensorErrArea = () => {

    const [updDate, setUpdDate] = useState<string>(moment().format("YYYY.MM.DD HH:mm:ss"));

    const monthList = useSelector((state:RootState)=>state.server.main.sensorMonthEventList);

    return(
        <div className="dash_frame sensor_frame">
            <header className="dash_header">
                <div className="dash_title_box">
                    <p className="dash_title">센서 고장 내역</p>
                    <p className="time_text">{`${updDate} 기준`}</p>
                </div>
            </header>
            <SensorErrList/>
        </div>
    )

}
export default SensorErrArea