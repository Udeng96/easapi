const Legend = () => {

    return(
        <div className="gis_legend event_legend">
            <p className="event_legend_title">이벤트 발생 센서 발령 기준표</p>
            <div className="event_legend_area">
                {/*<div className="event_legend_box">*/}
                {/*    <div className="event_legend_img type_attention"></div>*/}
                {/*    <p className="event_legend_name">관심</p>*/}
                {/*</div>*/}
                <div className="event_legend_box">
                    <div className="event_legend_img type_attention"></div>
                    <p className="event_legend_name">기본</p>
                </div>
                <div className="event_legend_box">
                    <div className="event_legend_img type_caution"></div>
                    <p className="event_legend_name">주의</p>
                </div>
                <div className="event_legend_box">
                    <div className="event_legend_img type_alert"></div>
                    <p className="event_legend_name">경계</p>
                </div>
                <div className="event_legend_box">
                    <div className="event_legend_img type_serious"></div>
                    <p className="event_legend_name">위험</p>
                </div>
            </div>
        </div>
    )
}

export default Legend