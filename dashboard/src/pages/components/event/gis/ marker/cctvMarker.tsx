import {useMap} from "react-leaflet";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/rootStore";
import {useEffect} from "react";
import {CctvData} from "../../../../../config/interface/event/eventInterface";
import ReactDOMServer from "react-dom/server";
import L, {LatLng, Layer} from "leaflet";
import {updateActiveCctv} from "../../../../store/view/event/gis/eventGisStore";
import {updateActiveEvent} from "../../../../store/view/event/list/eventListStore";
import {NAV} from "../../../../../config/const/commonConst";
import {updateActiveDetailCctv} from "../../../../store/view/main/mainStore";

const CctvMarker = () => {

    const map = useMap();
    const dispatch = useDispatch();

    const cctvList = useSelector((state:RootState)=> state.server.event.cctvList);
    const eventList = useSelector((state:RootState)=>state.server.event.eventList);
    const activeCctv = useSelector((state:RootState)=> state.view.event.gis.activeCctv);
    const activeDetailCctv = useSelector((state:RootState)=> state.view.main.activeDetailCctv);
    const activeEvent = useSelector((state:RootState)=>state.view.event.list.activeEvent);
    const gisSetIconList = useSelector((state:RootState)=>state.view.event.gis.gisSetIconList);

    const activeNav = useSelector((state:RootState)=>state.view.main.activeNav);



    useEffect(()=>{
       map.eachLayer((l)=>{
           //@ts-ignore
           if(l.options.cctvData){
               let findIndex = -1;
               cctvList.map((cctv,index) => {
                   //@ts-ignore
                   if(cctv._leaflet_id === l._leaflet_id) findIndex = index;
               })

               //@ts-ignore
               l.setIcon(renderIcon(l.options.cctvData, findIndex));
               l.off('click');
               l.on('click',markerClick);
           }
       })
    },[cctvList,activeCctv]);


    const renderIcon = (cctv : CctvData) => {
        return L.divIcon({
            className : 'cctv_custom_icon',
            html: ReactDOMServer.renderToString(
                activeNav === NAV.event?
                <div className = {`gis_icon cctv_fixed_icon ${cctv.cctvId} ${activeCctv?.cctvId === cctv.cctvId ? 'active':''}`}/>:
                <div className = {`gis_icon cctv_fixed_icon ${cctv.cctvId} ${activeDetailCctv?.cctvId === cctv.cctvId ? 'active':''}`}/>
            ),
            iconAnchor : [30,30]
        })
    }

    const markerClick = (e:any) => {

        let cctv = e.target.options.cctvMarker;

        if (activeNav === NAV.main){

            if (activeDetailCctv){

                if(activeDetailCctv.cctvId === cctv.cctvId){

                    dispatch(updateActiveDetailCctv(null));

                }else{
                    dispatch(updateActiveDetailCctv(cctv))
                }
            }else{
                dispatch(updateActiveDetailCctv(cctv))

            }
        }else{

            if(activeCctv){
                if(activeCctv.cctvId === cctv.cctvId){
                    dispatch(updateActiveCctv(null));

                    dispatch(updateActiveEvent(null));
                    dispatch(updateActiveEvent(eventList[0]));
                }else{
                    dispatch(updateActiveCctv(cctv));
                }
            }else{
                dispatch(updateActiveCctv(cctv));
            }

        }
    }

    const makeMarker = (cctv:CctvData) => {
        const cctvMarker = L.marker(new LatLng(Number(cctv.y), Number(cctv.x)),{
            icon : renderIcon(cctv),
            pane : 'cctvMarker',
            //@ts-ignore
            cctvMarker : cctv,
            active : false,
        })

        cctvMarker.off('click');
        cctvMarker.on('click',markerClick)
        return cctvMarker
    }

    useEffect(()=>{

        let findIndex = gisSetIconList.indexOf("cctv");


        map.eachLayer((l)=>{

            //@ts-ignore
            if (l.options.cctvMarker){
                map.removeLayer(l);
            }
        })

        if (findIndex!==-1){
            cctvList.map((cctv)=>{

                let marker = makeMarker(cctv);
                map.addLayer(marker);
            })
        }

    },[cctvList,activeCctv,gisSetIconList,activeEvent,activeDetailCctv])



    return null;

}

export default CctvMarker;