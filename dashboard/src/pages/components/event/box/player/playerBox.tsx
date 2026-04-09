import {useDispatch, useSelector} from "react-redux";
import {updateFullCctvModal} from "../../../../store/view/event/box/eventBoxStore";
import {RootState} from "../../../../store/rootStore";
import EventPlayer from "../../eventPlayer";
import {NAV} from "../../../../../config/const/commonConst";

const PlayerBox = () => {

    const dispatch = useDispatch();
    const activeEvent = useSelector((state:RootState)=> state.view.event.list.activeEvent);
    const activeCctv = useSelector((state:RootState)=>state.view.event.gis.activeCctv);
    const activeNav = useSelector((state:RootState)=>state.view.main.activeNav);
    const activeDetailCctv = useSelector((state:RootState)=>state.view.main.activeDetailCctv);



    const onClickFullBtn = () => {
        dispatch(updateFullCctvModal(true));
    }

    return(
        <div className="event_cctv_frame">
            {/*<div className="event_cctv/_frame_head"><i></i>{`${activeCctv?'[N]'+activeCctv.cctvName : '선택된 이벤트가 없습니다.'}`}</div>*/}
            <div className="event_cctv_frame_body">
                <div className="cctv_in">
                    {
                        activeNav === NAV.event ?

                        activeCctv &&
                        <EventPlayer cctvId={activeCctv.cctvId} facId={activeCctv.cctvId} rtsp={activeCctv.rtspUrl}/>

                            :

                            activeDetailCctv &&
                            <EventPlayer cctvId={activeDetailCctv.cctvId} facId={activeDetailCctv.cctvId} rtsp={activeDetailCctv.rtspUrl}/>

                    }
                </div>
                {
                    activeNav === NAV.event ?

                    activeEvent &&
                    <button type="button" className="btn_expansion" onClick={onClickFullBtn}></button>

                        :

                        activeDetailCctv&&
                        <button type="button" className="btn_expansion" onClick={onClickFullBtn}></button>

                }
            </div>
        </div>
    )

}

export default PlayerBox