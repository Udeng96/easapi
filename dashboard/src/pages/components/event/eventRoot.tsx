import LastEventListArea from "./list/lastEventListArea";
import EventGisArea from "./gis/eventGisArea";
import BoxArea from "./box/boxArea";
import TargetModal from "./box/msg/modal/targetModal";
import EventModalRoot from "./modal/eventModalRoot";
import ReleaseModal from "./list/modal/releaseModal";

import "../../../public/static/dashboard/event/css/gisArea.css";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/rootStore";
import AlertModal from "./box/msg/modal/alertModal";
import * as EventActions from "../../saga/actions/event/eventActions";
import {useEffect} from "react";


const EventRoot = () => {

    const activeEvent = useSelector((state:RootState)=> state.view.event.list.activeEvent);

    const dispatch = useDispatch();

    useEffect(()=>{

        if (activeEvent){
            (EventActions.actions.requestGetHistory(activeEvent.eventSeq));

        }


    },[])



    return(
        <>
            <LastEventListArea/>
            <EventGisArea/>
            <BoxArea/>

            <TargetModal/>
            <EventModalRoot/>
            <ReleaseModal/>
            <AlertModal/>

        </>
    )
}

export default EventRoot