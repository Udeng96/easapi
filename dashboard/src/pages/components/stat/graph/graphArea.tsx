import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/rootStore";
import {useEffect, useState} from "react";
import {STATTYPE} from "../../../../config/const/stat/statConst";
import {updateStatType} from "../../../store/view/stat/statStore";
import GraphTimeChart from "./graphTimeChart";

const GraphArea = () => {

    const dispatch = useDispatch();
    const statType = useSelector((state:RootState)=>state.view.stat.statType);
    const [title, setTitle] = useState<string>(statType);

    const iotStatData = useSelector((state: RootState) => state.server.stat.iotStatData);

    useEffect(()=>{

        statType === STATTYPE.time ? setTitle('시간별 그래프') : setTitle('일별 그래프')

    },[statType])

    const onClickStatTapBtn = (type:string) => {
        dispatch(updateStatType(type));
    }

    return(
        <div className="hourly_graph_area">
            {/*graphHeader*/}
            <header className="graph_header">
                <p className="graph_title">{title}</p>
                <div className="btn_tab_group">
                    <button type="button" className={`btn_tab ${statType===STATTYPE.time && 'active'}`} onClick={e => onClickStatTapBtn(STATTYPE.time)}>시간별</button>
                    <button type="button" className={`btn_tab ${statType===STATTYPE.date && 'active'}`} onClick={e => onClickStatTapBtn(STATTYPE.date)}>일별</button>
                </div>
            </header>
            {/*graphBody*/}
            <div className="graph_body">
                <div className="chart_frame">

                    {/*<div className="chart_in" id="statisMulti">*/}
                    {/*    <GraphTimeChart/>*/}
                    {/*</div>*/}
                    {/*데이터가 없을 때 */}
                    {/*<div className={"no_chart"}>*/}
                    {/*    <div className={"no_chart_content"}>*/}
                    {/*        <div className={"no_data_img"}/>*/}
                    {/*        <div className={"no_data_content"}>검색 조건에 해당하는 통계정보가 없습니다.<br/>검색 조건을 확인 후 재검색 해주세요.</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {iotStatData && iotStatData.length > 0 ? (
                        <div className="chart_in" id="statisMulti">
                            <GraphTimeChart/>
                        </div>
                    ) : iotStatData ? (
                        <div className={"no_chart"}>
                            <div className={"no_chart_content"}>
                                <div className={"no_data_img"}/>
                                <div className={"no_data_content"}>
                                    검색 조건에 해당하는 통계정보가 없습니다.<br/>
                                    검색 조건을 확인 후 재검색 해주세요.
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={"err_chart"}>
                            <div className={"err_chart_content"}>
                                <div className={"err_data_img"}/>
                                <div className={"err_data_content"}>
                                    <p className={"reload_btn"}>reload</p>
                                    <p>검색 조건을 확인 후 재검색 해주세요.</p>
                                </div>
                            </div>
                        </div>
                    )}
                {/*    /!*chartInsert*!/*/}
                {/*    <div className="chart_in" id="statisMulti">*/}
                {/*        <GraphTimeChart/>*/}
                {/*    </div>*/}
                </div>
            </div>
        </div>
    )

}
export default GraphArea