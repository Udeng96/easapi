package com.eseict.eas.dto.api;

public class WarnInfoResponse {

    private String title;
    private String fromDate;

    public WarnInfoResponse() {
    }

    public WarnInfoResponse(String title, String fromDate) {
        this.title = title;
        this.fromDate = fromDate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFromDate() {
        return fromDate;
    }

    public void setFromDate(String fromDate) {
        this.fromDate = fromDate;
    }

    @Override
    public String toString() {
        return "WarnInfoResponse{" +
                "title='" + title + '\'' +
                ", fromDate='" + fromDate + '\'' +
                '}';
    }

}
