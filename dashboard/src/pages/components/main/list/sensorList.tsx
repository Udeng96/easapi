import SensorItem from "./sensorItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/rootStore";
import {useEffect} from "react";
import Scrollbar from "react-scrollbars-custom";


const SensorList = () => {

    const sensorList = useSelector((state: RootState) => state.server.main.sensorList);

    return (
        <Scrollbar className={"scroll sensor"}>

            <div className="btn_go_twin_group">
                {
                    sensorList.length > 0 &&
                    sensorList.map((sensor, index) => (
                        <SensorItem nm={sensor.dvcNm} id={sensor.dvcPkId} sensor={sensor} key={sensor.dvcPkId}/>
                    ))

                }
            </div>
        </Scrollbar>


    )


}

export default SensorList