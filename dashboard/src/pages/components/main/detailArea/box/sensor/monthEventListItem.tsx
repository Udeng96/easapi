const MonthEventListItem = (props:{idx:number, nm:string, grade:string, dtm:string, clrDtm?:string, state:number}) => {

    return(

        <li>
            <ul className="list_item">
                <li>{props.idx}</li>
                <li>{props.nm}</li>
                <li>{props.grade}</li>
                <li>{props.dtm}</li>
                <li>{props.clrDtm? props.clrDtm : '-'}</li>
                <li>
                    <p className={`event_state_text state_${props.state===1? 'occur':'release'}`}>{props.state===1? '발생' : '해제'}</p>
                </li>
            </ul>
        </li>

    )

}

export default MonthEventListItem;