import {
    IotDvcStreamId,
    IotDvcStreamIdDataType,
} from "../../../../config/interface/stat/statInterface";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/rootStore";
import {actions} from "../../../saga/actions/stat/statAction";
import {useEffect} from "react";

const StatExcelDownloadBtn = () => {

    const dispatch = useDispatch();
    const deviceStreamIdList : IotDvcStreamId | null = useSelector((state : RootState) => state.server.stat.dvcStreamId)


    const iotStatExcelDownload: IotDvcStreamIdDataType[] | null = deviceStreamIdList?.data.map((data) => ({
        dvcNm: data.dvcNm,
        dvcPkId: data.dvcPkId,
        streamPkId: data.streamPkId,
    })) ?? null;

    // useEffect(() => {
    //     console.log("iotStatExcelDownload", iotStatExcelDownload as IotDvcStreamIdDataType[])
    // },[deviceStreamIdList])

    const onclickHandler = () => {
            dispatch(actions.requestGetIotExcelDownload(iotStatExcelDownload as IotDvcStreamIdDataType[]));
    }

    return(
        <button type="button" className="btn_download" onClick={()=>onclickHandler()}>다운로드</button>
    )
}

export default StatExcelDownloadBtn