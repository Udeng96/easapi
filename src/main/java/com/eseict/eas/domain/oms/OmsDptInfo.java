package com.eseict.eas.domain.oms;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "OMS_DPT_INFO", schema = "rino_oms")
public class OmsDptInfo {

    @Id
    @Column(name = "DPT_ID", length = 22)
    private String dptId;

    @Column(name = "DPT_CD",length = 10)
    private String dptCd;

    @Column(name = "DPT_DESC", length = 500)
    private String dptDesc;

    @Column(name = "DPT_NM",length = 30)
    private String dptNm;

    @Column(name = "ORGN_ID",length=22)
    private String orgnId;


    public OmsDptInfo(String dptId, String dptCd, String dptDesc, String dptNm, String orgnId) {
        this.dptId = dptId;
        this.dptCd = dptCd;
        this.dptDesc = dptDesc;
        this.dptNm = dptNm;
        this.orgnId = orgnId;
    }

    public OmsDptInfo() {
    }

    public String getDptId() {
        return dptId;
    }

    public void setDptId(String dptId) {
        this.dptId = dptId;
    }

    public String getDptCd() {
        return dptCd;
    }

    public void setDptCd(String dptCd) {
        this.dptCd = dptCd;
    }

    public String getDptDesc() {
        return dptDesc;
    }

    public void setDptDesc(String dptDesc) {
        this.dptDesc = dptDesc;
    }

    public String getDptNm() {
        return dptNm;
    }

    public void setDptNm(String dptNm) {
        this.dptNm = dptNm;
    }

    public String getOrgnId() {
        return orgnId;
    }

    public void setOrgnId(String orgnId) {
        this.orgnId = orgnId;
    }

    @Override
    public String toString() {
        return "OmsDptInfo{" +
                "dptId='" + dptId + '\'' +
                ", dptCd='" + dptCd + '\'' +
                ", dptDesc='" + dptDesc + '\'' +
                ", dptNm='" + dptNm + '\'' +
                ", orgnId='" + orgnId + '\'' +
                '}';
    }
}
