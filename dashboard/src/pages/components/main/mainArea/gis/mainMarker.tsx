import {useDispatch, useSelector} from "react-redux";
import {useMap} from "react-leaflet";
import {RootState} from "../../../../store/rootStore";
import {useEffect} from "react";
import {SensorInfo} from "../../../../../config/interface/main/mainInterface";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import {updateActiveMainMarker} from "../../../../store/view/main/mainStore";

const MainMarker = () => {
    const dispatch = useDispatch();
    const map = useMap();

    const sensorList = useSelector((state: RootState) => state.server.main.sensorList);
    const activeMainMarker = useSelector((state: RootState) => state.view.main.activeMainMarker);

    useEffect(()=>{



    },[activeMainMarker])


    useEffect(() => {

        map.eachLayer((l) => {
            //@ts-ignore
            if (l.options.mainSensor) {
                let findIndex = -1
                sensorList.map((sensor, index) => {
                    //@ts-ignore
                    if (sensor._leaflet_id === l._leaflet_id) findIndex = index
                })

                //@ts-ignore
                l.setIcon(renderIcon(l.options.mainSensor, findIndex))
                l.off('click');
                l.on('click', markerClick);
            }
        })

    }, [sensorList, activeMainMarker])

    const renderIcon = (info: SensorInfo,state:string) => {
        return L.divIcon({
            className: 'gis_loc_serious_custom_icon',
            html: ReactDOMServer.renderToString(
                <div
                    className={`gis_loc_icon state_${state} ${info.dvcPkId} ${activeMainMarker && activeMainMarker.dvcPkId === info.dvcPkId ? 'active' : ''}`}/>
            ),
            iconAnchor: [30, 30]
        })
    }

    const markerClick = (e: any) => {

        let info: SensorInfo = e.target.options.mainSensor;

        if (activeMainMarker) {
            //@ts-ignore
            if (activeMainMarker.dvcPkId === info.dvcPkId) {
                dispatch(updateActiveMainMarker(null));
            } else {
                dispatch(updateActiveMainMarker(info));
            }
        } else {
            dispatch(updateActiveMainMarker(info));
        }
    }


    const makeMarker = (sensor: any) => {


        const sensorMarker = L.marker([Number(sensor.coordy), Number(sensor.coordx)], {
            icon: renderIcon(sensor,sensor.state),
            pane: 'mainMarker',
            //@ts-ignore
            mainSensor: sensor,
            active: false,
        })

        sensorMarker.off('click');
        sensorMarker.on('click', markerClick)
        return sensorMarker

    }

    useEffect(() => {

        map.eachLayer((l)=>{
            //@ts-ignore
            if (l.options.mainSensor){
                map.removeLayer(l);
            }
        })

        if (sensorList.length > 0) {
            sensorList.map((sensor) => {
                let marker = makeMarker(sensor)
                map.addLayer(marker);
            })
        }

    }, [sensorList,activeMainMarker])


    return null;
}

export default MainMarker;