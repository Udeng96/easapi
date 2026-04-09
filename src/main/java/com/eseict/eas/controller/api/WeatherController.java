package com.eseict.eas.controller.api;


import com.eseict.eas.config.EasConstants;
import com.eseict.eas.dto.common.DataResponse;
import com.eseict.eas.service.api.WeatherService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value="/api/weather",produces = EasConstants.API_PRODUCES)
public class WeatherController {

    @Autowired
    WeatherService weatherService;

    private static final Logger _logger = LoggerFactory.getLogger(WeatherController.class);


    @GetMapping(value = "/forecast")

    public ResponseEntity<DataResponse> getForecast() {

        return ResponseEntity.ok(weatherService.getForecastList());

    }

    @GetMapping(value = "/warnInfo")
    public ResponseEntity<DataResponse> getWarnInfo() {

        return ResponseEntity.ok(weatherService.getWarnInfoList());

    }


}
