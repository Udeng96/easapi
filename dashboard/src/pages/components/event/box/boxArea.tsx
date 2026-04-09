import TimeStatBox from "./timeStat/timeStatBox";
import PlayerBox from "./player/playerBox";
import MsgBox from "./msg/msgBox";

const BoxArea = () => {

    return(
        <section className="event_sensor_container">
            {/*eventSensorFrame*/}
            <TimeStatBox/>
            {/*eventSensorFrame*/}
            <PlayerBox/>
            {/*eventSpreadFrame*/}
            <MsgBox/>
        </section>
    )

}
export default BoxArea;