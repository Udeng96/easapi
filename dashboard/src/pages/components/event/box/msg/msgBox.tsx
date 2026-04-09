import TargetArea from "./targetArea";
import MsgInfo from "./msgInfo";
import {useDispatch, useSelector} from "react-redux";
import {updateSelectTargetList, updateTargetModal} from "../../../../store/view/event/box/eventBoxStore";
import {RootState} from "../../../../store/rootStore";
import {Receiver, TransferBody} from "../../../../../config/interface/event/eventInterface";
import {useEffect, useState} from "react";
import * as EventActions from "../../../../saga/actions/event/eventActions";
import {EVENT_GRADE} from "../../../../../config/const/event/eventConst";

const MsgBox = () => {

    const dispatch = useDispatch();

    const activeEvent = useSelector((state:RootState)=>state.view.event.list.activeEvent);
    const targetList = useSelector((state:RootState)=> state.view.event.box.selectTargetList);
    const memberList = useSelector((state:RootState)=> state.server.event.memberList);


    const [content, setContent] = useState<string>("");


    useEffect(()=>{

        dispatch(updateSelectTargetList([]));
        if (activeEvent){
            setContent(activeEvent.cntn);
        }

    },[activeEvent])

    const setGradeForm = (statId:string) =>{

        let grade = "";
        if (statId.length>9){
            grade = statId.substring(9,12);
        }else{
            grade = statId.substring(6,9);
        }

        if (grade === EVENT_GRADE.caution){
            return "주의";
        }else if (grade === EVENT_GRADE.alert){
            return "경계";
        }else{
            return "위험";
        }
    }


    const onClickTargetBtn = () => {
        dispatch(updateTargetModal(true));
    }

    useEffect(()=>{
    },[targetList])

    const onClickSpreadBtn = () => {

        let receivers : Receiver[] = [];


        // 전파대상 가져오기
            targetList.map((target)=>{

                memberList.map((member)=>{


                if(target.split(' ')[1]=== member.userId){
                    let receiver : Receiver = {
                        userId :member.userId,
                        userName : member.userName,
                        cpNo : member.cpNo
                    }

                    receivers.push(receiver);



                }else if(target.split(' ')[1] === 'newTarget'){
                    let receiver : Receiver = {
                        userId : 'extraAdd',
                        userName : target.split(' ')[2].split("(")[0],
                        cpNo : target.split(' ')[0],
                    }


                    let count = 0;
                    receivers.map((re)=>{
                        if(re.cpNo===receiver.cpNo){
                            count += 1;
                        }
                    })

                    if(count===0){
                        receivers.push(receiver);
                    }

                }

            })
        })

        if(activeEvent){
            if(content===""){
                alert("전파 내용을 입력해주세요.");
            }else if(receivers.length === 0){
                alert("전파 대상을 선택해주세요");
            }else{

                let transferBody : TransferBody = {
                    transferSeqn : '',
                    content : content,
                    transferDtm : '',
                    transferUserId : 'cF44PnlyQz8bHxeVLR05Cn',
                    disasterId : activeEvent.eventSeq,
                    disasterGrade : setGradeForm(activeEvent.eventCd),
                    transferTarget : JSON.stringify(receivers),
                }

                dispatch(EventActions.actions.requestPostHistoryTransfer(transferBody));

            }

        }else{
            alert("선택된 이벤트가 없습니다.");
        }

    }

    return (
        <div className="event_spread_frame">
            {/*manualSpreadwrap*/}
            <div className="spread_info manual_spread_wrap">
                <p className="event_main_title type_message">메시지 전파</p>
                <button type="button" className="btn_target_select" onClick={onClickTargetBtn}>전파대상 선택</button>
                <p className="event_sub_title event_sub_title_target">전파대상</p>
                <TargetArea/>
                <div className="message_spread_box message_spread_info">
                    <p className="event_sub_title">전파내용</p>
                    <textarea name="amessage_info" value={content} className="message_text" placeholder="메시지 전파 내용 입력" onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <button type="button" className="btn_spread" onClick={onClickSpreadBtn}>전파</button>
                <div className="divide_bar"></div>
                <p className="event_main_title type_history">메시지 전파 내역</p>
                <MsgInfo/>
                <div className="event_spread_area"></div>
            </div>
        </div>
    )

}

export default MsgBox