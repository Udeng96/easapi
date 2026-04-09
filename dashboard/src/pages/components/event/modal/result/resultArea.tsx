import OptionArea from "./option/optionArea";
import EventModalList from "./list/eventModalList";
import EventModalDetail from "./detail/eventModalDetail";

const ResultArea = () => {

    return(
        <div className="past_evt_history_area">
            <OptionArea/>
            <div className="past_evt_info_wrap">
                {/*pastEvtInfo*/}
                <EventModalList/>
                {/*evtDetailInfo*/}
                <EventModalDetail/>
            </div>
        </div>
    )

}

export default ResultArea