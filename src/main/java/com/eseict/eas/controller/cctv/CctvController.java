package com.eseict.eas.controller.cctv;


import com.eseict.eas.config.EasConstants;
import com.eseict.eas.dto.cctv.CctvResult;
import com.eseict.eas.dto.common.DataResponse;
import com.eseict.eas.util.CommonUtil;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Type;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value="/cctv", produces = EasConstants.API_PRODUCES)
public class CctvController {

    private static final Logger _logger = LoggerFactory.getLogger(CctvController.class);


    @RequestMapping(value = "")
    public ResponseEntity<DataResponse> getCctvList(
//            String data =CommonUtil.getSampleData("/exData/monitor/cctvList.json") {
//        return null;
//    }
    ){

        Gson gson = new Gson();
        CommonUtil commonUtil = new CommonUtil();
        String data = commonUtil.getSampleData("/cctvData/cctvInfo.json");
        Type type = new TypeToken<List<CctvResult>>() {}.getType();
        List<CctvResult> result = gson.fromJson(data, type);

        DataResponse dataResponse = new DataResponse();
        if(result.size()>0) {
            dataResponse.setData(result);
            dataResponse.setCount(result.size());
            dataResponse.setCode(EasConstants.RESPONSE.CD_SUCCESS);
            dataResponse.setMessage(EasConstants.RESPONSE.MG_SUCCESS);
        }

        return ResponseEntity.ok(dataResponse);

    }




}
