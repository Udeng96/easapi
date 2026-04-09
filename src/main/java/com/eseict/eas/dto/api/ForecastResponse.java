package com.eseict.eas.dto.api;


import com.eseict.eas.config.EasConstants;
import lombok.ToString;


@ToString
public class ForecastResponse {

    private Double pop; // 강수확률, 단위:%
    private Integer pty; // 강수형태코드값 --> 없음(0), 비(1), 비/ 눈(2), 눈(3), 소나기(4), 빗방울(5), 빗방울/눈날림(6), 눈날림(7) 여기서 비/눈은 비와 눈이 섞여 오는 것을 의미 (진눈개비)
    private String ptyName;
    private Integer sky; // 하늘 상태 코드 값 --> 맑음(1), 구름많음(3), 흐림(4)
    private String skyName;
    private Double tmp; // 1시간 기온
    private Double wsd; // 풍속, 단위 : m/s
    private double wcf; // 체감온도

    String forecastDate;
    String forecastTime;

//    private Double tmn; // 아침 최저기온
//    private Double tmx; // 낮 최고기온
//    private Double uuu; // 풍속(동서성분)(동(+표기), 서(-표기)), 단위 : m/s
//    private Double vvv; // 풍속(남북성분)(북(+표기), 남(-표기)), 단위 : m/s
//    private Double wav; // 파고, 단위 : m
//    private Integer vec; // 풍향, 단위 deg
//    private String pcp; // 한시간 강우량
//    private Double reh; // 습도, 단위:%


    public ForecastResponse(Double pop, Integer pty, String ptyName, String pcp, Double reh, Integer sky, String skyName, Double tmp, Double tmn, Double tmx, Double uuu, Double vvv, Double wav, Integer vec, Double wsd, Integer wcf, String forecastDate, String forecastTime) {
        this.pop = pop;
        this.pty = pty;
        this.ptyName = ptyName;
        this.sky = sky;
        this.skyName = skyName;
        this.tmp = tmp;
        this.wsd = wsd;
        this.wcf = wcf;
        this.forecastDate = forecastDate;
        this.forecastTime = forecastTime;
//        this.tmn = tmn;
//        this.tmx = tmx;
//        this.uuu = uuu;
//        this.vvv = vvv;
//        this.wav = wav;
//        this.vec = vec;
//        this.pcp = pcp;
//        this.reh = reh;
    }

    public ForecastResponse() {
    }

    public Double getPop() {
        return pop;
    }

    public void setPop(Double pop) {
        this.pop = pop;
    }

    public Integer getPty() {
        return pty;
    }

    public void setPty(Integer pty) {
        this.pty = pty;
    }

    public String getPtyName() {
        return ptyName;
    }

    public void setPtyName(Integer pty) {
        this.ptyName = EasConstants.PTY_NAME_ARRAY[pty];
    }


    public Integer getSky() {
        return sky;
    }

    public void setSky(Integer sky) {
        this.sky = sky;
    }

    public String getSkyName() {
        return skyName;
    }

    public void setSkyName(Integer sky) {
        this.skyName = EasConstants.SKY_NAME_ARRAY[sky];
    }

    public Double getTmp() {
        return tmp;
    }

    public void setTmp(Double tmp) {
        this.tmp = tmp;
    }

    //    public Double getTmn() {
//        return tmn;
//    }
//
//    public void setTmn(Double tmn) {
//        this.tmn = tmn;
//    }
//
//    public Double getTmx() {
//        return tmx;
//    }
//
//    public void setTmx(Double tmx) {
//        this.tmx = tmx;
//    }
//
//    public Double getUuu() {
//        return uuu;
//    }
//
//    public void setUuu(Double uuu) {
//        this.uuu = uuu;
//    }
//
//    public Double getVvv() {
//        return vvv;
//    }
//
//    public void setVvv(Double vvv) {
//        this.vvv = vvv;
//    }
//
//    public Double getWav() {
//        return wav;
//    }
//
//    public void setWav(Double wav) {
//        this.wav = wav;
//    }
//
//    public Integer getVec() {
//        return vec;
//    }
//
//    public void setVec(Integer vec) {
//        this.vec = vec;
//    }
//
//    public String getPcp() { return pcp; }
//
//    public void setPcp(String pcp) { this.pcp = pcp; }
//
//    public Double getReh() {
//        return reh;
//    }
//
//    public void setReh(Double reh) {
//        this.reh = reh;
//    }
    public Double getWsd() {
        return wsd;
    }

    public void setWsd(Double wsd) {
        this.wsd = wsd;
    }

    public Double getWcf() {
        return wcf;
    }

    public void setWcf(Double tmp, Double wsd) {
        this.wcf = Math.floor(13.12 + 0.6515 * tmp - 11.37 * Math.pow(wsd, 0.16) + 0.3965 * Math.pow(wsd, 0.16) * tmp);
    }

    public String getForecastDate() {
        return forecastDate;
    }

    public void setForecastDate(String forecastDate) {
        this.forecastDate = forecastDate;
    }

    public String getForecastTime() {
        return forecastTime;
    }

    public void setForecastTime(String forecastTime) {
        this.forecastTime = forecastTime;
    }


}
