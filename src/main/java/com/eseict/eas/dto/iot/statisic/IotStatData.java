package com.eseict.eas.dto.iot.statisic;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class IotStatData {
    Long startDtm;
    Long endDtm;
    Object data;

    public IotStatData(Long startDtm, Long endDtm, Object data) {
        this.startDtm = startDtm;
        this.endDtm = endDtm;
        this.data = data;
    }

    public IotStatData() {
    }
}
