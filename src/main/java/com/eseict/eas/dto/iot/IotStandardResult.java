package com.eseict.eas.dto.iot;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class IotStandardResult {
    String streamId;
    Float caution;
    Float alert;
    Float serious;

    public IotStandardResult(String streamId, Float caution, Float alert, Float serious) {
        this.streamId = streamId;
        this.caution = caution;
        this.alert = alert;
        this.serious = serious;
    }

    public IotStandardResult() {
    }


}
