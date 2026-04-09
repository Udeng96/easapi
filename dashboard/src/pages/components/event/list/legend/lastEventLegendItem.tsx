import {EVENT_GRADE} from "../../../../../config/const/event/eventConst";

const LastEventLegendItem = (props:{id:string, nm:string, startScope:number|null, endScope:number|null}) => {

    return(
        <div className="standard_box">
            <div className={`standard_img type_${props.id}`}></div>
            <div className="standard_text">
                <p className="standard_name">{props.nm}</p>
                <p className="standard_num">{`${props.startScope} ~ ${props.id==='serious' ? '' : props.endScope}`}</p>
            </div>
        </div>
    )

}

export default LastEventLegendItem;