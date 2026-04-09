package com.eseict.eas.dto.iot.statisic;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class IotStatRequest {
    private String dvcPkId;
    private String streamPkId;
    private String dvcNm;
}
