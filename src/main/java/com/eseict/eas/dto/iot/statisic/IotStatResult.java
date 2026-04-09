package com.eseict.eas.dto.iot.statisic;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class IotStatResult implements Comparable<IotStatResult>{

    private String date;
    private Double count;

    public IotStatResult(String date, Double count) {
        this.date = date;
        this.count = count;
    }
    @Override
    public int compareTo(IotStatResult o) {
        return date.compareTo(o.getDate());
    }
}
