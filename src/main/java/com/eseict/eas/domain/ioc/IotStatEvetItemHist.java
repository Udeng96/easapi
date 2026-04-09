package com.eseict.eas.domain.ioc;


import com.eseict.eas.config.EasConstants;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity(name = "IocStatEvetItemHist")
@Table(name = "IOC_STAT_EVET_ITEM_HIST", schema = EasConstants.DB_SCHEMA.H_IOC)
public class IotStatEvetItemHist implements Serializable {

    @Id
    @Column(name = "SEQ")
    private Integer seq;

    @Column(name = "STAT_EVET_OUTB_SEQN")
    private String statEvetOutbSeqn;

    @Column(name = "ITEM_NM")
    private String itemNm;

    @Column(name = "ITEM_VAL")
    private String itemVal;
}
