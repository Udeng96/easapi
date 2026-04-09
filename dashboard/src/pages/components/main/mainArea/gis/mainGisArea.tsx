import {MapContainer, Pane, TileLayer} from "react-leaflet";
import L from "leaflet";
import {TileMapData} from "../../../../../config/const/event/eventMapConst";
import {useState} from "react";
import {domain, HS_POS} from "../../../../../config/config";
import MainBaseLayer from "./mainBaseLayer";
import MainMarker from "./mainMarker";
import IotStatPopup from "./popup/iotStatPopup";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/rootStore";
import MainMapControl from "./mainMapControl";


const MainGisArea = () => {

    const detailCenter = useSelector((state:RootState) => state.view.main.detailMapCenter);
    const detailZoomLevel = useSelector((state:RootState) => state.view.main.detailMapZoomLevel);

    return (

        <MapContainer
            renderer={L.canvas()}
            zoomControl={false}
            zoom={detailZoomLevel}
            center={detailCenter}
            minZoom={TileMapData['vworld'].options.minZoom}
            maxZoom={TileMapData['vworld'].options.maxZoom}
            crs={TileMapData['vworld'].crs}
            scrollWheelZoom={true}
            attributionControl={false}
            preferCanvas={true}
            style={{width: '100%', height: '100%', zIndex: '1', opacity: '1', borderRadius: '10px'}}
        >

            <MainMapControl/>

            <Pane name={"baseMap"} style={{zIndex: '1'}}>
                <MainBaseLayer/>
            </Pane>
            <Pane name={"hybrid"} style={{zIndex: '3'}}>
                <TileLayer key={`add_hybrid_event`} {...TileMapData.options}
                           // url={`http://${domain}/proxy?https://xdworld.vworld.kr/2d/Hybrid/service/{z}/{x}/{y}.png`}/>
                           url={"https://xdworld.vworld.kr/2d/Hybrid/service/{z}/{x}/{y}.png"}/> //개발
            </Pane>
            <Pane name={"mainMarker"} style={{zIndex: '5', opacity: '1'}}>
                <MainMarker/>
            </Pane>
            <Pane name={"mainMarkerPopup"}>
                <IotStatPopup/>
            </Pane>

        </MapContainer>
    )


}

export default MainGisArea;