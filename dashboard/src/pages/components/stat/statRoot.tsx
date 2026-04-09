
import StatSelect from "./options/statSelect";
import StatDtm from "./options/statDtm";
import GraphArea from "./graph/graphArea";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../saga/actions/stat/statAction";
import {IotDvcStreamId, SearchStat} from "../../../config/interface/stat/statInterface";
import {RootState} from "../../store/rootStore";
import {useEffect, useState} from "react";
import moment from "moment";
import StatExcelDownloadBtn from "./options/statExcelDownloadBtn";
import {updateSearchStatInfo} from "../../store/view/stat/statStore";


const StatRoot = () => {

    const [startDtm,setStartDtm] = useState(moment().subtract(1, 'weeks'));
    const [endDtm,setEndDtm] = useState(moment());
    const deviceStreamIdList : IotDvcStreamId | null = useSelector((state : RootState) => state.server.stat.dvcStreamId)

    const activeType = useSelector((state:RootState)=>state.view.stat.statType);
    const formattedStartDate = moment(startDtm).format('yyyyMMDD');
    const formattedEndDate = moment(endDtm).format('yyyyMMDD');

    const searchData: SearchStat = {
        dvcPkId : deviceStreamIdList?.data[0].dvcPkId,
        streamPkId : deviceStreamIdList?.data[0].streamPkId,
        startDate : formattedStartDate,
        endDate : formattedEndDate,
        dayOrTime: activeType
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateSearchStatInfo(searchData))
        dispatch(actions.requestGetIotData(searchData))
    },[])

    return(
        <div className="statis_container">
            {/*containerHeader*/}
            <header className="container_header">
                <h1 className="statis_main_title">통계정보</h1>
                {/*<button type="button" className="btn_download">다운로드</button>*/}
                <StatExcelDownloadBtn/>
            </header>
            {/*containerBody*/}
            <div className="container_body">
                <StatSelect/>
                <StatDtm/>
                {/*hourlyGraphArea*/}
                <GraphArea/>
            </div>
        </div>

    )

}

export default StatRoot