package com.eseict.eas.dto.common;

import com.eseict.eas.config.EasConstants;

public class CommonResponse {

    private String code = EasConstants.RESPONSE.CD_FAIL;        //정상 000, error 901
    private String message = EasConstants.RESPONSE.MG_FAIL;     //정상 success , error 에러내용 Exception message 출력

    public CommonResponse() {
    }

    public CommonResponse(String code, String message) {
        this.code = code;
        this.message = message;

    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

