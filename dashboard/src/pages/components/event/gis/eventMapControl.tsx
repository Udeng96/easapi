import {useMap, useMapEvents} from "react-leaflet";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/rootStore";
import {useEffect} from "react";
import {updateEventZoomLevel} from "../../../store/view/event/gis/eventGisStore";

const EventMapControl = () => {


    const map = useMap();
    const dispatch = useDispatch();

    const mapCenter = useSelector((state:RootState) => state.view.event.gis.eventMapCenter);
    const zoomLevelStore = useSelector((state:RootState)=>state.view.event.gis.eventZoomLevel);

    useEffect(()=>{
        map.setView(mapCenter,zoomLevelStore,{
            animate:true,
            duration: 1,
            easeLinearity : 1,
            noMoveStart : true
        })
    },[mapCenter])

    useEffect(()=> {

        map.setView(map.getCenter(), zoomLevelStore, {
            animate : true,
            duration : 1,
            easeLinearity : 1,
            noMoveStart : true
        })

    },[zoomLevelStore])

    useMapEvents({
        zoom : event => {
            let level = event.target._zoom;
            dispatch(updateEventZoomLevel(level));
        }
    })

    useEffect(()=>{
        map.panTo(mapCenter,{animate:false})
    },[mapCenter])

    return null;

}
export default EventMapControl;