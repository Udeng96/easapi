package com.eseict.eas.service.history;

import com.eseict.common.core.unique.IdGenerator;
import com.eseict.eas.dao.history.HistoryDao;
import com.eseict.eas.dao.sms.SmsDao;
import com.eseict.eas.domain.dst.EasDisasterTransfer;
import com.eseict.eas.dto.history.Receiver;
import com.eseict.eas.repository.main.HistoryRepository;
import com.eseict.eas.service.event.EventService;
import com.google.common.reflect.TypeToken;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class HistoryService {

    private static final Logger logger = LoggerFactory.getLogger(EventService.class);

    @Autowired
    HistoryRepository historyRepository;

    @Autowired
    HistoryDao historyDao;

    @Autowired
    SmsDao smsDao;


    public List<EasDisasterTransfer> getHistory(String id){

        return historyDao.getHistory(id);

    }



    public boolean setHistory(EasDisasterTransfer paramMap, String procSt) {

        SimpleDateFormat format = new SimpleDateFormat("yyyyMMddHHmmss");

        String dateString = format.format( new Date());
//        Date   date       = format.parse( );
//        LocalDateTime now = LocalDateTime.now();
//        String dateString = now.format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));

        String transferSeqn = "__" + IdGenerator.getUUID64() + "__";
        paramMap.setTransferSeqn(transferSeqn);
        paramMap.setTransferDtm(dateString);

        boolean result = false;
        AtomicInteger count = new AtomicInteger();


        Gson gson = new Gson();
        ArrayList<Receiver> receivers = (gson.fromJson(paramMap.getTransferTarget(), new TypeToken<ArrayList<Receiver>>() {
        }.getType()));


        receivers.forEach(receiver -> {
            Map<String, String> mapParam = new HashMap<>();

            mapParam.put("rcvMn", receiver.getCpNo());
            mapParam.put("sndMn", "031-613-1392");
            mapParam.put("msgCntn", paramMap.getContent());

            boolean insertResult = smsDao.insertSndMsg(mapParam,procSt);
            if(insertResult){
                count.addAndGet(1);
            }
            historyRepository.saveAndFlush(paramMap);



        });

        if(count.intValue() > 0){
            result = true;
        }

        return result;
    }
}
