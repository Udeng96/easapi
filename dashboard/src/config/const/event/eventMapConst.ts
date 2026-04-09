import L, {CRS} from "leaflet";
import {domain} from "../../config";

export enum TileMapEnum{
    vworld = `vworld`,
}

export interface ITileMapData {
    [key:string] : {
        name : string,
        options : {
            [key : string] : any
        },
        tiles : {
            [key : string] : {
                name : string,
                urls : string[]
            }
        },
        crs : CRS
    }
}

// const location = window.location.host
const location =`http://${domain}/proxy?`;
// const location = ''
export const TileMapData : ITileMapData = {
    [TileMapEnum.vworld] : {
        name : `브이월드`,
        options : {
            minZoom : 6,
            maxZoom : 18,
        },
        tiles : {
            normal : {
                name : '일반지도' ,
                // urls : [`https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png`] //개발
                urls : [`${location}https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png`] // 배포
            },
            satellite : {
                name : '위성지도' ,
                // urls : [`https://xdworld.vworld.kr/2d/Satellite/service/{z}/{x}/{y}.jpeg`] // 개발
                urls : [`${location}https://xdworld.vworld.kr/2d/Satellite/service/{z}/{x}/{y}.jpeg`]  // 배포
            },
        },
        crs : L.CRS.EPSG3857
    },
}
