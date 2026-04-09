package com.eseict.eas.service.event;

import com.eseict.eas.dao.event.EventDao;
import com.eseict.eas.domain.ioc.IocEvetOutbHist;
import com.eseict.eas.dto.event.EventListResponse;
import com.eseict.eas.dto.event.EventResult;
import com.eseict.eas.repository.main.EventRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service(value="eventService")
public class EventService {

    @Autowired
    EventDao eventDao;


    @Autowired
    EventRepository eventRepository;

    private static final Logger logger = LoggerFactory.getLogger(EventService.class);




    public EventListResponse getEventList (String startDtm, String endDtm, List<String> grades, int pageIndex, int row) {

        Pageable pageable =  PageRequest.of(pageIndex, row, Sort.by(Sort.Direction.DESC, "outbDtm"));

        List<EventResult> eventList = new ArrayList<>();

        EventListResponse eventListResponse = new EventListResponse();

        Page<IocEvetOutbHist> list = eventRepository.findAllList(pageable);

        if(!startDtm.isEmpty() && !endDtm.isEmpty()){

            list = eventRepository.findAllByDtm(startDtm+"000000", endDtm+"235959", grades, pageable);
        }

        list.stream().forEach((item) -> {
            EventResult eventResult = new EventResult();
            eventResult.setEventSeq(item.getStatEvetOubSeqn());
            eventResult.setEventCd(item.getSvcThemeCd() + item.getUnitSvcCd() + item.getEvetGbCd() + item.getStatEvetCd());
            eventResult.setClrDtm(item.getClrDtm());
            eventResult.setOutbDtm(item.getOutbDtm());
            eventResult.setProcSt(item.getProcSt());
            eventResult.setProcNm(setProcNm(item.getProcSt()));
            eventResult.setPlace(item.getOutbPlac());
            eventResult.setZnCd(item.getZnCd());
            eventResult.setLat(item.getX());
            eventResult.setLng(item.getY());
            eventResult.setSensorId(item.getSensorId());
            eventResult.setStreamPkId(item.getStreamPkId());
            eventResult.setDvcPkId(item.getDvcPkId());
            eventResult.setCntn(item.getStatEvetCntn());

            eventList.add(eventResult);

        });

        eventListResponse.setEventList(eventList);
        eventListResponse.setPage(pageIndex+1);
        eventListResponse.setCnt(list.getSize());
        eventListResponse.setTotalPage(list.getTotalPages());
        eventListResponse.setTotal(list.getTotalElements());



        return eventListResponse;
    }

    public EventResult getEvent(String id){

        EventResult event = eventDao.getEvent(id);

        return event;
    }

    public EventListResponse getEventBySensorId(String sensorId, String startDtm, String endDtm){

//        Pageable pageable =  PageRequest.of(1, 1000, Sort.by(Sort.Direction.DESC, "outbDtm"));

        List<IocEvetOutbHist> list = eventRepository.findAllBySensorId(sensorId,startDtm+"000000",endDtm+"235959");

        List<EventResult> eventList = new ArrayList<>();

        EventListResponse eventListResponse = new EventListResponse();


        list.stream().forEach((item) -> {

            EventResult eventResult = new EventResult();


            eventResult.setEventSeq(item.getStatEvetOubSeqn());
            eventResult.setEventCd(item.getSvcThemeCd() + item.getUnitSvcCd() + item.getEvetGbCd() + item.getStatEvetCd());
            eventResult.setClrDtm(item.getClrDtm());
            eventResult.setOutbDtm(item.getOutbDtm());
            eventResult.setProcSt(item.getProcSt());
            eventResult.setProcNm(setProcNm(item.getProcSt()));
            eventResult.setPlace(item.getOutbPlac());
            eventResult.setZnCd(item.getZnCd());
            eventResult.setLat(item.getX());
            eventResult.setLng(item.getY());
            eventResult.setSensorId(item.getSensorId());
            eventResult.setStreamPkId(item.getStreamPkId());
            eventResult.setDvcPkId(item.getDvcPkId());
            eventResult.setCntn(item.getStatEvetCntn());

            eventList.add(eventResult);
        });



        eventListResponse.setEventList(eventList);
        eventListResponse.setPage(1);
        eventListResponse.setCnt(list.size());
        eventListResponse.setTotalPage(1);
        eventListResponse.setTotal((long) list.size());

        return eventListResponse;
    }

    public boolean setEvent(EventResult paramMap){

        LocalDateTime now = LocalDateTime.now();
        String today = now.format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));


//        SimpleDateFormat format = new SimpleDateFormat("yyyyMMddHHmmss");

//        String today = format.format( new Date());


        boolean result = eventDao.setEvent(paramMap.getEventSeq(),today);

        return result;

    }

    public String setProcNm (String procSt) {

        if(procSt.equals("1") || procSt.equals("3")){
            return "발생";
        } else if (procSt.equals("2")) {
            return "재발생";
        } else if(procSt.equals("4")){
            return "해제";
        }else{
            return "종료";
        }
    }


}

