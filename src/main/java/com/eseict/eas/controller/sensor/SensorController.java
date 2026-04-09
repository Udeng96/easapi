package com.eseict.eas.controller.sensor;

import com.eseict.eas.config.EasConstants;
import com.eseict.eas.domain.dw.EqpInfo;
import com.eseict.eas.dto.common.DataResponse;
import com.eseict.eas.service.sensor.SensorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/sensor",produces = EasConstants.API_PRODUCES)
public class SensorController {


    @Autowired
    SensorService sensorService;

    private static final Logger _logger = LoggerFactory.getLogger(SensorController.class);

    @RequestMapping(value = "")
     public ResponseEntity<DataResponse> getSensorList(){

        List<EqpInfo> sensorList = sensorService.getSensors();
        DataResponse<EqpInfo> response = new DataResponse<>();
        if(sensorList.size()>0){
            response.setCode(EasConstants.RESPONSE.CD_SUCCESS);
            response.setCode(EasConstants.RESPONSE.MG_SUCCESS);
            response.setCount(sensorList.size());
            response.setData(sensorList);
        }


        return ResponseEntity.ok(response);

    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<EqpInfo> getSensor(
            @PathVariable("id")String id
    ){
        EqpInfo eqpInfo = sensorService.getSensor(id);

        return ResponseEntity.ok(eqpInfo);

    }
}
