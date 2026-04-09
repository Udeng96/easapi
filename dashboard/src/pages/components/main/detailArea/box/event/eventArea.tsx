import EventList from "./eventList";
import {useState} from "react";
import moment from "moment";


const EventArea = () => {

    const [updDate, setUpdDate] = useState<string>(moment().format("YYYY.MM.DD HH:mm:ss"));

    return(

        <div className="dash_frame event_frame">
            <header className="dash_header">
                <div className="dash_title_box">
                    <p className="dash_title">일별 이벤트 발생 내역</p>
                    <p className="time_text">{`${updDate} 기준`}</p>
                </div>
            </header>
            <EventList/>
        </div>

    )

}

export default EventArea