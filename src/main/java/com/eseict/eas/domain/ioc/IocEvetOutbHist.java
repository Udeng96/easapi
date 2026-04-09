package com.eseict.eas.domain.ioc;

import org.hibernate.annotations.Formula;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity(name = "IocEvetOutbHist")
@Table(name = "IOC_STAT_EVET_OUTB_HIST", schema = "rino_ioc")
public class IocEvetOutbHist implements Serializable {

    @Id
    @Column(name = "STAT_EVET_OUTB_SEQN", length = 24) // 이벤트 id
    private String statEvetOubSeqn;

    @Column(name = "CLR_DTM", length=17) // 해제 날짜
    private String clrDtm;

    @Column(name = "CLS_DTM", length = 17) // 종료 날짜
    private String clsDtm;

    @Column(name = "CLS_TYP", length = 1) //종료 타입
    private String clsTyp;

    @Column(name = "EVET_GB_CD", length = 1) // 이벤트 코드 'E'
    private String evetGbCd;

    @Column(name = "OUTB_DTM", length = 17) // 발생 날짜
    private String outbDtm;

    @Column(name="OUTB_MAIN_GB", length = 1) // 이벤트 발생 주체
    private String outbMainGb;

    @Column(name="OUTB_PLAC", length = 150) // 발생 장소
    private String outbPlac;

    @Column(name="OUTB_SCOP_RADS", length = 50) // ??
    private String outbScopRads;

    @Column(name="PROC_ST", length = 1) // 이벤트 등급 (1 부터 5)
    private String procSt;

    @Column(name="STAT_EVET_CD", length = 2) // 상태 이벤트 코드
    private String statEvetCd;

    @Column(name="STAT_EVET_CNTN",length = 200) // 이벤트 내용
    private String statEvetCntn;

    @Column(name = "STAT_EVET_GD_CD", length = 2) // 10이...발생이고 99가 종료였나..?
    private String statEvetGdCd;

    @Column(name = "SVC_THEME_CD", length = 3) // 이벤트 나입
    private String svcThemeCd;

    @Column(name="U_SVC_OUTB_ID", length = 24)
    private String uSvcOutbId;

    @Column(name = "UNIT_SVC_CD",length = 3) // 유닛 코드
    private String unitSvcCd;

    @Column(name = "ZN_CD", length = 3) // 지역 코드
    private String znCd;


    @Formula("( SELECT P.X_CRDNT FROM rino_ioc.IOC_STAT_EVET_POS_HIST P WHERE P.STAT_EVET_OUTB_SEQN = STAT_EVET_OUTB_SEQN )")
    private String x;

    @Formula("( SELECT P.Y_CRDNT FROM rino_ioc.IOC_STAT_EVET_POS_HIST P WHERE P.STAT_EVET_OUTB_SEQN = STAT_EVET_OUTB_SEQN )")
    private String y;

    @Formula("( SELECT T.ITEM_VAL FROM rino_ioc.IOC_STAT_EVET_ITEM_HIST T WHERE T.STAT_EVET_OUTB_SEQN = STAT_EVET_OUTB_SEQN AND T.ITEM_NM = 'sensorId' )")
    private String sensorId;

    @Formula("( SELECT T.ITEM_VAL FROM rino_ioc.IOC_STAT_EVET_ITEM_HIST T WHERE T.STAT_EVET_OUTB_SEQN = STAT_EVET_OUTB_SEQN AND T.ITEM_NM = 'streamPkId' )")
    private String streamPkId;

    @Formula("( SELECT T.ITEM_VAL FROM rino_ioc.IOC_STAT_EVET_ITEM_HIST T WHERE T.STAT_EVET_OUTB_SEQN = STAT_EVET_OUTB_SEQN AND T.ITEM_NM = 'dvcPkId' )")
    private String dvcPkId;


    public IocEvetOutbHist(String statEvetOubSeqn, String clrDtm, String clsDtm, String clsTyp, String evetGbCd, String outbDtm, String outbMainGb, String outbPlac, String outbScopRads, String procSt, String statEvetCd, String statEvetCntn, String statEvetGdCd, String svcThemeCd, String uSvcOutbId, String unitSvcCd, String znCd, String x, String y, String sensorId, String streamPkId, String dvcPkId) {
        this.statEvetOubSeqn = statEvetOubSeqn;
        this.clrDtm = clrDtm;
        this.clsDtm = clsDtm;
        this.clsTyp = clsTyp;
        this.evetGbCd = evetGbCd;
        this.outbDtm = outbDtm;
        this.outbMainGb = outbMainGb;
        this.outbPlac = outbPlac;
        this.outbScopRads = outbScopRads;
        this.procSt = procSt;
        this.statEvetCd = statEvetCd;
        this.statEvetCntn = statEvetCntn;
        this.statEvetGdCd = statEvetGdCd;
        this.svcThemeCd = svcThemeCd;
        this.uSvcOutbId = uSvcOutbId;
        this.unitSvcCd = unitSvcCd;
        this.znCd = znCd;
        this.x = x;
        this.y = y;
        this.sensorId = sensorId;
        this.streamPkId = streamPkId;
        this.dvcPkId = dvcPkId;
    }

