package com.eseict.eas.domain.dw;


import com.eseict.eas.config.EasConstants;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name="EVENTCONF_INFO",schema = EasConstants.DB_SCHEMA.H_DW)
public class EventConfInfo implements Serializable {

    @Column(name = "SEQ")
    private String seq;

    @Column(name = "EVENT_DATE")
    private  String eventDate;

    @Column(name = "EVENT_TYPE")
    private Integer eventType;

    @Id
    @Column(name = "EQP_CODE")
    private String eqpCode;

    @Column(name = "EVENT_LEVEL")
    private Integer eventLevel;

    @Column(name = "EVENT_VALUE")
    private Float eventValue;

    @Column(name = "LEVEL1_ON")
    private Float level1On;

    @Column(name = "LEVEL1_OFF")
    private Float level1Off;

    @Column(name = "LEVEL2_ON")
    private Float level2On;

    @Column(name = "LEVEL2_OFF")
    private Float level2Off;

    @Column(name = "LEVEL3_ON")
    private Float level3On;

    @Column(name = "LEVEL3_OFF")
    private Float level3Off;

    @Column(name = "LEVEL4_ON")
    private Float level4On;

    @Column(name = "LEVEL4_OFF")
    private Float level4Off;

    @Column(name = "LEVEL5_ON")
    private Float level5On;

    @Column(name = "LEVEL5_OFF")
    private Float level5Off;

    public EventConfInfo(String seq, String eventDate, Integer eventType, String eqpCode, Integer eventLevel, Float eventValue, Float level1On, Float level1Off, Float level2On, Float level2Off, Float level3On, Float level3Off, Float level4On, Float level4Off, Float level5On, Float level5Off) {
        this.seq = seq;
        this.eventDate = eventDate;
        this.eventType = eventType;
        this.eqpCode = eqpCode;
        this.eventLevel = eventLevel;
        this.eventValue = eventValue;
        this.level1On = level1On;
        this.level1Off = level1Off;
        this.level2On = level2On;
        this.level2Off = level2Off;
        this.level3On = level3On;
        this.level3Off = level3Off;
        this.level4On = level4On;
        this.level4Off = level4Off;
        this.level5On = level5On;
        this.level5Off = level5Off;
    }

    public EventConfInfo() {
    }

    public String getSeq() {
        return seq;
    }

    public void setSeq(String seq) {
        this.seq = seq;
    }

    public String getEventDate() {
        return eventDate;
    }

    public void setEventDate(String eventDate) {
        this.eventDate = eventDate;
    }

    public Integer getEventType() {
        return eventType;
    }

    public void setEventType(Integer eventType) {
        this.eventType = eventType;
    }

    public String getEqpCode() {
        return eqpCode;
    }

    public void setEqpCode(String eqpCode) {
        this.eqpCode = eqpCode;
    }

    public Integer getEventLevel() {
        return eventLevel;
    }

    public void setEventLevel(Integer eventLevel) {
        this.eventLevel = eventLevel;
    }

    public Float getEventValue() {
        return eventValue;
    }

    public void setEventValue(Float eventValue) {
        this.eventValue = eventValue;
    }

    public Float getLevel1On() {
        return level1On;
    }

    public void setLevel1On(Float level1On) {
        this.level1On = level1On;
    }

    public Float getLevel1Off() {
        return level1Off;
    }

    public void setLevel1Off(Float level1Off) {
        this.level1Off = level1Off;
    }

    public Float getLevel2On() {
        return level2On;
    }

    public void setLevel2On(Float level2On) {
        this.level2On = level2On;
    }

    public Float getLevel2Off() {
        return level2Off;
    }

    public void setLevel2Off(Float level2Off) {
        this.level2Off = level2Off;
    }

    public Float getLevel3On() {
        return level3On;
    }

    public void setLevel3On(Float level3On) {
        this.level3On = level3On;
    }

    public Float getLevel3Off() {
        return level3Off;
    }

    public void setLevel3Off(Float level3Off) {
        this.level3Off = level3Off;
    }

    public Float getLevel4On() {
        return level4On;
    }

    public void setLevel4On(Float level4On) {
        this.level4On = level4On;
    }

    public Float getLevel4Off() {
        return level4Off;
    }

    public void setLevel4Off(Float level4Off) {
        this.level4Off = level4Off;
    }

    public Float getLevel5On() {
        return level5On;
    }

    public void setLevel5On(Float level5On) {
        this.level5On = level5On;
    }

    public Float getLevel5Off() {
        return level5Off;
    }

    public void setLevel5Off(Float level5Off) {
        this.level5Off = level5Off;
    }

    @Override
    public String toString() {
        return "EventConfInfo{" +
                "seq='" + seq + '\'' +
                ", eventDate='" + eventDate + '\'' +
                ", eventType=" + eventType +
                ", eqpCode='" + eqpCode + '\'' +
                ", eventLevel=" + eventLevel +
                ", eventValue=" + eventValue +
                ", level1On=" + level1On +
                ", level1Off=" + level1Off +
                ", level2On=" + level2On +
                ", level2Off=" + level2Off +
                ", level3On=" + level3On +
                ", level3Off=" + level3Off +
                ", level4On=" + level4On +
                ", level4Off=" + level4Off +
                ", level5On=" + level5On +
                ", level5Off=" + level5Off +
                '}';
    }
}
