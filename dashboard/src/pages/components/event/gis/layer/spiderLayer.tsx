import {useSelector} from "react-redux";
import {RootState} from "../../../../store/rootStore";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import {Marker, Pane} from "react-leaflet";
import EventListLayer from "./EventListLayer";
import "leaflet/dist/leaflet.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw-src.css";

const SpiderLayer = () => {

    const activeEvent = useSelector((state: RootState) => state.view.event.list.activeEvent);
    const playEventLatLng = useSelector((state: RootState) => state.view.event.gis.playEventLatLng);



    function renderIcon() {
        return L.divIcon({
            className: '',
            html: ReactDOMServer.renderToString(
                <div
                    className={`gis_icon numbering_img`}></div>
            ),
            iconAnchor: [65, 45],
        })
    }


    return (
        <>
            <Pane name={'spiderLayer'} style={{zIndex:9999}}>
                {


                    activeEvent&&<EventListLayer position={{lat: Number(activeEvent?.lng), lng: Number(activeEvent?.lat)}}/>

                }

            </Pane>
            <Pane name={'numberMarker'}>
                {

                    (activeEvent && playEventLatLng) &&
                    <Marker key={`spider_marker`} position={
                        playEventLatLng} icon={renderIcon()}/>

                }
            </Pane>
        </>

    )

}

export default SpiderLayer;
