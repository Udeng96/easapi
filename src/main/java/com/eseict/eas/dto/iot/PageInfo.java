package com.eseict.eas.dto.iot;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class PageInfo {
    String page;
    String totalPage;
    String rows;
    String currentRows;
    String totalRows;

    public PageInfo(String page, String totalPage, String rows, String currentRows, String totalRows) {
        this.page = page;
        this.totalPage = totalPage;
        this.rows = rows;
        this.currentRows = currentRows;
        this.totalRows = totalRows;
    }

    public PageInfo() {
    }
}
