package com.eseict.eas.domain.sms;

import com.eseict.eas.config.EasConstants;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity(name = "TtbSms")
@Table(name = "TTB_SMS",  schema = EasConstants.DB_SCHEMA.H_C50)
public class TtbSms implements Serializable {

    @Id
    @Column(name = "SND_MN", length = 20)
    private String sndMn;

    @Id
    @Column(name = "RCV_MN", length = 50)
    private String rcvMn;

    @Id
    @Column(name = "SND_DTM", length = 14)
    private String sndDtm;

    @Column(name = "MSG_CNTN", length = 4000)
    private String msgCntn;

    @Column(name = "PROC_ST",length =1)
    private String procSt;


    public TtbSms() {
    }

    public TtbSms(String sndMn, String rcvMn, String sndDtm, String msgCntn, String procSt) {
        this.sndMn = sndMn;
        this.rcvMn = rcvMn;
        this.sndDtm = sndDtm;
        this.msgCntn = msgCntn;
        this.procSt = procSt;
    }

    public String getSndMn() {
        return sndMn;
    }

    public void setSndMn(String sndMn) {
        this.sndMn = sndMn;
    }

    public String getRcvMn() {
        return rcvMn;
    }

    public void setRcvMn(String rcvMn) {
        this.rcvMn = rcvMn;
    }

    public String getSndDtm() {
        return sndDtm;
    }

    public void setSndDtm(String sndDtm) {
        this.sndDtm = sndDtm;
    }

    public String getMsgCntn() {
        return msgCntn;
    }

    public void setMsgCntn(String msgCntn) {
        this.msgCntn = msgCntn;
    }

    public String getProcSt() {
        return procSt;
    }

    public void setProcSt(String procSt) {
        this.procSt = procSt;
    }

    @Override
    public String toString() {
        return "TtbSms{" +
                "sndMn='" + sndMn + '\'' +
                ", rcvMn='" + rcvMn + '\'' +
                ", sndDtm='" + sndDtm + '\'' +
                ", msgCntn='" + msgCntn + '\'' +
                ", procSt='" + procSt + '\'' +
                '}';
    }
}
