const EventModalDetailItem = (props:{title:string, value:string, isWide:boolean}) => {

    return(
        <div className="detail_info_block">
            <p className="detail_info_title">{props.title}</p>
            <div className={`detail_info_box ${props.isWide&&'wide_size'}`}>
                <div className="detail_info_value">{props.value}</div>
            </div>
        </div>
    )

}

export default EventModalDetailItem

EventModalDetailItem.defaultProps ={
    isWide:false
}