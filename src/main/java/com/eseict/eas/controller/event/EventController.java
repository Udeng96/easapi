package com.eseict.eas.controller.event;


import com.eseict.eas.config.EasConstants;
import com.eseict.eas.dto.common.CommonResponse;
import com.eseict.eas.dto.event.EventListResponse;
import com.eseict.eas.dto.event.EventResult;
import com.eseict.eas.service.event.EventService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/event", produces = EasConstants.API_PRODUCES)
public class EventController {

    @Autowired
    EventService eventService;

    private static final Logger _logger = LoggerFactory.getLogger(EventController.class);

    @RequestMapping(value="")
    public ResponseEntity<EventListResponse> getEventList(
            @RequestParam(required = false, defaultValue = "") String startDtm,
            @RequestParam(required = false, defaultValue = "") String endDtm,
            @RequestParam(required = false, defaultValue = "01,02,03") List<String> eventGrade,
            @RequestParam(required = false, defaultValue = "50") Integer rows,
            @RequestParam(required = false, defaultValue = "1") Integer pageNumber
    ){

        EventListResponse result =  eventService.getEventList(startDtm, endDtm, eventGrade, pageNumber-1, rows);

        return ResponseEntity.ok(result);
    }


    @RequestMapping(value = "/{id}")
    public ResponseEntity<EventResult> getEvent(
            @PathVariable("id")String id
    ){
        return ResponseEntity.ok(eventService.getEvent(id));
    }

    @RequestMapping(value = "/sensor")
    public ResponseEntity<EventListResponse> getEventBySensorId(
            @RequestParam("sensorId")String sensorId,
            @RequestParam("startDtm")String startDtm,
            @RequestParam("endDtm")String endDtm
    ){
        return ResponseEntity.ok(eventService.getEventBySensorId(sensorId,startDtm,endDtm));
    }


    @PostMapping(value = "/updSt")
    public ResponseEntity<CommonResponse> setEvent(
            @RequestBody(required = false) EventResult paramMap
    ){

        boolean result = eventService.setEvent(paramMap);
        CommonResponse response = new CommonResponse();
        if(result){
            response.setCode(EasConstants.RESPONSE.CD_SUCCESS);
            response.setMessage(EasConstants.RESPONSE.MG_SUCCESS);
        }

        return ResponseEntity.ok(response);

    }

}
