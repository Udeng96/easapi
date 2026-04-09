import Pagination from "./pagination";
import EventModalItem from "./eventModalItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {useEffect, useState} from "react";

const EventModalList = () => {

    const eventModal = useSelector((state: RootState) => state.server.event.modalEventList);
    const activePage = useSelector((state: RootState) => state.view.event.list.activePage);

    const [allPage, setAllPage] = useState<number>(1);

    useEffect(()=>{

        eventModal &&
            setAllPage(eventModal.totalPage);

    },[eventModal])
    return (
        <div className="past_evt_info">
            <ul className="search_list_head">
                <li>NO.</li>
                <li>이벤트</li>
                <li>등급</li>
                <li>발령일시</li>
                <li>해제일시</li>
                <li>상태</li>
            </ul>

            <ul className="search_list_body">
                {

                    eventModal &&
                    eventModal.eventList.length > 0 ?
                        eventModal.eventList.map((event, index) => (
                            index < 10 && <EventModalItem event={event} index={ (activePage-1)*10 + index+1}/>
                        ))
                        // <></>

                        :

                        <div className="no_result_area">
                            <p className="no_result_message">검색 조건의 발생한 재난 이벤트가 없습니다.</p>
                        </div>

                }
            </ul>


            {/*eventLoadErrorArea*/}
            {/*<div className="event_load_error_area">*/}
            {/*    <button type="button" className="btn_reload"></button>*/}
            {/*    <p className="event_load_error_message">이벤트 로드에 문제가 발생하였습니다.<br/><span>Reload 또는 재검색을 시도해주세요.</span></p>*/}
            {/*</div>*/}
            {/*pagination*/}
            <Pagination pageCnt={8} totalPage={allPage}/>
        </div>
    )

}

export default EventModalList