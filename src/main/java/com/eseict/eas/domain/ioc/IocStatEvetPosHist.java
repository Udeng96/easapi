package com.eseict.eas.domain.ioc;

import com.eseict.eas.config.EasConstants;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity(name = "IocStatEvetPosHist")
@Table(name = "IOC_STAT_EVET_POS_HIST", schema = EasConstants.DB_SCHEMA.H_IOC)
public class IocStatEvetPosHist implements Serializable {
    @Id
    @Column(name = "STAT_EVET_OUTB_SEQN", length = 24)
    private String stateEvetOutbSeqn;

    @Id
    @Column(name = "SEQ")
    private Integer seq;


    @Column(name = "X_CRDNT", length = 20)
    private String xCrdnt;

    @Column(name = "Y_CRDNT", length = 20)
    private String yCrdnt;

    @Column(name = "Z_CRDNT", length = 20)
    private String zCrdnt;

    public IocStatEvetPosHist(String stateEvetOutbSeqn, Integer seq, String xCrdnt, String yCrdnt, String zCrdnt) {
        this.stateEvetOutbSeqn = stateEvetOutbSeqn;
        this.seq = seq;
        this.xCrdnt = xCrdnt;
        this.yCrdnt = yCrdnt;
        this.zCrdnt = zCrdnt;
    }

    public IocStatEvetPosHist() {
    }

    public String getStateEvetOutbSeqn() {
        return stateEvetOutbSeqn;
    }

    public void setStateEvetOutbSeqn(String stateEvetOutbSeqn) {
        this.stateEvetOutbSeqn = stateEvetOutbSeqn;
    }

    public Integer getSeq() {
        return seq;
    }

    public void setSeq(Integer seq) {
        this.seq = seq;
    }

    public String getxCrdnt() {
        return xCrdnt;
    }

    public void setxCrdnt(String xCrdnt) {
        this.xCrdnt = xCrdnt;
    }

    public String getyCrdnt() {
        return yCrdnt;
    }

    public void setyCrdnt(String yCrdnt) {
        this.yCrdnt = yCrdnt;
    }

    public String getzCrdnt() {
        return zCrdnt;
    }

    public void setzCrdnt(String zCrdnt) {
        this.zCrdnt = zCrdnt;
    }

    @Override
    public String toString() {
        return "IocStatEvetPosHist{" +
                "stateEvetOutbSeqn='" + stateEvetOutbSeqn + '\'' +
                ", seq=" + seq +
                ", xCrdnt='" + xCrdnt + '\'' +
                ", yCrdnt='" + yCrdnt + '\'' +
                ", zCrdnt='" + zCrdnt + '\'' +
                '}';
    }
}


