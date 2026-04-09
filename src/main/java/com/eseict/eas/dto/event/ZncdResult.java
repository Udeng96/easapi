package com.eseict.eas.dto.event;

public class ZncdResult {

    private String znCd;
    private String znNm;

    public ZncdResult(String znCd, String znNm) {
        this.znCd = znCd;
        this.znNm = znNm;
    }

    public ZncdResult() {
    }

    public String getZnCd() {
        return znCd;
    }

    public void setZnCd(String znCd) {
        this.znCd = znCd;
    }

    public String getZnNm() {
        return znNm;
    }

    public void setZnNm(String znNm) {
        this.znNm = znNm;
    }

    @Override
    public String toString() {
        return "ZncdResult{" +
                "znCd='" + znCd + '\'' +
                ", znNm='" + znNm + '\'' +
                '}';
    }
}
