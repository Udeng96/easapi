import EventGisSetting from "./setting/eventGisSetting";
import "../../../../public/static/common/css/gisCctvPopup.css";
import {MapContainer, Pane, TileLayer} from "react-leaflet";
import L, {LatLng} from "leaflet";
import BaseMapLayer from "./layer/baseMapLayer";
import {useState} from "react";
import {ResizeMap} from "./layer/resizeMap";
import {TileMapData} from "../../../../config/const/event/eventMapConst";

import 'leaflet/dist/leaflet.css';
import EventMarker from "./ marker/eventMarker";
import EventMapControl from "./eventMapControl";
import {RootState} from "../../../store/rootStore";
import {useSelector} from "react-redux";
import {LAYER} from "../../../../config/const/event/eventConst";
import CctvMarker from "./ marker/cctvMarker";
import SpiderLayer from "./layer/spiderLayer";
import {domain} from "../../../../config/config";


const EventGisArea = () => {

    const activeGisType = useSelector((state:RootState)=> state.view.event.gis.layerType);

    const [center, setCenter] = useState(new LatLng(37.199782, 126.830556))


    return (
        <section className="gis_area event">

            <EventGisSetting/>
            <MapContainer
                renderer={L.canvas()}
                zoomControl={false}
                zoom={16}
                center={center}
                minZoom={TileMapData['vworld'].options.minZoom}
                maxZoom={TileMapData['vworld'].options.maxZoom}
                crs = {TileMapData['vworld'].crs}
                scrollWheelZoom={true}
                attributionControl={false}
                preferCanvas={true}
                style={{width: '100%', height: '100%', zIndex: '1', borderRadius: '10px'}}
            >
                <ResizeMap/>
                <EventMapControl/>
                <Pane name={"baseMap"} style={{zIndex : 200}}>
                    <BaseMapLayer/>
                </Pane>
                <Pane name={"hybrid"} style={{zIndex : 201}}>
                    {
                        activeGisType === LAYER.sate &&
                        <TileLayer key={`add_hybrid_event`} {...TileMapData.options}
                                   url={`http://${domain}/proxy?https://xdworld.vworld.kr/2d/Hybrid/service/{z}/{x}/{y}.png`}/> //배포
                                   // url={"https://xdworld.vworld.kr/2d/Hybrid/service/{z}/{x}/{y}.png"}/> //개발
                    }
                </Pane>
                <Pane name={"eventMarker"}>
                    <EventMarker/>
                </Pane>
                <Pane name={"cctvMarker"}>
                    <CctvMarker/>
                </Pane>

                <SpiderLayer/>

            </MapContainer>

        </section>
    )

}

export default EventGisArea