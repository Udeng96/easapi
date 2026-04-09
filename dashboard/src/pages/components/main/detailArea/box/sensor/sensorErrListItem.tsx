const SensorErrListItem = (props:{idx:number, nm:string, dtm:string }) => {


    return(
        <>
            <li>
                <ul className="list_item">
                    <li>{props.idx}</li>
                    <li>수위 센서</li>
                    <li>{props.nm}</li>
                    <li>{props.dtm}</li>
                </ul>
            </li>
        </>
    )


}

export default SensorErrListItem;