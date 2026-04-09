package com.eseict.eas.dto.iot.raw;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
public class IotRawResult {
    String date;
    Double count;

    public IotRawResult(String date, Double count) {
        this.date = date;
        this.count = count;
    }

    public IotRawResult() {
    }

}
