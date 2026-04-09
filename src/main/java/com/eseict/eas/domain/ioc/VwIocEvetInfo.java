package com.eseict.eas.domain.ioc;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity(name="VwIocEvetInfo")
@Table(name = "VW_IOC_EVET_INFO", schema = "rino_ioc")
public class VwIocEvetInfo implements Serializable {

    @Column(name="MSG_TYP_CD", length = 3)
    private String msgTypCd;

    @Column(name="ZN_CD", length=3)
    private String znCd;

    @Column(name = "ZN_NM", length=50)
    private String znNm;

    @Column(name= "SVC_THEME_CD", length = 3)
    private String svcThemeCd;

    @Column(name = "SVC_THEME_NM", length = 50)
    private String getSvcThemeNm;

    @Column(name = "UNIT_SVC_CD", length = 3)
    private String uniSvcCd;

    @Column(name = "UNIT_SVC_NM", length = 50)
    private String uniSvcNm;

    @Column(name = "EVET_GB_CD",length = 1)
    private String evetGvCd;

    @Column(name = "EVET_CD",length = 2)
    private String evetCd;

    @Id
    @Column(name = "EVET_ID")
    private String evetId;

    @Column(name = "EVET_NM")
    private String evetNM;


    public VwIocEvetInfo(String msgTypCd, String znCd, String znNm, String svcThemeCd, String getSvcThemeNm, String uniSvcCd, String uniSvcNm, String evetGvCd, String evetCd, String evetId, String evetNM) {
        this.msgTypCd = msgTypCd;
        this.znCd = znCd;
        this.znNm = znNm;
        this.svcThemeCd = svcThemeCd;
        this.getSvcThemeNm = getSvcThemeNm;
        this.uniSvcCd = uniSvcCd;
        this.uniSvcNm = uniSvcNm;
        this.evetGvCd = evetGvCd;
        this.evetCd = evetCd;
        this.evetId = evetId;
        this.evetNM = evetNM;
    }

    public VwIocEvetInfo() {
    }

    public String getMsgTypCd() {
        return msgTypCd;
    }

    public void setMsgTypCd(String msgTypCd) {
        this.msgTypCd = msgTypCd;
    }

    public String getZnCd() {
        return znCd;
    }

    public void setZnCd(String znCd) {
        this.znCd = znCd;
    }

    public String getZnNm() {
        return znNm;
    }

    public void setZnNm(String znNm) {
        this.znNm = znNm;
    }

    public String getSvcThemeCd() {
        return svcThemeCd;
    }

    public void setSvcThemeCd(String svcThemeCd) {
        this.svcThemeCd = svcThemeCd;
    }

    public String getGetSvcThemeNm() {
        return getSvcThemeNm;
    }

    public void setGetSvcThemeNm(String getSvcThemeNm) {
        this.getSvcThemeNm = getSvcThemeNm;
    }

    public String getUniSvcCd() {
        return uniSvcCd;
    }

    public void setUniSvcCd(String uniSvcCd) {
        this.uniSvcCd = uniSvcCd;
    }

    public String getUniSvcNm() {
        return uniSvcNm;
    }

    public void setUniSvcNm(String uniSvcNm) {
        this.uniSvcNm = uniSvcNm;
    }

    public String getEvetGvCd() {
        return evetGvCd;
    }

    public void setEvetGvCd(String evetGvCd) {
        this.evetGvCd = evetGvCd;
    }

    public String getEvetCd() {
        return evetCd;
    }

    public void setEvetCd(String evetCd) {
        this.evetCd = evetCd;
    }

    public String getEvetId() {
        return evetId;
    }

    public void setEvetId(String evetId) {
        this.evetId = evetId;
    }

    public String getEvetNM() {
        return evetNM;
    }

    public void setEvetNM(String evetNM) {
        this.evetNM = evetNM;
    }

    @Override
    public String toString() {
        return "vwIocEvetInfo{" +
                "msgTypCd='" + msgTypCd + '\'' +
                ", znCd='" + znCd + '\'' +
                ", znNm='" + znNm + '\'' +
                ", svcThemeCd='" + svcThemeCd + '\'' +
                ", getSvcThemeNm='" + getSvcThemeNm + '\'' +
                ", uniSvcCd='" + uniSvcCd + '\'' +
                ", uniSvcNm='" + uniSvcNm + '\'' +
                ", evetGvCd='" + evetGvCd + '\'' +
                ", evetCd='" + evetCd + '\'' +
                ", evetId='" + evetId + '\'' +
                ", evetNM='" + evetNM + '\'' +
                '}';
    }
}
