import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {SensorInfo} from "../../../../../../config/interface/main/mainInterface";
import ReactDOMServer from "react-dom/server";
import L from "leaflet";
import {useEffect} from "react";
import {useMap} from "react-leaflet";
import {updateActiveDetailMarker} from "../../../../../store/view/main/mainStore";

const SensorMarker = () => {

    const dispatch = useDispatch();
    const map = useMap();

    const sensorList = useSelector((state: RootState) => state.server.main.sensorList);
    const activeMarker = useSelector((state: RootState) => state.view.main.activeDetailMarker);
    const gisSetIconList = useSelector((state:RootState)=> state.view.event.gis.gisSetIconList);


    useEffect(() => {

        map.eachLayer((l) => {
            //@ts-ignore
            if (l.options.sensorData) {
                let findIndex = -1
                sensorList.map((sensor, index) => {
                    //@ts-ignore
                    if (sensor._leaflet_id === l._leaflet_id) findIndex = index
                })

                //@ts-ignore
                l.setIcon(renderIcon(l.options.sensorData, findIndex))
                l.off('click');
                l.on('click', markerClick);
            }
        })

    }, [sensorList, activeMarker])

    const renderIcon = (info: SensorInfo) => {
        return L.divIcon({
            className: 'tide_level_custom_icon',
            html: ReactDOMServer.renderToString(
                <div className={`gis_icon tidelevel_icon ${info.dvcPkId}`}/>
            ),
            iconAnchor: [30, 30]
        })
    }

    const markerClick = (e: any) => {
        let info: SensorInfo = e.target.options.sensorData;

        dispatch(updateActiveDetailMarker(info));

    }

    const makeMarker = (sensor: any) => {


        const sensorMarker = L.marker([Number(sensor.coordy), Number(sensor.coordx)], {
            icon: renderIcon(sensor),
            pane: 'sensorMarker',
            //@ts-ignore
            sensorData: sensor,
            active: false,
        })

        sensorMarker.off('click');
        sensorMarker.on('click', markerClick)
        return sensorMarker

    }

    useEffect(() => {

        if (gisSetIconList.includes("tidelevel")){



            if(!activeMarker){
                map.eachLayer((l)=>{
                    //@ts-ignore
                    if(l.options.sensorActiveData){
                        //@ts-ignore
                        let newMarker = makeMarker(l.options.sensorActiveData)
                        map.addLayer(newMarker);
                        map.removeLayer(l);
                    }
                })
                if(sensorList.length>0){
                    sensorList.map((sensor)=>{
                        // if(activeMarker)
                        //     if(activeMarker.dvcPkId !== sensor.dvcPkId){
                                let marker = makeMarker(sensor);
                                map.addLayer(marker);
                            // }
                        // }
                    })
                }
            }else{
                map.eachLayer((l)=>{
                    //@ts-ignore
                    //@ts-ignore
                    if(l.options.sensorData){
                        //@ts-ignore
                        if(activeMarker.dvcPkId === l.options.sensorData.dvcPkId){
                            map.removeLayer(l);
                        }
                    }

                })
            }

        }else{
            map.eachLayer((l)=>{
                //@ts-ignore
                if (l.options.sensorData){
                    map.removeLayer(l);
                }
            })
        }


    }, [sensorList, activeMarker,gisSetIconList]);

    return null;
}


export default SensorMarker