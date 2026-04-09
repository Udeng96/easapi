import TimeStatChart from "./timeStatChart";

const TimeStatBox = () => {

    return(
        <div className="event_sensor_frame">
            <p className="event_main_title type_hourtime_chart">시간별 측정 상태</p>
            <div className="legend_area">
                <ul className="legend_state_list">
                    <li>주의</li>
                    <li>경계</li>
                    <li>위험</li>
                </ul>
            </div>
            {/*chartInsert*/}
            <div className="chart_in" id="waterLevelLine">
                <TimeStatChart/>
            </div>
            <div className="axis_hint y_axis">수위<span>(단위: m)</span></div>
            <div className="axis_hint x_axis">시간<span>(단위: 분)</span></div>
        </div>
    )

}

export default TimeStatBox