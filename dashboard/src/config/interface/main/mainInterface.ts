export interface WeatherResponse {
    code : string,
    count : number,
    message : string,
    data : WeatherInfo[],
}

export interface WeatherInfo {
    pop: number, // 강수 확률
    pty : number, // 강수 형태
    ptyName : string, // 강수형태코드값 --> 없음(0), 비(1), 비/ 눈(2), 눈(3), 소나기(4), 빗방울(5), 빗방울/눈날림(6), 눈날림(7) 여기서 비/눈은 비와 눈이 섞여 오는 것을 의미 (진눈개비)
    sky : number, //
    skyName : string,
    tmp : number, // 1시간 온도
    wsd : number, // 풍속
    wcf : number, // 체감 온도
    forecastDate : string, // 날짜
    forecastTime : number, // 시간
}

export interface WarnInfoResponse {
    code : string,
    count : number,
    message : string,
    data : WarnInfo[]
}

export interface WarnInfo {
    title : string,
    fromDate : String,
}

export interface SensorResponse{
    code : string,
    count : number,
    message : string,
    data : SensorInfo[]
}

export interface SensorInfo {

    dvcPkId : string,
    streamPkId : string,
    streamId : string,
    dvcNm : string,
    dvcSt :string,
    coordx : string,
    coordy : string ,
    latest : number,
    latestDtm : string,

    state: string,

    stateNm : string,
    locate : string,
    updDtm : string,
    clientCd : string,

}

export interface IotParam {

    dvcPkId :string,
    streamPkId : string,
    startDtm : string,
    endDtm : string,

}

export interface IotRawResponse{
    code : string,
    message : string,
    count : number,
    data : IotRawData[],
}

export interface IotRawData{
    date : string,
    count : number,
}

export interface IotStandardData{
    streamId : string,
    caution : number,
    alert : number,
    serious : number,
}

export interface SensorEventParameter{

    type:string,
    param : SensorEventParam
}

export interface SensorEventParam{
    sensorId:string,
    startDtm : string,
    endDtm : string
}