import SensorErrListItem from "./sensorErrListItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {useEffect, useState} from "react";
import {SensorInfo} from "../../../../../../config/interface/main/mainInterface";

const SensorErrList = () => {

    const sensorList = useSelector((state:RootState) => state.server.main.sensorList);
    const [errorList, setErrorList] = useState<{sensorNm:string, errorDtm:string}[]>([]);

    useEffect(()=>{

        let newErrorList : {sensorNm:string, errorDtm:string}[] = [];
        sensorList.map((sensor)=>{
            if (sensor.dvcSt === 'N'){
                if (sensor.latestDtm==='-'){
                    newErrorList.push({sensorNm: sensor.dvcNm, errorDtm: setDateForm(sensor.updDtm)});
                }else{
                    newErrorList.push({sensorNm: sensor.dvcNm, errorDtm: sensor.latestDtm});
                }
            }
        })

        let orderDateList = newErrorList.sort(function(a,b){
            return (new Date(a.errorDtm).getTime() - new Date(b.errorDtm).getTime());
        }).reverse();


        setErrorList(orderDateList);

    },[sensorList])

    const setDateForm = (dtm : string)=>{
        let year = dtm.substring(0,4);
        let month = dtm.substring(4,6);
        let date = dtm.substring(6,8);

        let hour = dtm.substring(8,10);
        let min = dtm.substring(10,12);
        let sec = dtm.substring(12,14);

        return `${year}-${month}-${date} ${hour}:${min}:${sec}`
    }
    return (

        <>
            <div className="dash_body">
                <div className="dash_info sensor_list_wrap">
                    <ul className="list_head">
                        <li>No.</li>
                        <li>센서 종류</li>
                        <li>센서 명</li>
                        <li>고장 일시</li>
                    </ul>
                    <div className="list_area">
                        <ul className="list_body">
                            {
                                errorList.map((item,index)=>(
                                    <SensorErrListItem idx={index+1} nm={item.sensorNm} dtm={item.errorDtm}/>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </>


    )
}

export default SensorErrList;