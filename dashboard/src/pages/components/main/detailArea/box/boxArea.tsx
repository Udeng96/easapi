import SensorErrArea from "./sensor/sensorErrArea";
import EventArea from "./event/eventArea";
import StatArea from "./stat/statArea";
import MonthEventArea from "./sensor/monthEventArea";

const BoxArea = () => {

    return(
        <>
            <section className="dash_detail_container">
                {/*<SensorErrArea/>*/}
                <MonthEventArea/>

                <EventArea/>

                <StatArea/>


            </section>

        </>
    )

 }

 export default BoxArea