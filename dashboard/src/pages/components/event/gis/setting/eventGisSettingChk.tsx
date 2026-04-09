import EventGisChkItem from "./eventGisChkItem";

const EventGisSettingChk = (props:{isOpen:boolean}) => {

    return(
        <div className={`select_map_icon_area ${props.isOpen && 'active'}`}>
            <div className="check_box_area">
                <EventGisChkItem id={"cctv"} nm={"CCTV"}/>
                <EventGisChkItem id={"event"} nm={"이벤트"}/>
            </div>
        </div>

    )

}

export default EventGisSettingChk