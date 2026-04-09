package com.eseict.eas.dto.iot.device;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class IotDeviceResult {

    String dvcPkId; // 디바이스 아이디
    String streamPkId; // 스트림 아이디
    String streamId; // 센서 아이디
    String dvcNm; // 디바이스 이름
    String dvcSt; // 디바이스 상태
    String coordx; // x좌표 (경도)
    String coordy; // y좌표 (위도)
    Double latest; // 최근 측청 수치
    String latestDtm; // 측정 기준
    String state; // 일반, 주의, 경계, 위험
    String stateNm; // normal, caution, alert, serious
    String locate;
    String updDtm;
    String clientCd;


    public IotDeviceResult(String dvcPkId, String streamPkId, String streamId, String dvcNm, String dvcSt, String coordx, String coordy, Double latest, String latestDtm, String state, String stateNm, String locate, String updDtm, String clientCd) {
        this.dvcPkId = dvcPkId;
        this.streamPkId = streamPkId;
        this.streamId = streamId;
        this.dvcNm = dvcNm;
        this.dvcSt = dvcSt;
        this.coordx = coordx;
        this.coordy = coordy;
        this.latest = latest;
        this.latestDtm = latestDtm;
        this.state = state;
        this.stateNm = stateNm;
        this.locate = locate;
        this.updDtm = updDtm;
        this.clientCd = clientCd;
    }

    public IotDeviceResult() {
    }
}
