package com.eseict.eas.dto.iot.raw;

import com.eseict.eas.dto.iot.PageInfo;
import com.eseict.eas.dto.iot.statisic.IotStatisticResponse;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class IotRawResponse {

    String responseCode;
    String responseMessage;
    IotStatisticResponse data;
    PageInfo pageInfo;

    public IotRawResponse(String responseCode, String responseMessage, IotStatisticResponse data, PageInfo pageInfo) {
        this.responseCode = responseCode;
        this.responseMessage = responseMessage;
        this.data = data;
        this.pageInfo = pageInfo;
    }

    public IotRawResponse() {
    }
}
