import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {Popup} from "react-leaflet";
import {updateFullCctvModal} from "../../../../../store/view/event/box/eventBoxStore";
import {updateActiveEvent} from "../../../../../store/view/event/list/eventListStore";
import PlayerBox from "../../../../event/box/player/playerBox";
import {updateActiveCctv} from "../../../../../store/view/event/gis/eventGisStore";
import {updateActiveDetailCctv} from "../../../../../store/view/main/mainStore";

const CctvPopupPlayer = () => {

    const dispatch = useDispatch();

    const  activeCctv  = useSelector((state: RootState) => state.view.main.activeDetailCctv);

    const onClickFullBtn = () => {
        dispatch(updateFullCctvModal(true));
    }

    const onClickCloseBtn = () => {
        dispatch(updateActiveDetailCctv(null));
    }

    return (
        <>
            {
                activeCctv &&
                <Popup
                    autoClose = {false}
                    position={[Number(activeCctv.y),Number(activeCctv.x)]}
                    offset={[60,10]}
                >
                <div className="gis_cctv_popup">
                <header className="gis_cctv_popup_header">
                <p className="popup_header_text type_cctv_fixed">{`[N]${activeCctv.cctvName}`}</p>
                {/*<p className="popup_header_text type_cctv_fixed">[N]CCTV_OO면_A4446</p>*/}
                <button type="button" className="btn_popup_close" onClick={onClickCloseBtn}></button>
                </header>
                <div className="gis_cctv_popup_body">
                <div className="cctv_in">
                    <PlayerBox/>
                </div>
                <button type="button" className="btn_expansion" onClick={onClickFullBtn}></button>
                </div>
                </div>
                </Popup>
            }
        </>


)
}

export default CctvPopupPlayer;