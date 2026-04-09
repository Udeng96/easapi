import {TileLayer} from "react-leaflet";
import {TileMapData} from "../../../../../config/const/event/eventMapConst";
import {domain} from "../../../../../config/config";

const MainBaseLayer = () => {


    return(
        <>
            <TileLayer
                key={`vworld_sate_main`} {...TileMapData['vworld'].options}
                url={`http://${domain}/proxy?https://xdworld.vworld.kr/2d/Satellite/service/{z}/{x}/{y}.jpeg`}/> //배포
                {/*url={`https://xdworld.vworld.kr/2d/Satellite/service/{z}/{x}/{y}.jpeg`}/> //개발*/}

        </>
    )

}

export default MainBaseLayer