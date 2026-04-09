import TargetModalTree from "./targetModalTree";
import TargetModalBox from "./targetModalBox";
import TargetModalBlock from "./targetModalBlock";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {
    updateCheckTargetList,
    updateExpandTreeList, updateSelectTargetList,
    updateTargetModal
} from "../../../../../store/view/event/box/eventBoxStore";
import * as EventActions from "../../../../../saga/actions/event/eventActions"

const TargetModal = () => {

    const dispatch = useDispatch();

    const targetModalState = useSelector((state:RootState)=> state.view.event.box.isTargetModalOpen);
    const checkTargetList = useSelector((state:RootState) => state.view.event.box.checkTargetList);

    const onClickCancelBtn = () => {
        dispatch(updateTargetModal(false));
        dispatch(updateExpandTreeList([]));
        dispatch(updateCheckTargetList([]));
    }

    const onClickSetBtn = () => {
        dispatch(updateSelectTargetList(checkTargetList));
        onClickCancelBtn();
    }

    useEffect(()=>{

        if(targetModalState){
        }

    },[targetModalState])



    return(

        <section className={`modal_popup select_evt_target_popup ${targetModalState && 'active'}`} id="spreadDetailEditPopup">
            <div className="modal_popup_frame">
                {/*modalPopupHeader*/}
                <header className="modal_popup_header">
                    <div className="popup_title type_spread_detail">이벤트 전파 대상 선택</div>
                    <button type="button" className="btn_popup_close" onClick={onClickCancelBtn}></button>
                </header>
                {/*modalPopupBody*/}
                <div className="modal_popup_body">
                    <TargetModalTree/>
                    <TargetModalBox/>
                    <TargetModalBlock/>
                    <div className="btn_group">
                        <button type="button" className="btn_cancel" onClick={onClickCancelBtn}>취소</button>
                        <button type="button" className="btn_apply" onClick={onClickSetBtn}>적용</button>
                    </div>
                </div>
            </div>
        </section>
        
    )

}

export default TargetModal