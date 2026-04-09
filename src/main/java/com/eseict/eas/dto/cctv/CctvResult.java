package com.eseict.eas.dto.cctv;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CctvResult {

    String cctvId;
    String cctvName;
    String rtspUrl;
    String x;
    String y;

    public CctvResult(String cctvId, String cctvName, String rtspUrl, String x, String y) {
        this.cctvId = cctvId;
        this.cctvName = cctvName;
        this.rtspUrl = rtspUrl;
        this.x = x;
        this.y = y;
    }

    public CctvResult() {
    }
}
