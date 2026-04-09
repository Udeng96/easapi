import {EventChannel, eventChannel} from "redux-saga";
import conf from "../../../config/config"
import {RootState} from "../../store/rootStore";
import {call, take, select, all, put} from "redux-saga/effects";
import {EventInfo, StatEvetData, WebSocketEventResponse} from "../../../config/interface/event/eventInterface";
import {IotParam, SensorInfo} from "../../../config/interface/main/mainInterface";

import {EVENT_GRADE} from "../../../config/const/event/eventConst";
import {updateSensorList} from "../../store/server/main/mainServerStore";
import {updateEventList} from "../../store/server/event/eventServerStore";
import {updateActiveEvent} from "../../store/view/event/list/eventListStore";

let ws : WebSocket

function createEventChannel(){

    return eventChannel(emit =>{
        function createWs(){
            console.log("CREATE...",conf.API.API_WS_URL); // 연결 확인

            //subscribe to websocket
            ws = new WebSocket(conf.API.API_WS_URL); // web socket 부여
            ws.onopen = () => {
                console.log("Opening WebSocket.............."); // websocket 연결
            }

            ws.onerror = (error) => {
                console.log("Error......." , error);
            }

            ws.onmessage = (e) => {
                return emit({data:JSON.parse(e.data)}) // messsage 수신
            }

            ws.onclose = (e) => {
                if(e.code === 1005){ //이 경우에는 채널이 닫힌다.
                    console.log("WebSocket Closed.........");
                }else{
                    console.log("Socket is close Unexpectedly. Reconnect will be attempted in a second.", e.reason);
                    setTimeout (() => {
                        createWs()
                    },1000) // 이 경우에는 1초마다 다시 websocket 연결을 시도한다.
                }

                console.log("Close");
            }

        }

        (typeof window !== 'undefined') && createWs()

        return () => {
            console.log("Closing Websocket");
            ws.close();
        }
    })

}


function* initializeWebSocketsChannel() {


    const channel : EventChannel<any> = yield call(createEventChannel);
    while(true){

        const {data} = yield take(channel); // channel 에 있는 데이터를 받아온다.

        const response : WebSocketEventResponse = data;
        const eventList : EventInfo[] = (yield select((state:RootState)=>state.server.event.eventList)) as EventInfo[];
        const sensorList : SensorInfo[] = (yield select((state:RootState)=>state.server.main.sensorList)) as SensorInfo[];


        const newEventList : EventInfo[] = [];

        const newSensorList : SensorInfo[] = [];


        const eventData : StatEvetData = response.StatEvet;
        let sensorId = "";
        eventData.statEvetItem.map((item)=>{
            if (item.key === 'sensorId'){
                sensorId = item.value;
            }
        })

        if(eventData.procSt!=='2'&&eventData.procSt!=='3'&&eventData.procSt!=='4' && eventData.statEvetId.includes('EAS')){


            sensorList.map((sensor)=>{
                if(sensor.streamId === sensorId){
                    let newSensor :SensorInfo = {
                        dvcPkId : sensor.dvcPkId,
                        streamPkId : sensor.streamPkId,
                        streamId : sensor.streamId,
                        dvcNm : sensor.dvcNm,
                        dvcSt : sensor.dvcSt,
                        coordx : sensor.coordx,
                        coordy : sensor.coordy,
                        latest : sensor.latest,
                        latestDtm : sensor.latestDtm,
                        state : setGradeForm(eventData.statEvetId).id,
                        stateNm : setGradeForm(eventData.statEvetId).nm,
                        locate : sensor.locate,
                        updDtm : sensor.updDtm,
                        clientCd : sensor.clientCd
                    }

                    newSensorList.push(newSensor)
                }else{
                    newSensorList.push(sensor);
                }
            })

            yield put(updateSensorList(newSensorList));

            const statEventItemList = eventData.statEvetItem;

            let streamPkId = '' ;
            let dvcPkId = '';
            let sensorId = '';

            statEventItemList.map((item) =>{
                item.key === 'streamPkId' ?
                    streamPkId = item.value :
                    item.key === 'dvcPkId' ?
                        dvcPkId = item.value :
                        sensorId = item.value
            })


            const newEventItem:EventInfo = {
                eventSeq : eventData.uSvcOutbId,
                eventCd : eventData.statEvetId,
                clrDtm : "",
                outbDtm : eventData.statEvetOutbDtm,
                procSt : eventData.procSt,
                procNm : eventData.procSt==="1"? '발생' : '종료',
                place : eventData.outbPosNm,
                znCd : "",
                lat : eventData.outbPos[0].x.toString(),
                lng : eventData.outbPos[0].y.toString(),
                streamPkId : streamPkId,
                sensorId : sensorId,
                dvcPkId: dvcPkId,
                cntn : eventData.statEvetActnCntn,
            }


            yield put(updateActiveEvent(newEventItem));

            newEventList.push(newEventItem);
            eventList.map((event,index)=>{
                if (index<49){
                    newEventList.push(event);
                }
            })

            yield put(updateEventList(newEventList));




        }

    }

}

 const setGradeForm = (statEvetId:string) => {

    let grade = statEvetId.substring(9,12);

    if (grade === EVENT_GRADE.caution){
        return { id : 'caution' , nm: '주의'}
    }else if(grade === EVENT_GRADE.alert){
        return { id : 'alert' , nm: '경'}
    }else{
        return { id : 'serious' , nm: '위험'}

    }
 }

const WsSaga = function*(){
    yield all([initializeWebSocketsChannel()])

}

export default WsSaga;