import {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {updateCheckTargetList} from "../../../../../store/view/event/box/eventBoxStore";

const TargetModalBlock = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const checkTargetList = useSelector((state:RootState)=> state.view.event.box.checkTargetList);

    const activeTargetModal = useSelector((state:RootState)=>state.view.event.box.isTargetModalOpen);

    useEffect(()=>{

            setName("");
            setPhone("");

    },[activeTargetModal])

    const onClickAddBtn = () => {

        if(phone.includes('-')){
            alert("'-'를 제외하고 입력해주세요");
        }else if(name.length===0){
            alert("이름을 입력해주세요");
        }else if(!phone){
            alert("전화번호를 입력해주세요");
        }else if(isNaN(Number(phone)) || phone.length!==11){
            alert("잘못된 형식입니다. 다시 입력해주세요");
        }else{

            let newCheckTargetList = [...checkTargetList];
            newCheckTargetList.push(`${phone} newTarget ${name}(${phone})`);
            dispatch(updateCheckTargetList(newCheckTargetList));

            setName("");
            setPhone("");

        }
    }

    return(
        <div className="popup_block">
            <p className="event_info_title">직접 입력</p>
            <div className="insert_area">
                <input type="text" className="target_input type_name" value={name} placeholder="이름 입력" onChange={(e)=> setName(e.target.value)} />
                <input type="text" className="target_input type_phone" value={phone} placeholder="전화번호 ‘-’를 제외하고 입력" onChange={(e ) => setPhone(e.target.value)}/>
                <button type="button" className="btn_add" onClick={onClickAddBtn}>추가</button>
            </div>
        </div>
    )


}

export default TargetModalBlock