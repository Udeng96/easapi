import Nav from "./main/nav";
import MainRoot from "./main/mainRoot";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/rootStore";
import {useEffect, useState} from "react";
import {NAV} from "../../config/const/commonConst";
import EventRoot from "./event/eventRoot";
import StatRoot from "./stat/statRoot";
import FullPlayerBox from "./event/box/player/fullPlayerBox";
import * as MainActions from "../saga/actions/main/mainActions";
import * as EventActions from "../saga/actions/event/eventActions";
import * as StatActions from "../saga/actions/stat/statAction";



const Root = () => {

    const dispatch = useDispatch();

    const activeSensor = useSelector((state: RootState) => state.view.main.activeSensor);
    const eventList = useSelector((state:RootState)=>state.server.event.eventList);

    useEffect(() => {

        dispatch(EventActions.actions.requestGetEventStateStat());
        dispatch(EventActions.actions.requestGetEventList());
        dispatch(MainActions.actions.requestGetSensorList());
        dispatch(EventActions.actions.requestGetTargetList());
        dispatch(EventActions.actions.requestGetCctvList());
        dispatch(StatActions.actions.requestGetDeviceStream())

        dispatch(MainActions.actions.requestGetWarnInfo());
        dispatch(MainActions.actions.requestGetWeatherInfo());

    }, [])


    useEffect(()=>{

        dispatch(EventActions.actions.requestGetEventStateStat());

    },[eventList])

    useEffect(() => {

        activeSensor ? setIsDetail(true) : setIsDetail(false);

    }, [activeSensor])

    useEffect(() => {

        const id = setInterval(() => {

            dispatch(MainActions.actions.requestGetWarnInfo());
            dispatch(MainActions.actions.requestGetWeatherInfo());
        }, 3600000); //1시간 마다 업데이트

        return () => clearInterval(id);

    })


    const activeNav = useSelector((state: RootState) => state.view.main.activeNav);
    const [isDetail, setIsDetail] = useState<boolean>(false);
    const [isFullOn, setIsFullOn] = useState<boolean>(false);
    const fullCctvState = useSelector((state: RootState) => state.view.event.box.isFullCctvOpen);

    useEffect(() => {

        setIsFullOn(fullCctvState);

    }, [fullCctvState])


    return (
        <>
            <>
                <section className={`dashWrap ${isFullOn ? 'cctv' : ''}`}>
                    {
                        isFullOn ?
                            <FullPlayerBox/>
                            :
                            <>
                                <Nav/>
                                {
                                    activeNav === NAV.main ? <MainRoot isDetail={isDetail}/> :
                                        activeNav === NAV.event ? <EventRoot/> :
                                            <StatRoot/>
                                }
                            </>
                    }
                </section>
            </>


        </>
    )
}

export default Root;