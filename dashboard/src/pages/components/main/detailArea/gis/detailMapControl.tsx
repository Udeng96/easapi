import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/rootStore";
import {useMap, useMapEvents} from "react-leaflet";
import {useEffect} from "react";
import {updateActiveDetailCctv, updateZoomLevel} from "../../../../store/view/main/mainStore";

const DetailMapControl = () => {

    const dispatch = useDispatch();
    const map = useMap();

    const mapCenter = useSelector((state:RootState) => state.view.main.detailMapCenter);
    const zoomLevelStore = useSelector((state:RootState)=> state.view.main.detailMapZoomLevel);

    useEffect(()=>{
        map.setView(mapCenter,zoomLevelStore,{
            animate : true,
            duration : 1,
            easeLinearity : 1,
            noMoveStart : true
        })
    },[mapCenter])

    useEffect(()=>{
        map.setView(map.getCenter(), zoomLevelStore, {
            animate: true,
            duration : 1,
            easeLinearity : 1,
            noMoveStart : true})
    },[zoomLevelStore])


    useEffect(()=>{
        map.panTo(mapCenter,{animate:false})
    },[mapCenter])

    useMapEvents({
        zoom : event => {
            let level = event.target._zoom
            dispatch(updateZoomLevel(level));
        },
        click : event => {
            dispatch(updateActiveDetailCctv(null));
        }
    })

    return null;
}

export default DetailMapControl;