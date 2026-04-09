package com.eseict.eas.dto.event;


import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class EventResult {

    private String eventSeq;
    private String eventCd;
    private String clrDtm; // 해제 일시
    private String outbDtm; // 발생 일시
    private String procSt; // 이벤트 상태
    private String procNm;
    private String place; // 이벤트 장소
    private String znCd; // 지역 코드
    private String lat; // 위도
    private String lng; //경도
    private String sensorId;
    private String streamPkId;
    private String dvcPkId;
    private String cntn;



}

