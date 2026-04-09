package com.eseict.eas.controller.iot;

import com.eseict.eas.config.EasConstants;
import com.eseict.eas.dto.common.DataResponse;
import com.eseict.eas.dto.iot.IotStandardResult;
import com.eseict.eas.dto.iot.raw.IotRawResult;
import com.eseict.eas.dto.iot.statisic.IotStatRequest;
import com.eseict.eas.dto.iot.statisic.IotStatResult;
import com.eseict.eas.service.iot.IotService;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import static com.eseict.eas.config.constant.Constant.*;

@CrossOrigin
@RestController
@RequestMapping(value="/iot", produces = EasConstants.API_PRODUCES)
@RequiredArgsConstructor
public class IotController {

    @Autowired
    IotService iotService;

    @GetMapping("/device")
    public ResponseEntity<DataResponse> getDeviceId() {

        return ResponseEntity.ok(iotService.getDeviceId());
    }

    @GetMapping("/stat")
    public ResponseEntity<List<IotStatResult>> getStat(
            @RequestParam(required = true)String dvcPkId,
            @RequestParam(required = true)String streamPkId,
            @RequestParam(required = false, defaultValue = "")String startDtm,
            @RequestParam(required = false, defaultValue = "")String endDtm,
            @RequestParam(required = true, defaultValue = "")String day
    ){

        List<IotStatResult> result = iotService.getStat(dvcPkId,streamPkId, startDtm, endDtm, day);

        return ResponseEntity.ok(result);

    }

    @GetMapping("/raw")
    public ResponseEntity<DataResponse> getRaw(
            @RequestParam(required = true)String dvcPkId,
            @RequestParam(required = true)String streamPkId,
            @RequestParam(required = false, defaultValue = "")String startDtm,
            @RequestParam(required = false, defaultValue = "")String endDtm
    ){
        List<IotRawResult> result = iotService.getRaw(dvcPkId,streamPkId,startDtm,endDtm);

        DataResponse dataResponse = new DataResponse(EasConstants.RESULT.SUCCESS_CODE, EasConstants.RESULT.SUCCESS_MESSAGE, result.size(), result);

        return ResponseEntity.ok(dataResponse);
    }

    @GetMapping("/standard")
    public ResponseEntity<IotStandardResult> getStandard(
            @RequestParam(required = true)String sensorId
    ){
        IotStandardResult result = iotService.getStandard(sensorId);

        return ResponseEntity.ok(result);
    }

    @CrossOrigin(maxAge = 3600)
    @PostMapping("/excel/download")
    public void iotExcelDownload(
            HttpServletResponse response,
//            @RequestParam(required = true, value = "dvcPkId")String dvcPkId,
//            @RequestParam(required = true, value = "streamPkId")String streamPkId,
//            @RequestParam(required = true, value = "dvcNm")String dvcNm
            @RequestBody IotStatRequest iotStatRequest[]
    ){

//        진짜 데이터 잘들어오면 여깄는걸로 해야함!
        String[] dvcPkId = new String[iotStatRequest.length];
        String[] streamPkId = new String[iotStatRequest.length];
        String[] dvcNm = new String[iotStatRequest.length];

        for (int i = 0; i < iotStatRequest.length; i++) {
            IotStatRequest request = iotStatRequest[i];
            String dvcPkId2 = request.getDvcPkId();
            String streamPkId2 = request.getStreamPkId();
            String dvcNm2 = request.getDvcNm();
            dvcPkId[i] = dvcPkId2;
            streamPkId[i] = streamPkId2;
            dvcNm[i] = dvcNm2;
        }

        //// 오류 데이터 때문에 엑셀 다운로드 테스트 용

//        String[] dvcPkId = new String[3];
//        String[] streamPkId = new String[3];
//        String[] dvcNm = new String[3];
//
//        for (int i = 0; i < 3; i++) {
//            IotStatRequest request = iotStatRequest[i + 5]; // 발안천2 ~ 치동천1 까지 데이터만 불러오기
//            String dvcPkId2 = request.getDvcPkId();
//            String streamPkId2 = request.getStreamPkId();
//            String dvcNm2 = request.getDvcNm();
//            dvcPkId[i] = dvcPkId2;
//            streamPkId[i] = streamPkId2;
//            dvcNm[i] = dvcNm2;
//        }

        Workbook workbook = iotService.getIotExcel(dvcPkId, streamPkId, dvcNm);

        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(YEAR_TO_SECONDS);
        String currentTime = now.format(formatter);
        String excelTitle = "센서 통계 데이터_" + currentTime;
        String encodedTitle = "다운로드";
        try {
            encodedTitle = URLEncoder.encode(excelTitle, "UTF-8").replaceAll("\\+", "%20");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

        response.addHeader("Content-Disposition", "attachment;filename="+ encodedTitle + ".xlsx");
        response.addHeader("Content-Type", "application/vnd.ms-excel");
        response.addHeader("Content-Transfer-Encoding", "binary");
        response.setCharacterEncoding("UTF-8");

        try {
            workbook.write(response.getOutputStream());
            workbook.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
