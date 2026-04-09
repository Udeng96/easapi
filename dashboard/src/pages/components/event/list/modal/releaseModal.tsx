import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/rootStore";
import {useEffect, useState} from "react";
import {updateReleaseModal} from "../../../../store/view/event/list/eventListStore";
import * as EventActions from "../../../../saga/actions/event/eventActions";
import {EventInfo} from "../../../../../config/interface/event/eventInterface";

const ReleaseModal = () => {

    const dispatch = useDispatch();
    const releaseModalState = useSelector((state:RootState)=> state.view.event.list.isReleaseModalOpen);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const selectedEvent = useSelector((state:RootState)=> state.view.event.list.activeEvent)

    useEffect(()=>{
        setIsModalOpen(releaseModalState)
    },[releaseModalState]);

    const onClickCancelBtn = () => {
        dispatch(updateReleaseModal(false));
    }
    const onClickReleaseHandle = () => {
        if (selectedEvent) {
            dispatch(EventActions.actions.requestGetEventRelease(selectedEvent))
            dispatch(updateReleaseModal(false))
        }
    }

    return(

        <section className={`modal_popup evt_release_popup ${isModalOpen && 'active'}`} id="evtReleasePopup">
            <div className="modal_popup_frame">
                {/*modalPopupHeader*/}
                <header className="modal_popup_header">
                    <div className="popup_title type_event_history">이벤트 해제</div>
                    <button type="button" className="btn_popup_close" onClick={onClickCancelBtn}></button>
                </header>
                {/*modalPopupBody*/}
                <div className="modal_popup_body">
                    <div className="modal_message_box">
                        <p className="modal_message">이벤트 발생 상황을<span>'해제'</span>하시겠습니까?</p>

                    </div>
                    <div className="btn_group">
                        <button type="button" className="btn_cancel" onClick={onClickCancelBtn}>취소</button>
                        <button type="button" className="btn_release" onClick={onClickReleaseHandle}>해제</button>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default ReleaseModal;