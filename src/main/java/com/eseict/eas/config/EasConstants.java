package com.eseict.eas.config;

public class EasConstants {

    public static final String API_PRODUCES = "application/json;charset=utf8";

    public static class DB_SCHEMA{
        public static final String H_IOC = "rino_ioc";
        public static final String H_DW = "dw";
        public static final String H_EAS = "eas";
        public static final String H_C50 = "C50";
        public static final String N_IOC = "ioc";


    }

    public static class RESULT {
        public static final String SUCCESS_CODE = "SUCCESS";
        public static final String SUCCESS_STATUS = "200";
        public static final String OMS_SUCCESS_CODE = "OK";
        public static final String FAIL_CODE = "FAIL";

        public static final String SUCCESS_MESSAGE = "정상 처리되었습니다.";
        public static final String FAIL_MESSAGE = "불러온 데이터가 없거나 정상적인 호출이 되지 않았습니다.";
        public static final String FAIL_NO_AUTH = "권한이 없거나, 접속정보가 올바르지않습니다.";
    }

    public static class RESPONSE{
        public static final String CD_SUCCESS = "000";
        public static final String CD_FAIL = "901";

        public static final String MG_SUCCESS = "success";
        public static final String MG_FAIL = "SERVER ERROR";

    }

    public static final String[] PTY_NAME_ARRAY = {"없음", "비", "비/눈", "눈", "소나기", "빗방울", "빗방울/눈날림", "눈날림"};

    public static final String[] SKY_NAME_ARRAY = {"", "맑음", "", "구름많음", "흐림"};

}
