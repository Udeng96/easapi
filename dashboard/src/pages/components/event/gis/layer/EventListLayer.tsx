import {RootState} from "../../../../store/rootStore";
import {useEffect, useState} from "react";
import {Polyline, useMap} from "react-leaflet";
import {useDispatch, useSelector} from "react-redux";
import L, {LatLngExpression, Layer} from "leaflet";
import GeometryUtil from "leaflet-geometryutil";

import {getClosestClusterMarker} from "../utils/leafletUtils";
import {updateActiveCctv, updatePlayEventLatLng} from "../../../../store/view/event/gis/eventGisStore";

const EventListLayer = (props: { position: LatLngExpression }) => {

    const dispatch = useDispatch();
    const map = useMap();
    const activeEvent = useSelector((state: RootState) => state.view.event.list.activeEvent); // 이벤트 위치
    const zoomLevel = useSelector((state: RootState) => state.view.event.gis.eventZoomLevel);
    const [lineList, setLineList] = useState<{ lat: number, lng: number }[]>([]);

    useEffect(() => {

        let cctvLayers: Layer[] = [];

        map.eachLayer((l) => {

            //@ts-ignore
            if (l.options.cctvMarker) {
                cctvLayers.push(l);
            }

        })

        if (activeEvent) {

            let sortedCctvByDistance = cctvLayers.sort((_a: Layer, _b: Layer) => {

                //@ts-ignore
                const aDistance = GeometryUtil.distance(map, props.position, _a._latlng);


                //@ts-ignore
                const bDistance = GeometryUtil.distance(map, props.position, _b._latlng);

                return aDistance - bDistance;

            })

            let filterDataList: any[] = [];

            // 중복 제거
            sortedCctvByDistance.forEach((info: Layer, index: number) => {

                //@ts-ignore
                let findIndex = filterDataList.map(info2 => info2.options.cctvMarker.cctvName).indexOf(info.options.cctvMarker.cctvId);

                if (filterDataList.length <= 1) {
                    if (findIndex === -1) {
                        filterDataList.push(info);
                    }
                }
            })

            const selectedMarkers = filterDataList.slice(0, Math.min(filterDataList.length, 1))

            let smList = selectedMarkers.map((sm) => {
                // const target = getClosestClusterMarker(sm, zoomLevel); // 현재 zoom level 에서 가장 가까운 marker
                //@ts-ignore
                return {lat: Number(sm._latlng.lat), lng: Number(sm._latlng.lng)}
            }).filter(sm => {
                return true
            })

            setLineList(smList); //라인을 먼저 그리고 라인이 없으면 cctv도 비워버린다.


            if(smList.length>0 &&activeEvent){
                const playCctv = selectedMarkers[0].options.cctvMarker;
                dispatch(updateActiveCctv(playCctv));
                dispatch(updatePlayEventLatLng({lat:smList[0].lat,lng: smList[0].lng}));
            }else{
                dispatch(updateActiveCctv(null));
            }


            // if (smList.length > 0) {
            //     const playCctv = selectedMarkers.map(info => info.options.data);
            //     dispatch(updateActiveCctv(playCctv));
            // } else {
            //     dispatch(updateActiveCctv(null));
            // }
            // dispatch(updatePlayEventLatLng(new L.LatLng(smList[0].lat, smList[0].lng));

        }

    },[zoomLevel,activeEvent])

    return(
        <>
            {
                (lineList.length>0 && props.position)&&
                lineList.map((line,index)=>{
                    return <Polyline key={`Polyline__${index}`} positions={[[line.lat, line.lng],props.position]}
                                     color={'red'}
                                     fill={true}
                                     pathOptions={{color:'red'}}
                                     fillColor={'red'}
                                     renderer={L.canvas()}
                    />
                })
            }
        </>
    )
}

export default EventListLayer