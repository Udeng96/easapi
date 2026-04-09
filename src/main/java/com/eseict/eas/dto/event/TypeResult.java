package com.eseict.eas.dto.event;

public class TypeResult {

    private String eventCd;
    private String eventNm;

    public TypeResult(String eventCd, String eventNm) {
        this.eventCd = eventCd;
        this.eventNm = eventNm;
    }


    public TypeResult() {
    }

    public String getEventCd() {
        return eventCd;
    }

    public void setEventCd(String eventCd) {
        this.eventCd = eventCd;
    }

    public String getEventNm() {
        return eventNm;
    }

    public void setEventNm(String eventNm) {
        this.eventNm = eventNm;
    }

    @Override
    public String toString() {
        return "TypeResult{" +
                "eventCd='" + eventCd + '\'' +
                ", eventNm='" + eventNm + '\'' +
                '}';
    }
}
