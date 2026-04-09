import GisSetting from "./setting/gisSetting";
import IconLegend from "./legend/iconLegend";
import {MapContainer, Pane, TileLayer} from "react-leaflet";
import L from "leaflet";
import {TileMapData} from "../../../../../config/const/event/eventMapConst";
import DetailBaseMapLayer from "./layer/detailBaseMapLayer";

import 'leaflet/dist/leaflet.css';
import SensorMarker from "./marker/sensorMarker";
import DetailMapControl from "./detailMapControl";
import IotDetailStatPopup from "./popup/iotDetailStatPopup";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/rootStore";
import SensorAcitveMarker from "./marker/sensorAcitveMarker";
import {domain} from "../../../../../config/config";
import CctvPopupPlayer from "./popup/cctvPopupPlayer";
import CctvMarker from "../../../event/gis/ marker/cctvMarker";


const DetailGisArea = () => {


    // gis는 leaflet으로 진행할 예정
    // const [center, setCenter] = useState(HS_POS);
    const mapCenter = useSelector((state:RootState)=> state.view.main.detailMapCenter);
    const zoomLevel = useSelector((state:RootState) => state.view.main.detailMapZoomLevel);
    const activeSensor = useSelector((state:RootState)=>state.view.main.activeDetailMarker);
    const gisSetIconList = useSelector((state:RootState)=> state.view.event.gis.gisSetIconList);


    return(
        <section className={"gis_area"}>
            <button type="button" className="btn_gis_back"></button>
            <GisSetting/>

            <MapContainer
            renderer={L.canvas()}
            zoomControl={true}
            zoom={zoomLevel}
            center = {mapCenter}
            minZoom={TileMapData['vworld'].options.minZoom}
            maxZoom={TileMapData['vworld'].options.maxZoom}
            crs = {TileMapData['vworld'].crs}
            scrollWheelZoom={true}
            attributionControl={false}
            preferCanvas={true}
            style={{width: '100%', height: '100%', zIndex: '3', borderRadius: '10px'}}
            >
                <DetailMapControl/>
                <Pane name={"mainBaseMap"} style={{zIndex: '1'}}>
                    <DetailBaseMapLayer/>
                </Pane>
                <Pane name={"hybrid"} style={{zIndex: '5'}}>
                    <TileLayer key={`add_hybrid_detail`} {...TileMapData.options}
                               url={`http://${domain}/proxy?https://xdworld.vworld.kr/2d/Hybrid/service/{z}/{x}/{y}.png`}/>
                               {/*url={"https://xdworld.vworld.kr/2d/Hybrid/service/{z}//{x}/{y}.png"}/>*/}
                </Pane>
                <Pane name={"cctvMarker"}style={{zIndex : 9997}}>
                    <CctvMarker/>
                </Pane>
                <Pane name={"sensorMarker"} style={{zIndex : 9998}}>
                    <SensorMarker/>
                </Pane>
                <Pane name={"activeSensorMarker"} style={{zIndex : 9998}}>
                    <SensorAcitveMarker/>
                </Pane>
                <Pane name={"sensorPopup"} style={{zIndex : 9998}}>
                    {
                        gisSetIconList.includes('tidelevel') &&
                        activeSensor&&
                        <IotDetailStatPopup sensor={activeSensor}/>

                    }
                </Pane>
                <Pane name={"cctvPopupPlayer"} style={{zIndex : 9999}}>
                    <CctvPopupPlayer/>
                </Pane>


            </MapContainer>
        </section>
    )

}

export default DetailGisArea;