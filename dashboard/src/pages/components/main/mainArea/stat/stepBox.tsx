const StepBox = (props:{id:string, title:string, cnt:number}) => {

    return(
        <div className={`step__box type_${props.id}`}>
            <i></i>
            <div className="step__box_text">
                <p className="category">{props.title}</p>
                <p className="count">{props.cnt.toLocaleString('ko-KR')}<span>건</span></p>
            </div>
        </div>
    )

}

export default StepBox