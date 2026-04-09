package com.eseict.eas.dto.iot.device;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class IotClientData {

    String clientCd;
    String clientNm;
    String clientInfo;
    String siteCd;
    String siteNm;
    String siteInfo;
    String clientDisplayNm;
    String siteDisplayNm;


    public IotClientData(String clientCd, String clientNm, String clientInfo, String siteCd, String siteNm, String siteInfo, String clientDisplayNm, String siteDisplayNm) {
        this.clientCd = clientCd;
        this.clientNm = clientNm;
        this.clientInfo = clientInfo;
        this.siteCd = siteCd;
        this.siteNm = siteNm;
        this.siteInfo = siteInfo;
        this.clientDisplayNm = clientDisplayNm;
        this.siteDisplayNm = siteDisplayNm;
    }


    public IotClientData() {
    }
}
