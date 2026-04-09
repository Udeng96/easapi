package com.eseict.eas.dto.common;

import com.google.common.collect.Lists;

import java.util.List;

public class DataResponse<T> extends CommonResponse {

    private int count = 0;
    private List<T>  data  = Lists.newArrayList();

    public DataResponse() {
    }

    public DataResponse(int count, List<T> data) {
        this.count = count;
        this.data = data;
    }

    public DataResponse(String code, String message, int count, List<T> data) {
        super(code, message);
        this.count = count;
        this.data = data;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public Object getData() {
        return data;
    }

    public void setData(List<T> data) {
        this.data = data;
        this.count = data.size();
    }


}
