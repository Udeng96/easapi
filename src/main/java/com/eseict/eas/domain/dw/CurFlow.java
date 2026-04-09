package com.eseict.eas.domain.dw;

import com.eseict.eas.config.EasConstants;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "CUR_FLOW", schema = EasConstants.DB_SCHEMA.H_DW)
public class CurFlow implements Serializable {

    @Id
    @Column(name = "EQP_CODE", length = 11)
    private String eqpCode; // 장비코드

    @Column(name = "FLOW_DATE")
    private String flowDate; // 수집시각

    @Column(name = "FLOW_BH")
    private Double flowBh; //전시간 수위

    @Column(name = "FLOW_M")
    private Double flowM; //현재 수위

    @Column(name = "FLOW_H")
    private Double flowH; // 현시간 수위

    @Column(name = "FLOW_D_AVG")
    private Double flowDAvg; //금일 평균 수위

    @Column(name = "FLOW_BD_AVG")
    private Double flowBdAvg; //전일 평균 수위
}
