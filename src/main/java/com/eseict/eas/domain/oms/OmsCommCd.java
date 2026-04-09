package com.eseict.eas.domain.oms;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="OMS_COMM_CD_INFO", schema = "oms")
public class OmsCommCd {

    @Id
    @Column(name = "CD_ID", length = 24)
    private String cdId;

    @Column(name = "CD", length = 100)
    private String cd;

    @Column(name = "CD_DESC", length = 400)
    private String cdDesc;

    @Column(name = "CD_NM", length = 50)
    private String cdNm;

    @Column(name="CRE_DTM",length = 17)
    private String CreDtm;

    @Column(name="CRE_NM",length = 50)
    private String CreNm;

    @Column(name="GRUP_CD",length = 100)
    private String GrupCd;

    @Column(name="GRUP_YN",length = 1)
    private String GrupYn;

    @Column(name="SORT")
    private Integer sort;

    @Column(name = "UPD_DTM", length = 17)
    private String updDtm;

    @Column(name = "UPD_NM", length = 50)
    private String updNm;

    @Column(name = "UPD_YN", length = 1)
    private String updYn;


    public OmsCommCd(String cdId, String cd, String cdDesc, String cdNm, String creDtm, String creNm, String grupCd, String grupYn, Integer sort, String updDtm, String updNm, String updYn) {
        this.cdId = cdId;
        this.cd = cd;
        this.cdDesc = cdDesc;
        this.cdNm = cdNm;
        CreDtm = creDtm;
        CreNm = creNm;
        GrupCd = grupCd;
        GrupYn = grupYn;
        this.sort = sort;
        this.updDtm = updDtm;
        this.updNm = updNm;
        this.updYn = updYn;
    }

    public OmsCommCd() {

    }

    public String getCdId() {
        return cdId;
    }

    public void setCdId(String cdId) {
        this.cdId = cdId;
    }

    public String getCd() {
        return cd;
    }

    public void setCd(String cd) {
        this.cd = cd;
    }

    public String getCdDesc() {
        return cdDesc;
    }

    public void setCdDesc(String cdDesc) {
        this.cdDesc = cdDesc;
    }

    public String getCdNm() {
        return cdNm;
    }

    public void setCdNm(String cdNm) {
        this.cdNm = cdNm;
    }

    public String getCreDtm() {
        return CreDtm;
    }

    public void setCreDtm(String creDtm) {
        CreDtm = creDtm;
    }

    public String getCreNm() {
        return CreNm;
    }

    public void setCreNm(String creNm) {
        CreNm = creNm;
    }

    public String getGrupCd() {
        return GrupCd;
    }

    public void setGrupCd(String grupCd) {
        GrupCd = grupCd;
    }

    public String getGrupYn() {
        return GrupYn;
    }

    public void setGrupYn(String grupYn) {
        GrupYn = grupYn;
    }

    public Integer getSort() {
        return sort;
    }

    public void setSort(Integer sort) {
        this.sort = sort;
    }

    public String getUpdDtm() {
        return updDtm;
    }

    public void setUpdDtm(String updDtm) {
        this.updDtm = updDtm;
    }

    public String getUpdNm() {
        return updNm;
    }

    public void setUpdNm(String updNm) {
        this.updNm = updNm;
    }

    public String getUpdYn() {
        return updYn;
    }

    public void setUpdYn(String updYn) {
        this.updYn = updYn;
    }

    @Override
    public String toString() {
        return "OmsData{" +
                "cdId='" + cdId + '\'' +
                ", cd='" + cd + '\'' +
                ", cdDesc='" + cdDesc + '\'' +
                ", cdNm='" + cdNm + '\'' +
                ", CreDtm='" + CreDtm + '\'' +
                ", CreNm='" + CreNm + '\'' +
                ", GrupCd='" + GrupCd + '\'' +
                ", GrupYn='" + GrupYn + '\'' +
                ", sort=" + sort +
                ", updDtm='" + updDtm + '\'' +
                ", updNm='" + updNm + '\'' +
                ", updYn='" + updYn + '\'' +
                '}';
    }
}
