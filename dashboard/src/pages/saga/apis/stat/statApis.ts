import {xhr} from "../xhr";
import conf from "../../../../config/config";
import {IotDvcStreamIdDataType, SearchStat} from "../../../../config/interface/stat/statInterface";

export const fetchDeviceByClientId = async() => {
    const {data} = await xhr.get(conf.API.IOT.URL_IOT.DEVICE_LIST)
    return data
}

export const fetchGetIotStatData = async(params : SearchStat) => {


    const {data} = await xhr.get(conf.API.IOT.URL_IOT.STAT_DATA, {
        params: {
            dvcPkId : params.dvcPkId,
            streamPkId : params.streamPkId,
            startDtm : params.startDate,
            endDtm : params.endDate,
            day : params.dayOrTime
        },
    });
    return data
}

export const fetchGetIotExcelDownload = async(params : any) => {
    try {
    const response = await xhr.post(conf.API.IOT.URL_IOT.EXCEL_DOWNLOAD, params.map((param: { dvcPkId: any; streamPkId: any; dvcNm: any }) => ({
        dvcPkId: param.dvcPkId,
        streamPkId: param.streamPkId,
        dvcNm: param.dvcNm,
    })), { responseType: 'blob' });

        if (response.status === 200) {
            const url = window.URL.createObjectURL(new Blob([response.data]));

            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().split('T')[0];
            const filename = `화성 통합플랫폼 수위감시 센서 데이터_${formattedDate}.xlsx`;
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    } catch (error) {
        console.error('Error occurred while downloading the Excel file:', error);
    }

};