    public IocEvetOutbHist() {
    }

    public String getStatEvetOubSeqn() {
        return statEvetOubSeqn;
    }

    public void setStatEvetOubSeqn(String statEvetOubSeqn) {
        this.statEvetOubSeqn = statEvetOubSeqn;
    }

    public String getClrDtm() {
        return clrDtm;
    }

    public void setClrDtm(String clrDtm) {
        this.clrDtm = clrDtm;
    }

    public String getClsDtm() {
        return clsDtm;
    }

    public void setClsDtm(String clsDtm) {
        this.clsDtm = clsDtm;
    }

    public String getClsTyp() {
        return clsTyp;
    }

    public void setClsTyp(String clsTyp) {
        this.clsTyp = clsTyp;
    }

    public String getEvetGbCd() {
        return evetGbCd;
    }

    public void setEvetGbCd(String evetGbCd) {
        this.evetGbCd = evetGbCd;
    }

    public String getOutbDtm() {
        return outbDtm;
    }

    public void setOutbDtm(String outbDtm) {
        this.outbDtm = outbDtm;
    }

    public String getOutbMainGb() {
        return outbMainGb;
    }

    public void setOutbMainGb(String outbMainGb) {
        this.outbMainGb = outbMainGb;
    }

    public String getOutbPlac() {
        return outbPlac;
    }

    public void setOutbPlac(String outbPlac) {
        this.outbPlac = outbPlac;
    }

    public String getOutbScopRads() {
        return outbScopRads;
    }

    public void setOutbScopRads(String outbScopRads) {
        this.outbScopRads = outbScopRads;
    }

    public String getProcSt() {
        return procSt;
    }

    public void setProcSt(String procSt) {
        this.procSt = procSt;
    }

    public String getStatEvetCd() {
        return statEvetCd;
    }

    public void setStatEvetCd(String statEvetCd) {
        this.statEvetCd = statEvetCd;
    }

    public String getStatEvetCntn() {
        return statEvetCntn;
    }

    public void setStatEvetCntn(String statEvetCntn) {
        this.statEvetCntn = statEvetCntn;
    }

    public String getStatEvetGdCd() {
        return statEvetGdCd;
    }

    public void setStatEvetGdCd(String statEvetGdCd) {
        this.statEvetGdCd = statEvetGdCd;
    }

    public String getSvcThemeCd() {
        return svcThemeCd;
    }

    public void setSvcThemeCd(String svcThemeCd) {
        this.svcThemeCd = svcThemeCd;
    }

    public String getuSvcOutbId() {
        return uSvcOutbId;
    }

    public void setuSvcOutbId(String uSvcOutbId) {
        this.uSvcOutbId = uSvcOutbId;
    }

    public String getUnitSvcCd() {
        return unitSvcCd;
    }

    public void setUnitSvcCd(String unitSvcCd) {
        this.unitSvcCd = unitSvcCd;
    }

    public String getZnCd() {
        return znCd;
    }

    public void setZnCd(String znCd) {
        this.znCd = znCd;
    }

    public String getX() {
        return x;
    }

    public void setX(String x) {
        this.x = x;
    }

    public String getY() {
        return y;
    }

    public void setY(String y) {
        this.y = y;
    }

    public String getSensorId() {
        return sensorId;
    }

    public void setSensorId(String sensorId) {
        this.sensorId = sensorId;
    }

    public String getStreamPkId() {
        return streamPkId;
    }

    public void setStreamPkId(String streamPkId) {
        this.streamPkId = streamPkId;
    }

    public String getDvcPkId() {
        return dvcPkId;
    }

    public void setDvcPkId(String dvcPkId) {
        this.dvcPkId = dvcPkId;
    }

    @Override
    public String toString() {
        return "IocEvetOutbHist{" +
                "statEvetOubSeqn='" + statEvetOubSeqn + '\'' +
                ", clrDtm='" + clrDtm + '\'' +
                ", clsDtm='" + clsDtm + '\'' +
                ", clsTyp='" + clsTyp + '\'' +
                ", evetGbCd='" + evetGbCd + '\'' +
                ", outbDtm='" + outbDtm + '\'' +
                ", outbMainGb='" + outbMainGb + '\'' +
                ", outbPlac='" + outbPlac + '\'' +
                ", outbScopRads='" + outbScopRads + '\'' +
                ", procSt='" + procSt + '\'' +
                ", statEvetCd='" + statEvetCd + '\'' +
                ", statEvetCntn='" + statEvetCntn + '\'' +
                ", statEvetGdCd='" + statEvetGdCd + '\'' +
                ", svcThemeCd='" + svcThemeCd + '\'' +
                ", uSvcOutbId='" + uSvcOutbId + '\'' +
                ", unitSvcCd='" + unitSvcCd + '\'' +
                ", znCd='" + znCd + '\'' +
                ", x='" + x + '\'' +
                ", y='" + y + '\'' +
                ", sensorId='" + sensorId + '\'' +
                ", streamPkId='" + streamPkId + '\'' +
                ", dvcPkId='" + dvcPkId + '\'' +
                '}';
    }
}
