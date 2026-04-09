export interface UpdateResponse{
    code : string,
    message : string,
}

export interface HistoryResponse{
    code : string,
    message : string,
    count : number,
    data : TransferBody[]
}

export interface EventResponse{
    page : number,
    cnt : number,
    total : number,
    totalPage : number,
    eventList : EventInfo[]
}

export interface EventInfo {
    eventSeq: string,
    eventCd: string,
    clrDtm: string,
    outbDtm: string,
    procSt: string,
    procNm: string,
    place: string,
    znCd: string,
    lat: string,
    lng: string,
    sensorId:string,
    streamPkId:string,
    dvcPkId:string,
    cntn: string,
}

export interface ModalParam {

    startDtm : string,
    endDtm : string,
    eventGrade : string,
    rows : number,
    pageNumber : number,

}

export interface ModalStoreParam {
    startDtm : string,
    endDtm : string,
    eventGrade : string[],
    rows : number,
    pageNumber : number,
}

export interface EventParamByDtm{
    startDtm ?: string,
    endDtm ?: string,
    eventGrade ?: string[],
    rows : number,
    pageNumber : number,
}
export interface ZnCd{

    znCd : string,
    znNm : string

}

export interface HistoryResponse{

}

export interface EventTargetResponse{
    code : string,
    message : string,
    count : number,
    data : EventTarget[]
}

export interface EventTarget{

    groupId : string;
    groupNm : string;
    organList : TargetOrgan[]


}

export interface TargetOrgan{

    organId : string;
    organNm : string;
    memberList : TargetMember[]
}

export interface TargetMember{

    userId : string,
    userLoginId : string,
    userName : string,
    cpNo : string,
    email : string | null,
    departmentId  : string,
    departmentName : string,
    encryptKey : string,

}

export interface TreeParent{
    value : string,
    label : string,
    className : string,
    showCheckbox : boolean,
    icon : null,
    children: Subgroup[] ,
}


export interface Subgroup {

    value : string,
    label : string,
    className : string,
    showCheckbox : boolean,
    icon : null,
    children: Leaf[],

}
export interface Leaf{
    value : string,
    label : string,
    className : string,
}

export interface Receiver{
    userId : string,
    userName : string,
    cpNo : string
}

export interface TransferBody{

    transferSeqn : string,
    content : string,
    transferDtm : string,
    transferUserId : string,
    disasterId : string,
    disasterGrade : string,
    transferTarget : string

}

export interface ResponseData{

    code : string,
    message : string,
}

export interface TransferTarget{
    name : string,
    cnt : number,
}

export interface CctvResponse{

    code : string,
    message : string,
    count : number,
    data : CctvData[]

}

export interface CctvData{

    cctvId : string,
    cctvName : string,
    rtspUrl : string,
    x : string,
    y: string

}

export interface WebSocketEventResponse{
    StatEvet: StatEvetData;
}

export interface StatEvetData{
    cpxRelEvetOutbSeqnCnt : string,
    outbMainGb : string,
    outbPos : EvetPos[],
    outbPosCnt : number,
    outbPosNm : string,
    outbScopRads : string,
    procSt : string,
    statEvetActnCntn : string,
    statEvetActnDtm : string,
    statEvetActcMn : string,
    statEvetCntn : string,
    statEvetGdCd : string,
    statEvetId : string,
    statEvetItem : StatEvetItem[]
    statEvetItemCnt : number,
    statEvetNm : string,
    statEvetOutbDtm :string,
    uSvcOutbId : string,
}

export interface EvetPos{
    x: number,
    y: number,
    z: string
}

export interface StatEvetItem{
    value : string,
    key : string,
}

export interface StandardData{
    nm : string,
    id : string,
    max : number,
    min : number
}

export interface EventStateStat{

    caution : number,
    alert : number,
    serious : number,

}