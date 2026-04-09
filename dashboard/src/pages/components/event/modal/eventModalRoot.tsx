import SearchArea from "./search/searchArea";
import ResultArea from "./result/resultArea";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/rootStore";
import {updateEventModal} from "../../../store/view/event/list/eventListStore";
import * as EventActions from "../../../saga/actions/event/eventActions";
import {ModalParam} from "../../../../config/interface/event/eventInterface";

const EventModalRoot = () => {

    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const eventModalState = useSelector((state:RootState)=> state.view.event.list.isEventModalOpen);

    // const eventParam : ModalParam = {
    //     rows : 10,
    //     pageNumber : 1
    // }

    useEffect(()=>{
        setIsModalOpen(eventModalState);
    },[eventModalState])

    const onClickCloseBtn = () => {
        dispatch(updateEventModal(false));
    }

    return(
        <section className={`modal_popup past_evt_history_popup ${isModalOpen && 'active'}`} id="pastEvtHistoryPopup">
            <div className="modal_popup_frame">
                {/*modalPopupHeader*/}
                <header className="modal_popup_header">
                    <div className="popup_title type_event_history">지난 이벤트 내역</div>
                    <button type="button" className="btn_popup_close" onClick={onClickCloseBtn}></button>
                </header>
                {/*modalPopupBody*/}
                <div className="modal_popup_body">
                    {/*evtSearchArea*/}
                    <SearchArea/>
                    {/*pastEvtHistoryArea*/}
                    <ResultArea/>
            </div>
        </div>
</section>
    )

}

export default EventModalRoot