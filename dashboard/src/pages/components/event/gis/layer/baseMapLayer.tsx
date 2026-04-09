import {useSelector} from "react-redux";
import {RootState} from "../../../../store/rootStore";
import {useEffect, useState} from "react";
import {TileMapData} from "../../../../../config/const/event/eventMapConst";
import {TileLayer} from "react-leaflet";

const BaseMapLayer = () => {

    const mapType = useSelector((state:RootState)=> state.view.event.gis.layerType);
    const [tiles, setTiles] = useState<any>(null);

    useEffect(()=>{


        setTiles(
            <TileLayer key={`vworld_${mapType}_${'0'}`} {...TileMapData['vworld'].options}
                       url={TileMapData['vworld'].tiles[mapType].urls[0]}/>
        )
        
    },[mapType])

    return <>{tiles}</>

}

export default BaseMapLayer