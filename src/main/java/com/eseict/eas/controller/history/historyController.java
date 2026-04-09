package com.eseict.eas.controller.history;

import com.eseict.eas.config.EasConstants;
import com.eseict.eas.domain.dst.EasDisasterTransfer;
import com.eseict.eas.dto.common.CommonResponse;
import com.eseict.eas.dto.common.DataResponse;
import com.eseict.eas.dto.event.EventResult;
import com.eseict.eas.service.event.EventService;
import com.eseict.eas.service.history.HistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value="disaster", produces = EasConstants.API_PRODUCES)
public class historyController {

    @Autowired
    HistoryService historyService;

    @Autowired
    EventService eventService;

    @Transactional
    @PostMapping(value = "/upd")
    ResponseEntity<CommonResponse> saveDisasterTransfer(
            @RequestBody EasDisasterTransfer paramMap
            ){

        EventResult event = eventService.getEvent(paramMap.getDisasterId());
        String procSt = "";
        if(event.getProcSt()=="1"){
            procSt = "Y";
        }else{
            procSt = "N";
        }
        boolean result = historyService.setHistory(paramMap, procSt);
        CommonResponse response = new CommonResponse();
        if(result){
            response.setCode(EasConstants.RESPONSE.CD_SUCCESS);
            response.setMessage(EasConstants.RESPONSE.MG_SUCCESS);
        }else{
            response.setCode(EasConstants.RESPONSE.CD_FAIL);
            response.setMessage(EasConstants.RESPONSE.MG_FAIL);
        }

        return ResponseEntity.ok(response);
    }


    @GetMapping("/{id}")
    ResponseEntity<DataResponse> getDisaster(
            @PathVariable("id")String id
    ){

        DataResponse dataResponse = new DataResponse();
        List<EasDisasterTransfer> result = historyService.getHistory(id);

        if(result.size()>0){
            dataResponse.setCount(result.size());
            dataResponse.setData(result);
            dataResponse.setMessage(EasConstants.RESPONSE.MG_SUCCESS);
            dataResponse.setCode(EasConstants.RESPONSE.CD_SUCCESS);
        }else{
            dataResponse.setCode(EasConstants.RESPONSE.CD_FAIL);
            dataResponse.setMessage(EasConstants.RESPONSE.MG_FAIL);
            dataResponse.setCount(0);
            dataResponse.setData(result);
        }



        return ResponseEntity.ok(dataResponse);

    }

}
