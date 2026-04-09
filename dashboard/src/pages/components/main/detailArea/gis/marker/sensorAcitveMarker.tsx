import {useDispatch, useSelector} from "react-redux";
import {useMap} from "react-leaflet";
import {RootState} from "../../../../../store/rootStore";
import {useEffect} from "react";
import ReactDOMServer from "react-dom/server";
import L from "leaflet";
import {SensorInfo} from "../../../../../../config/interface/main/mainInterface";
import {updateActiveDetailMarker} from "../../../../../store/view/main/mainStore";

const SensorActiveMarker = () => {

    const dispatch = useDispatch();
    const map = useMap();

    const activeIconList = useSelector((state:RootState) => state.view.main.activeSensorIconList);
    const activeMarker = useSelector((state:RootState)=>state.view.main.activeDetailMarker);
    const gisSetIconList = useSelector((state:RootState)=> state.view.event.gis.gisSetIconList);

    useEffect(()=>{


        map.eachLayer((l)=>{
            //@ts-ignore
            if(l.options.sensorActiveData){
                let findIndex = -1;
                activeIconList.map((sensor,index)=>{
                    //@ts-ignore
                    if(sensor._leaflet_id === l._leaflet_id) findIndex = index
                })

                //@ts-ignore
                l.setIcon(renderIcon(l.options.sensorActiveData, findIndex))
                l.off('click');
                l.on('click',markerClick);
            }
        })

    },[activeIconList])

    const renderIcon = (info:SensorInfo) => {
        return L.divIcon({
            className : 'tide_leve_custom_icon_active',
            html : ReactDOMServer.renderToString(
                <div className = {`gis_icon tidelevel_icon active ${info.dvcPkId}`} />
            ),
            iconAnchor : [30,30]
        })
    }

    const markerClick = (e:any) => {

        let info : SensorInfo = e.target.options.sensorActiveData;




        if(activeMarker){
            if(info.dvcPkId === activeMarker.dvcPkId){
                dispatch(updateActiveDetailMarker(null));
            }else{
                dispatch(updateActiveDetailMarker(info));
            }
        }
    }

    const makeActiveMarker = (sensor:any) => {
        const sensorMarker = L.marker([Number(sensor.coordy),Number(sensor.coordx)],{
            icon : renderIcon(sensor),
            pane : 'activeSensorMarker',
            //@ts-ignore
            sensorActiveData : sensor,
            active : false,
        })

        sensorMarker.off('click');
        sensorMarker.on('click',markerClick)
        return sensorMarker
    }



    useEffect(()=>{

        map.eachLayer((l)=>{
            //@ts-ignore
            if(l.options.sensorActiveData){
                map.removeLayer(l)
            }
        })


        if(activeMarker&&gisSetIconList.includes("tidelevel")){

            let newMarker = makeActiveMarker(activeMarker);
            map.addLayer(newMarker);

        }
    },[activeIconList,activeMarker,gisSetIconList])

    return null;
}

export default SensorActiveMarker