package com.eseict.eas.domain.oms;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "oms_grup_info", schema = "rino_oms")
public class OmsGrupInfo {

    @Id
    @Column(name = "GRUP_ID", length = 22)
    private String grupId;

    @Column(name = "GRUP_CD",length = 10)
    private String grupCd;

    @Column(name = "GRUP_DESC",length = 500)
    private String grupDesc;

    @Column(name = "GRUP_NM",length = 30)
    private String grupNm;

    public OmsGrupInfo(String grupId, String grupCd, String grupDesc, String grupNm) {
        this.grupId = grupId;
        this.grupCd = grupCd;
        this.grupDesc = grupDesc;
        this.grupNm = grupNm;
    }

    public OmsGrupInfo() {
    }

    public String getGrupId() {
        return grupId;
    }

    public void setGrupId(String grupId) {
        this.grupId = grupId;
    }

    public String getGrupCd() {
        return grupCd;
    }

    public void setGrupCd(String grupCd) {
        this.grupCd = grupCd;
    }

    public String getGrupDesc() {
        return grupDesc;
    }

    public void setGrupDesc(String grupDesc) {
        this.grupDesc = grupDesc;
    }

    public String getGrupNm() {
        return grupNm;
    }

    public void setGrupNm(String grupNm) {
        this.grupNm = grupNm;
    }

    @Override
    public String toString() {
        return "OmsGrupInfo{" +
                "grupId='" + grupId + '\'' +
                ", grupCd='" + grupCd + '\'' +
                ", grupDesc='" + grupDesc + '\'' +
                ", grupNm='" + grupNm + '\'' +
                '}';
    }
}
