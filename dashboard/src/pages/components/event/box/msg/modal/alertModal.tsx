import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {updateAlertModal} from "../../../../../store/view/event/box/eventBoxStore";
import * as EventActions from "../../../../../saga/actions/event/eventActions";

const AlertModal = () => {

    const dispatch = useDispatch();
    const alertModalOpen = useSelector((state:RootState)=> state.view.event.box.isAlertModalOpen);
    const activeEvent= useSelector((state:RootState) => state.view.event.list.activeEvent);

    const closeBtn = () => {
        dispatch(updateAlertModal(false));
        if(activeEvent){
            dispatch(EventActions.actions.requestGetHistory(activeEvent.eventSeq));
        }
    }
    return(
        <section className={`modal_popup evt_spread_popup ${alertModalOpen ? 'active' : ''}`} id="evtSpreadPopup">
            <div className="modal_popup_frame">
                {/*modalPopupHeader*/}
                <header className="modal_popup_header">
                    <div className="popup_title type_event_complete">이벤트 전파 완료</div>
                    <button type="button" className="btn_popup_close" onClick={closeBtn}></button>
                </header>
                {/*modalPopupBody*/}
                <div className="modal_popup_body">
                    <p className="modal_message">이벤트가<span>'전파'</span>되었습니다.</p>
                    <div className="btn_group">
                        <button type="button" className="btn_confirm" onClick={closeBtn}>확인</button>
                    </div>
                </div>
            </div>
        </section>


    )


}
export default AlertModal