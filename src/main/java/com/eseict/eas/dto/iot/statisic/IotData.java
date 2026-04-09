package com.eseict.eas.dto.iot.statisic;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class IotData {
    Double count;
    Double max;
    Double min;
    Double average;
    Double stdev;

    public IotData(Double count, Double max, Double min, Double average, Double stdev) {
        this.count = count;
        this.max = max;
        this.min = min;
        this.average = average;
        this.stdev = stdev;
    }

    public IotData() {
    }
}
