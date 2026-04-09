package com.eseict.eas.dto.iot.device;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class IotStreamData {

    String streamPkId;
    String dvcPkId;
    String containersResourceId;
    String containerStructureResourceId;
    String locationPolicyResourceId;
    String locationPolicyStructureResourceId;
    String streamId;
    String streamNm;
    String streamDesc;
    String streamUnit;
    String streamUnitNm;
    String streamCollectionPeriod;
    String streamType;
    String streamTypeNm;
    String creMn;
    String creDtm;
    String updMn;
    String updDtm;
    String aeResourceId;
    String streamDataType;
    String streamDataTypeNm;
    String creDtmView;
    String updDtmView;
    String streamGeometryType;
    String clientCd;
    String siteCd;

    public IotStreamData(String streamPkId, String dvcPkId, String containersResourceId, String containerStructureResourceId, String locationPolicyResourceId, String locationPolicyStructureResourceId, String streamId, String streamNm, String streamDesc, String streamUnit, String streamUnitNm, String streamCollectionPeriod, String streamType, String streamTypeNm, String creMn, String creDtm, String updMn, String updDtm, String aeResourceId, String streamDataType, String streamDataTypeNm, String creDtmView, String updDtmView, String streamGeometryType, String clientCd, String siteCd) {
        this.streamPkId = streamPkId;
        this.dvcPkId = dvcPkId;
        this.containersResourceId = containersResourceId;
        this.containerStructureResourceId = containerStructureResourceId;
        this.locationPolicyResourceId = locationPolicyResourceId;
        this.locationPolicyStructureResourceId = locationPolicyStructureResourceId;
        this.streamId = streamId;
        this.streamNm = streamNm;
        this.streamDesc = streamDesc;
        this.streamUnit = streamUnit;
        this.streamUnitNm = streamUnitNm;
        this.streamCollectionPeriod = streamCollectionPeriod;
        this.streamType = streamType;
        this.streamTypeNm = streamTypeNm;
        this.creMn = creMn;
        this.creDtm = creDtm;
        this.updMn = updMn;
        this.updDtm = updDtm;
        this.aeResourceId = aeResourceId;
        this.streamDataType = streamDataType;
        this.streamDataTypeNm = streamDataTypeNm;
        this.creDtmView = creDtmView;
        this.updDtmView = updDtmView;
        this.streamGeometryType = streamGeometryType;
        this.clientCd = clientCd;
        this.siteCd = siteCd;
    }

    public IotStreamData() {
    }
}
