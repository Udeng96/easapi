import {useEffect} from "react";

const MsgInfoItem = (props:{title:string, value:string, type?:string}) => {



    return(
        <div className="event_history_box">
            <p className="history_title">{props.title}</p>
            <p className={`history_text ${props.type? `type_${props.type}`: ''}`}>{props.value}</p>
        </div>
    )

}

export default MsgInfoItem