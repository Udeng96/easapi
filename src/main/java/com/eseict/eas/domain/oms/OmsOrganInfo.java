package com.eseict.eas.domain.oms;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "oms_orgn_info", schema = "rino_oms")
public class OmsOrganInfo {


    @Id
    @Column(name="ORGN_ID")
    private String orgnId;

    @Column(name="GRUP_ID")
    private String grupId;

    @Column(name = "ORGN_CD")
    private String orgnCd;

    @Column(name = "ORGN_DESC")
    private String orgnDesc;

    @Column(name = "ORGN_NM")
    private String orgnNm;

    public OmsOrganInfo(String orgnId, String grupId, String orgnCd, String orgnDesc, String orgnNm) {
        this.orgnId = orgnId;
        this.grupId = grupId;
        this.orgnCd = orgnCd;
        this.orgnDesc = orgnDesc;
        this.orgnNm = orgnNm;
    }

    public OmsOrganInfo() {
    }

    public String getOrgnId() {
        return orgnId;
    }

    public void setOrgnId(String orgnId) {
        this.orgnId = orgnId;
    }

    public String getGrupId() {
        return grupId;
    }

    public void setGrupId(String grupId) {
        this.grupId = grupId;
    }

    public String getOrgnCd() {
        return orgnCd;
    }

    public void setOrgnCd(String orgnCd) {
        this.orgnCd = orgnCd;
    }

    public String getOrgnDesc() {
        return orgnDesc;
    }

    public void setOrgnDesc(String orgnDesc) {
        this.orgnDesc = orgnDesc;
    }

    public String getOrgnNm() {
        return orgnNm;
    }

    public void setOrgnNm(String orgnNm) {
        this.orgnNm = orgnNm;
    }

    @Override
    public String toString() {
        return "OmsOrganInfo{" +
                "orgnId='" + orgnId + '\'' +
                ", grupId='" + grupId + '\'' +
                ", orgnCd='" + orgnCd + '\'' +
                ", orgnDesc='" + orgnDesc + '\'' +
                ", orgnNm='" + orgnNm + '\'' +
                '}';
    }
}
