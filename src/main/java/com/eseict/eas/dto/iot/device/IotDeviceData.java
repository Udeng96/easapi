package com.eseict.eas.dto.iot.device;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@ToString
@Getter
@Setter
public class IotDeviceData {
    String dvcPkId;
    String dvcId;
    String nodeResourceId;
    String deviceInfoResourceId;
    String aeResourceId;
    String acpResourceId;
    String dvcNm;
    String dvcSt;
    String desc;
    String dvcType;
    String dvcTypeNm;
    String manu;
    String dvcUseYn;
    String modelNm;
    String modelId;
    String ptclType;
    String coordx;
    String coordy;
    String locate;
    String locateDetail;
    String aeId;
    String serialNm;
    String endPointUri;
    String securityEndPointUri;
    String creMn;
    String creDtm;
    String updDtm;
    String clientCd;
    String siteCd;
    String deviceReceivedId;
    String setupDeviceId;
    IotClientData clientSiteView;
    List<IotStreamData> streamInfos;
    List<String> dvcGroupMappInfos;

    public IotDeviceData(String dvcPkId, String dvcId, String nodeResourceId, String deviceInfoResourceId, String aeResourceId, String acpResourceId, String dvcNm, String dvcSt, String desc, String dvcType, String dvcTypeNm, String manu, String dvcUseYn, String modelNm, String modelId, String ptclType, String coordx, String coordy, String locate, String locateDetail, String aeId, String serialNm, String endPointUri, String securityEndPointUri, String creMn, String creDtm, String updDtm, String clientCd, String siteCd, String deviceReceivedId, String setupDeviceId, IotClientData clientSiteView, List<IotStreamData> streamInfos, List<String> dvcGroupMappInfos) {
        this.dvcPkId = dvcPkId;
        this.dvcId = dvcId;
        this.nodeResourceId = nodeResourceId;
        this.deviceInfoResourceId = deviceInfoResourceId;
        this.aeResourceId = aeResourceId;
        this.acpResourceId = acpResourceId;
        this.dvcNm = dvcNm;
        this.dvcSt = dvcSt;
        this.desc = desc;
        this.dvcType = dvcType;
        this.dvcTypeNm = dvcTypeNm;
        this.manu = manu;
        this.dvcUseYn = dvcUseYn;
        this.modelNm = modelNm;
        this.modelId = modelId;
        this.ptclType = ptclType;
        this.coordy = coordy;
        this.locate = locate;
        this.locateDetail = locateDetail;
        this.aeId = aeId;
        this.serialNm = serialNm;
        this.endPointUri = endPointUri;
        this.securityEndPointUri = securityEndPointUri;
        this.creMn = creMn;
        this.creDtm = creDtm;
        this.updDtm = updDtm;
        this.clientCd = clientCd;
        this.siteCd = siteCd;
        this.deviceReceivedId = deviceReceivedId;
        this.setupDeviceId = setupDeviceId;
        this.clientSiteView = clientSiteView;
        this.streamInfos = streamInfos;
        this.dvcGroupMappInfos = dvcGroupMappInfos;
    }

    public IotDeviceData() {
    }


}
