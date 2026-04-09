package com.eseict.eas.dto.iot.raw;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;


@Getter
@Setter
@ToString
public class IotRawDataResponse {

    String streamNm;
    List<Object> data;
    String containerId;

    public IotRawDataResponse(String streamNm, List<Object> data, String containerId) {
        this.streamNm = streamNm;
        this.data = data;
        this.containerId = containerId;
    }

    public IotRawDataResponse() {
    }
}
