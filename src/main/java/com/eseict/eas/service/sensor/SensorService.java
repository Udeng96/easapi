package com.eseict.eas.service.sensor;

import com.eseict.eas.dao.sensor.SensorDao;
import com.eseict.eas.domain.dw.EqpInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SensorService {

    @Autowired
    SensorDao sensorDao;

    private static final Logger _logger = LoggerFactory.getLogger(SensorService.class);

    public List<EqpInfo> getSensors(){

        List<EqpInfo> sensorList = sensorDao.getSensors();

        return sensorList;

    }

    public EqpInfo getSensor(String id){
        EqpInfo sensor = sensorDao.getSensor(id);
        return sensor;
    }
}
