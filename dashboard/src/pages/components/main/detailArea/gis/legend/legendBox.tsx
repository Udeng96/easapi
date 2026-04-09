const LegendBox = (props:{id:string, nm: string, extra?:string}) => {

    return(

        <div className="standard_legend_box">
            <div className={`standard_legend_img type_${props.id}`}></div>
            <p className={`standard_legend_name`}>{props.nm}</p>
        </div>
    )

}

export default LegendBox