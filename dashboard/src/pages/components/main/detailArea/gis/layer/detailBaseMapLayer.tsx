import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {RootState} from "../../../../../store/rootStore";
import {TileLayer} from "react-leaflet";
import {TileMapData} from "../../../../../../config/const/event/eventMapConst";

const DetailBaseMapLayer = () => {

    const mainMapType = useSelector((state:RootState)=> state.view.main.activeLayer);
    const [tiles, setTiles] = useState<any>(null);

    useEffect(()=>{
        setTiles(
            <TileLayer key={`vworld_${mainMapType}_main`} {...TileMapData['vworld'].options}
                url={TileMapData['vworld'].tiles[mainMapType].urls[0]}/>
        )
    },[mainMapType])

    return <>{tiles}</>
}

export default DetailBaseMapLayer;