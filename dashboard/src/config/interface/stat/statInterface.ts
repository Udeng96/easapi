export interface IotDvcStreamId{
    code : string,
    message : string,
    count : number,
    data : IotDvcStreamIdDataType[]
}

export interface IotDvcStreamIdDataType{
    dvcNm : string,
    dvcPkId : string,
    streamPkId : string
}

export interface SearchStat {
    dvcPkId? : string,
    streamPkId? : string,
    startDate : string,
    endDate : string,
    dayOrTime : string
}

export interface SearchStatId {
    dvcPkId: string,
    streamPkId: string,
}

// export interface IotResponseData {
//     responseCode : string,
//     responseMessage : string,
//     count : number
//     data : IotResponseMeasureData[]
// }

export interface IotResponseMeasureData {
    date : string,
    count : number
}