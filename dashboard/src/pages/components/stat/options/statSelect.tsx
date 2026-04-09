import Select from "react-select";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/rootStore";
import {actions} from "../../../saga/actions/stat/statAction";
import {IotDvcStreamId, SearchStatId} from "../../../../config/interface/stat/statInterface";
import {updateSearchStatId} from "../../../store/view/stat/statStore";

export interface SelectOption {
    value:string,
    label:string
}
const StatSelect = () => {
    const dispatch = useDispatch();
    const deviceStreamIdList : IotDvcStreamId | null = useSelector((state : RootState) => state.server.stat.dvcStreamId)

    const defaultSensorOption = deviceStreamIdList && deviceStreamIdList.data.length > 0
        ? {
            value: deviceStreamIdList.data[0].dvcPkId + "_" + deviceStreamIdList.data[0].streamPkId,
            label: deviceStreamIdList.data[0].dvcNm
        }
        : { value: "", label: "" };
    const [selectOption, setSelectOption] = useState<SelectOption>(defaultSensorOption)

    const sensorOptions  = deviceStreamIdList?.data.map(data =>({
        value : data.dvcPkId + "_" + data.streamPkId,
        label : data.dvcNm
    }))




    useEffect(() => {
        const deviceAndStreamId = selectOption.value.split("_")
        const dvcPkId = deviceAndStreamId[0]
        const streamPkId = deviceAndStreamId[1]
        dispatch(updateSearchStatId({dvcPkId, streamPkId}))
    },[selectOption])

    return(
        <div className="statis_row">
            <h2 className="statis_sub_title type_critera"><i></i>통계 조건 설정</h2>
            <Select isSearchable={false} className={"select-ara"}
                    classNamePrefix={"select-area"}
                    defaultMenuIsOpen={false} defaultInputValue={''}
                    defaultValue={selectOption}
                    options={sensorOptions}
                    onChange={(e) => setSelectOption(e!!)}
            />
        </div>
    )

}

export default StatSelect