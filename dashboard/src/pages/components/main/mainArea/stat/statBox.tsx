import StepBox from "./stepBox";
import StatDonut from "./statDonut";
import {useState} from "react";
import moment from "moment";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/rootStore";

const StatBox = () => {


    const stateStat  = useSelector((state:RootState)=>state.server.event.stateStat);
    const [today, setToday] = useState<string>(moment().format("YYYY.MM.DD HH:mm:ss"))

    return(
        <div className="dash_frame event_step_frame">
            <header className="dash_header">
                <p className="dash_title event_step_title">이벤트 단계별 발생 통계</p>
                <p className="time_text">{`${today} 기준`}</p>
            </header>
            <div className="dash_body">
                <div className="chart_in" id="eventStepDonut">
                    <StatDonut statData={stateStat}/>
                </div>
                <div className="event_step_info_area">
                    <StepBox id={"caution"} title={"주의"} cnt={stateStat.caution}/>
                    <StepBox id={"alert"} title={"경계"} cnt={stateStat.alert}/>
                    <StepBox id={"serious"} title={"위험"} cnt={stateStat.serious}/>
                </div>
            </div>
        </div>
    )


}

export default StatBox