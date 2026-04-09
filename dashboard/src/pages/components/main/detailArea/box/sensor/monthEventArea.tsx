import SensorErrList from "./sensorErrList";
import {useState} from "react";
import moment from "moment/moment";
import MonthEvetList from "./monthEvetList";

const MonthEventArea = () => {

    const [updDate, setUpdDate] = useState<string>(moment().format("YYYY.MM.DD HH:mm:ss"));


    return (
        <div className="dash_frame sensor_frame">
            <header className="dash_header">
                <div className="dash_title_box">
                    <p className="dash_title">월별 이벤트 발생 내역</p>
                    <p className="time_text">{`${updDate} 기준`}</p>
                </div>
            </header>
            <MonthEvetList/>
        </div>
    )

}
export default MonthEventArea