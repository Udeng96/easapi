import MsgInfoItem from "./msgInfoItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/rootStore";
import {useEffect, useState} from "react";
import moment from "moment";
import {Receiver, TransferTarget} from "../../../../../config/interface/event/eventInterface";

const MsgInfo = () => {

    const activeHistory = useSelector((state: RootState) => state.server.event.transferContent);
    const organList = useSelector((state: RootState) => state.server.event.targetList);

    const [regDtm, setRegDtm] = useState<string>("");
    const [targetList, setTargetList] = useState<string>("");
    const [grade, setGrade] = useState<string>("");
    const [gradeType, setGradeType] = useState<string>("");

    useEffect(() => {

        if (activeHistory) {


            setGrade(activeHistory.disasterGrade);
            setGradeType(setGradeTypeForm(activeHistory.disasterGrade));
            setRegDtm(setDtmForm(activeHistory.transferDtm));

            setTargetList(setTargetListForm(activeHistory.transferTarget));


        }

    }, [activeHistory])

    const setGradeTypeForm = (grade:string) =>{

        let result = "";

        if(grade === "경계"){
            result = "alert";
        }else if(grade ==="위험"){
            result = "serious";
        }else{
            result = "caution";
        }

        return result;
    }

    const setDtmForm = (dtm: string) => {


        let year = dtm.substring(0, 4);
        let month = dtm.substring(4, 6);
        let date = dtm.substring(6, 8);
        let hour = dtm.substring(8, 10);
        let min = dtm.substring(10, 12);
        let sec = dtm.substring(12, 14);

        return `${year}-${month}-${date} ${hour}:${min}:${sec}`;
    }

    const setTargetListForm = (targets: string) => {

        let transferTarget : Receiver[] = JSON.parse(targets);
        let resultList : TransferTarget[] = [];

        organList.map((organ)=>{
            let name = organ.label;
            let count = 0;
            organ.children.map((member)=>{
                transferTarget.map((target)=>{
                    if(target.userId === member.value.split(' ')[1]){
                        count += 1;
                    }
                })
            })

            let list : TransferTarget = {
                name : name,
                cnt : count
            }

            resultList.push(list);
        })

        let etcCount = 0;
        transferTarget.map((target) => {
            if(target.userId==='extraAdd'){
                etcCount += 1;
            }
        })
        let etcList : TransferTarget = {name : '기타', cnt : etcCount };

        resultList.push(etcList);


        let target = "";

        resultList.map((result,index)=>{

            if(result.cnt>0){
                if(index !== resultList.length-1){
                    target += `${result.name}(${result.cnt}), `;
                }else{
                    target += `${result.name}(${result.cnt})`;
                }
            }
        })

        return target;

    }

return (
    <div className="event_history_frame">
        {
            activeHistory !== null ?
                <>
                    <MsgInfoItem title={"전파일시"} value={regDtm}/>
                    <MsgInfoItem title={"전파대상"} value={targetList}/>
                    <MsgInfoItem title={"이벤트 등급"} value={grade} type={gradeType}/>

                </>
                :
                <p className="no_message_text">메시지 전파 내역이 없습니다.</p>


        }
    </div>
)

}
export default MsgInfo