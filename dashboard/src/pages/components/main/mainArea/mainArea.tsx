import WeatherBox from "./weather/weatherBox";
import StatBox from "./stat/statBox";
import MainGisArea from "./gis/mainGisArea";

const MainArea = () => {

    return(

        <>
            <MainGisArea/>
            <section className="dash_container main">
                <WeatherBox/>
                <StatBox/>
            </section>
            <section className="gis_loc_area"></section>
        </>

    )

}

export default MainArea;