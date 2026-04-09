import LegendBox from "./legendBox";

const IconLegend = () => {

    return (
        <div className="gis_legend standard_legend">
            <p className="standard_legend_title">표출 기준표</p>
            <div className="standard_legend_area">

                <LegendBox id={"tidelevel"} nm={"수위계"}/>
                <LegendBox id={"cctv_fixed"} nm={"CCTV"}/>
                <LegendBox id={"event"} nm={"이벤트 발생"}/>
                <LegendBox id={"no_signal"} nm={"통신불가"}/>

            </div>
        </div>
    )
}

export default IconLegend;

