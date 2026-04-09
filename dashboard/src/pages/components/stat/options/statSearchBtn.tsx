import {SearchStat, SearchStatId} from "../../../../config/interface/stat/statInterface";
import {useDispatch, useSelector} from "react-redux";
import {updateGetIotStatData} from "../../../store/server/stat/statServerStore";
import * as StatServerStore from "../../../saga/actions/stat/statAction";
import {RootState} from "../../../store/rootStore";
import {useEffect} from "react";
import {updateSearchStatInfo} from "../../../store/view/stat/statStore";

const StatSearchBtn = (props:{searchId: SearchStatId | null,searchStartDate:string, searchEndDate:string}) => {

    const dispatch = useDispatch();
    const activeType = useSelector((state:RootState)=>state.view.stat.statType);
    const searchStatInfo = useSelector((state:RootState)=>state.view.stat.searchStatInfo)

    const handleClickEvent = () => {
        if (props.searchId) {
             const searchData = {
                dvcPkId: props.searchId.dvcPkId,
                streamPkId: props.searchId.streamPkId,
                startDate: props.searchStartDate,
                endDate: props.searchEndDate,
                dayOrTime: activeType
            };
            dispatch(updateSearchStatInfo(searchData))
            dispatch(StatServerStore.actions.requestGetIotData(searchData));
        }
    }

    // useEffect(() => {
    //         console.log("searchStatInfo", searchStatInfo)
    // },[searchStatInfo])

    // 스토어에 검색 값을 저장 해 놓고. 이거를 불러와서 검색을 할 수 있도록 변환 ..
    // 검색 버튼을 눌렀을 때만 값을 가져오게 ? 아 토글을 눌렀을 떄만 스토어 값으로 검색하게 하면 될듯.
    useEffect(() => {
        if (searchStatInfo) {
            const searchData = {
                dvcPkId: searchStatInfo.dvcPkId,
                streamPkId: searchStatInfo.streamPkId,
                startDate: searchStatInfo.startDate,
                endDate: searchStatInfo.endDate,
                dayOrTime: activeType
            };
            dispatch(StatServerStore.actions.requestGetIotData(searchData));
        }
    }, [activeType])

    return(
        <button type="button" className="btn_search" onClick={()=>handleClickEvent()}>검색</button>
    )
}

export default StatSearchBtn