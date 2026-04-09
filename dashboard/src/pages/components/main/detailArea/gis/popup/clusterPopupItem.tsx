const ClusterPopupItem = (props:{nm:string}) => {

    return(
        <li>
            <p className="cctv_name">{props.nm}</p>
            <button type="button" className="btn_play"></button>
            <div className="tooltip_text">{props.nm}</div>
        </li>
    )


}

export default ClusterPopupItem