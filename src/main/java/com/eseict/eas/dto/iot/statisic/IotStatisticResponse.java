package com.eseict.eas.dto.iot.statisic;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;


@Getter
@Setter
@ToString
public class IotStatisticResponse {

//    List<IotStatData> data;
    List<Object> data;
    String containerID;

    public IotStatisticResponse(List<Object> data, String containerID) {
        this.data = data;
        this.containerID = containerID;
    }

    public IotStatisticResponse() {
    }
}
