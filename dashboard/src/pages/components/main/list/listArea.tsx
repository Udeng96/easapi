import SensorItem from "./sensorItem";
import SensorList from "./sensorList";
import Legend from "./legend";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/rootStore";
import {useEffect} from "react";
import * as EventActions from "../../../saga/actions/event/eventActions";

const ListArea = () => {


    return(
        <div className={"dash_frame list_frame"}>
            {/*dashTitleArea*/}
            <div className="dash_title_area">
                <h1 className="dash_title">수위감시 대시보드</h1>
                <h2 className="dash_sub_title">Early Warning System</h2>
            </div>
            <SensorList/>
            <Legend/>
        </div>
    )


}

export default ListArea