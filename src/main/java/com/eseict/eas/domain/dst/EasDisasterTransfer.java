package com.eseict.eas.domain.dst;


import com.eseict.eas.config.EasConstants;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "EasDisasterTransfer")
@Table(name = "EAS_DISASTER_TRANSFER", schema = EasConstants.DB_SCHEMA.H_EAS)
public class EasDisasterTransfer {

    @Id
    @Column(name = "TRANSFER_SEQN")
    private String transferSeqn;

    @Column(name = "CONTENT")
    private String content;

    @Column(name = "TRANSFER_DTM")
    private String transferDtm;

    @Column(name = "TRANSFER_USER_ID")
    private String transferUserId;

    @Column(name = "DISASTER_ID")
    private String disasterId;

    @Column(name = "DISASTER_GRADE")
    private String disasterGrade;

    @Column(name = "TRANSFER_TARGET")
    private String transferTarget;

    public EasDisasterTransfer() {
    }

    public EasDisasterTransfer(String transferSeqn, String content, String transferDtm, String transferUserId, String disasterId, String disasterGrade, String transferTarget) {
        this.transferSeqn = transferSeqn;
        this.content = content;
        this.transferDtm = transferDtm;
        this.transferUserId = transferUserId;
        this.disasterId = disasterId;
        this.disasterGrade = disasterGrade;
        this.transferTarget = transferTarget;
    }

    public String getTransferSeqn() {
        return transferSeqn;
    }

    public void setTransferSeqn(String transferSeqn) {
        this.transferSeqn = transferSeqn;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTransferDtm() {
        return transferDtm;
    }

    public void setTransferDtm(String transferDtm) {
        this.transferDtm = transferDtm;
    }

    public String getTransferUserId() {
        return transferUserId;
    }

    public void setTransferUserId(String transferUserId) {
        this.transferUserId = transferUserId;
    }

    public String getDisasterId() {
        return disasterId;
    }

    public void setDisasterId(String disasterId) {
        this.disasterId = disasterId;
    }

    public String getDisasterGrade() {
        return disasterGrade;
    }

    public void setDisasterGrade(String disasterGrade) {
        this.disasterGrade = disasterGrade;
    }

    public String getTransferTarget() {
        return transferTarget;
    }

    public void setTransferTarget(String transferTarget) {
        this.transferTarget = transferTarget;
    }

    @Override
    public String toString() {
        return "EasDisasterTransfer{" +
                "transferSeqn='" + transferSeqn + '\'' +
                ", content='" + content + '\'' +
                ", transferDtm='" + transferDtm + '\'' +
                ", transferUserId='" + transferUserId + '\'' +
                ", disasterId='" + disasterId + '\'' +
                ", disasterGrade='" + disasterGrade + '\'' +
                ", transferTarget='" + transferTarget + '\'' +
                '}';
    }
}


