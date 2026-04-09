import {useDispatch, useSelector} from "react-redux";
import {useMap, useMapEvents} from "react-leaflet";
import {RootState} from "../../../../store/rootStore";
import {useEffect} from "react";
import {updateZoomLevel} from "../../../../store/view/main/mainStore";

const MainMapControl = () => {

    const dispatch = useDispatch();
    const map = useMap();

    const mapCenter = useSelector((state:RootState) => state.view.main.mapCenter);
    const zoomLevelStore = useSelector((state:RootState) => state.view.main.mapZoomLevel);

    useEffect(() => {
        map.setView(mapCenter, zoomLevelStore, {
            animate : true,
            duration : 1,
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
            dispatch(updateZoomLevel(level));
        }
    })

    return null;
}

export default MainMapControl