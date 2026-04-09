package com.eseict.eas.dto.iot.device;

import com.eseict.eas.dto.iot.PageInfo;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;


@Getter
@Setter
@ToString
public class IotDeviceResponse {

    String responseCode;
    String responseMessage;
    List<IotDeviceData> data;
    PageInfo pageInfo;

    public IotDeviceResponse(String responseCode, String responseMessage, List<IotDeviceData> data, PageInfo pageInfo) {
        this.responseCode = responseCode;
        this.responseMessage = responseMessage;
        this.data = data;
        this.pageInfo = pageInfo;
    }

    public IotDeviceResponse() {
    }
}
