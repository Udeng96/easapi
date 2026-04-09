package com.eseict.eas.dto.event;


import lombok.*;

import java.util.List;

@ToString
@Getter
@Setter
public class EventListResponse {


    Integer page;
    Integer cnt;
    Long total;
    Integer totalPage;
    List<EventResult> eventList;

    public EventListResponse(){

    }

    public EventListResponse(Integer page, Integer cnt, Long total, Integer totalPage, List<EventResult> eventList) {
        this.page = page;
        this.cnt = cnt;
        this.total = total;
        this.totalPage = totalPage;
        this.eventList = eventList;
    }
}
