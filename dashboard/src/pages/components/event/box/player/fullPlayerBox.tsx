import "../../../../../public/static/dashboard/cctvFull/css/cctvFull.css";
import {useDispatch, useSelector} from "react-redux";
import {updateFullCctvModal} from "../../../../store/view/event/box/eventBoxStore";
import EventPlayer from "../../eventPlayer";
import {RootState} from "../../../../store/rootStore";
import {NAV} from "../../../../../config/const/commonConst";


const FullPlayerBox = () => {

    const dispatch = useDispatch();

    const activeCctv = useSelector((state: RootState) => state.view.event.gis.activeCctv);
    const activeNav = useSelector((state: RootState) => state.view.main.activeNav);
    const activeDetailCctv = useSelector((state: RootState) => state.view.main.activeDetailCctv);


    const onClickCloseBtn = () => {
        dispatch(updateFullCctvModal(false));
    }

    return (
        <div className="gis_cctv_popup full_size ptz_in">
            <header className="gis_cctv_popup_header">
                {/*일반 고정형 CCTV 카메라*/}
                <p className="popup_header_text type_cctv_fixed">[N]{activeCctv?.cctvName}</p>


                <button type="button" className="btn_popup_close" onClick={onClickCloseBtn}></button>
            </header>
            <div className="gis_cctv_popup_body">
                <div className="cctv_in">
                    {
                        activeNav === NAV.event ?

                            activeCctv &&
                            <EventPlayer cctvId={activeCctv.cctvId + 'FULL'} facId={activeCctv.cctvId + 'FULL'}
                                         rtsp={activeCctv.rtspUrl}/>
                            :
                            activeDetailCctv &&
                            <EventPlayer cctvId={activeDetailCctv.cctvId} facId={activeDetailCctv.cctvId}
                                         rtsp={activeDetailCctv.rtspUrl}/>


                    }
                </div>
                <div className="ptz_control_area">
                    <button type="button" className="btn_expansion" onClick={onClickCloseBtn}></button>
                </div>
            </div>
        </div>
    )


}

export default FullPlayerBox
