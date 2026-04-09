package com.eseict.eas.dto.iot.statisic;

import com.eseict.eas.dto.iot.PageInfo;
import com.eseict.eas.dto.iot.device.IotDeviceData;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;


@Getter
@Setter
@ToString
public class IotStatResponse {

    String responseCode;
    String responseMessage;
    IotStatisticResponse data;
    PageInfo pageInfo;

    public IotStatResponse(String responseCode, String responseMessage, IotStatisticResponse data, PageInfo pageInfo) {
        this.responseCode = responseCode;
        this.responseMessage = responseMessage;
        this.data = data;
        this.pageInfo = pageInfo;
    }

    public IotStatResponse() {
    }
}
