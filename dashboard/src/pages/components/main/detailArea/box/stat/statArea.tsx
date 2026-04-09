import StatLegend from "./statLegend";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import StatChart from "./statChart";
import {useEffect} from "react";

const StatArea = () => {

    const rawDataList = useSelector((state: RootState) => state.server.main.rawDataList);


    return (
        <>
            <div className="dash_frame time_frame">
                <header className="dash_header">
                    <div className="dash_title_box">
                        <p className="dash_title">시간별 측정 상태</p>
                    </div>
                    <StatLegend/>
                </header>
                <div className="dash_body">
                    {
                        rawDataList.length === 1  ?
                            <div className={"no_chart"}>
                                <div className={"no_chart_content"}>
                                    <div className={"no_data_img"}/>
                                    <div className={"no_data_content"}>수집된 데이터가 없습니다.</div>
                                </div>
                            </div>
                            :
                            <>
                                <div className="axis_hint y_axis">수위<span>(단위: m)</span></div>
                                <div className="chart_in" id="waterLevelLine">
                                    <StatChart/>
                                </div>
                                <div className="axis_hint x_axis">시간<span>(단위: 분)</span></div>
                            </>
                    }

                </div>
            </div>

        </>
    )

}


export default StatArea