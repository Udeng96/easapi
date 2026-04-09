import {useSelector} from "react-redux";
import {useMap} from "react-leaflet";
import {RootState} from "../../../../store/rootStore";
import {useEffect} from "react";
import {EventInfo} from "../../../../../config/interface/event/eventInterface";
import ReactDOMServer from "react-dom/server";
import L, {LatLng} from "leaflet";

const EventMarker = () => {

    const map = useMap();

    const eventList = useSelector((state: RootState) => state.server.event.eventList);

    useEffect(() => {

        map.eachLayer((l) => {
            //@ts-ignore
            if (l.options.eventData) {
                let findIndex = -1
                eventList.map((event, index) => {
                    //@ts-ignore
                    if (event._leaflet_id === l._leaflet_id) findIndex = index
                })

                //@ts-ignore
                l.setIcon(renderIcon(l.options.eventData, findIndex))
                l.off('click');
                l.on('click', markerClick);
            }
        })
    }, [eventList])

    const renderIcon = (event: EventInfo) => {
        return L.divIcon({
            className: 'event_custom_icon',
            html: ReactDOMServer.renderToString(
                <div className={`gis_icon event_icon ${event.eventSeq}`}/>
            ),
            iconAnchor: [30, 30]
        })
    }

    const markerClick = (e: any) => {

    }

    const makeMarker = (event: EventInfo) => {
        const eventMarker = L.marker(new LatLng(Number(event.lng), Number(event.lat)), {
            icon: renderIcon(event),
            pane: 'eventMarker',
            //@ts-ignore
            eventMarker: event,
            active: false,
        })

        eventMarker.off('click');
        eventMarker.on('click', markerClick)
        return eventMarker
    }


    useEffect(() => {


        map.eachLayer((l) => {
            //@ts-ignore
            if (l.options.eventMarker) {
                map.removeLayer(l);
            }
        })

        if (eventList.length > 0) {
            eventList.map((event) => {
                let marker = makeMarker(event);
                map.addLayer(marker);
            })
        }

    }, [eventList])




    return null;

}
export default EventMarker