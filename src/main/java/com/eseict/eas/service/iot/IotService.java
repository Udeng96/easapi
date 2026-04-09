package com.eseict.eas.service.iot;

import com.eseict.common.config.ConfFileInfo;
import com.eseict.common.datetime.DateTimeUtil;
import com.eseict.common.net.http.HttpConnection;
import com.eseict.common.net.http.HttpConnectionException;
import com.eseict.eas.dao.iot.IotDao;
import com.eseict.eas.domain.dw.EventConfInfo;
import com.eseict.eas.dto.common.DataResponse;
import com.eseict.eas.dto.iot.IotStandardResult;
import com.eseict.eas.dto.iot.device.IotDeviceData;
import com.eseict.eas.dto.iot.device.IotDeviceResponse;
import com.eseict.eas.dto.iot.device.IotDeviceResult;
import com.eseict.eas.dto.iot.raw.IotRawResponse;
import com.eseict.eas.dto.iot.raw.IotRawResult;
import com.eseict.eas.dto.iot.statisic.IotStatResult;
import com.google.gson.Gson;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

import static com.eseict.eas.config.constant.Constant.*;

@Service(value = "iotService")
public class IotService {


    private static final Logger logger = LoggerFactory.getLogger(IotService.class);


    @Autowired
    IotDao iotDao;

    public DataResponse getDeviceId() {

        String url = ConfFileInfo.get("iot.url");
        String last = ConfFileInfo.get("iot.device.list").replace("{CLIENT_CD}", ConfFileInfo.get("iot.device.clientCd"));

        String iotDeviceUrl = url + last;


        HttpConnection<String> connection = new HttpConnection<>();
        Map<String, Object> reqHeader = new HashMap<>();

        reqHeader.put("API-KEY", ConfFileInfo.get("iot.apiKey"));

        String iotResponse = null;

        try {
            iotResponse = connection.doGet(iotDeviceUrl, reqHeader, null);
        } catch (HttpConnectionException e) {
            throw new RuntimeException(e);
        }

        Gson gson = new Gson();
        IotDeviceResponse iotDeviceResponse = gson.fromJson(iotResponse, IotDeviceResponse.class);


        List<IotDeviceData> iotDeviceDataList = iotDeviceResponse.getData();
        List<IotDeviceResult> result = new ArrayList<>();

        Calendar c = Calendar.getInstance();
        String nowDtm = DateTimeUtil.toPlaneDateTimeString(c, DateTimeUtil.TYPE_DATE_TIME, true);
        String today = nowDtm.substring(0, 8);


        for (IotDeviceData iotDeviceData : iotDeviceDataList) {

            IotDeviceResult iotDeviceResult = new IotDeviceResult();
            List<IotRawResult> latestResult = getLatest(iotDeviceData.getDvcPkId(), iotDeviceData.getStreamInfos().get(0).getStreamPkId());
            List<IotRawResult> rawResults = getRaw(iotDeviceData.getDvcPkId(), iotDeviceData.getStreamInfos().get(0).getStreamPkId(),today,today);


            IotStandardResult standardResult = getStandard(iotDeviceData.getStreamInfos().get(0).getStreamId());

            String state = "";
            String stateNm = "";

            Double latest = 0.0;
            String latestDtm = "-";

            if(standardResult.getStreamId()!=null){
                if(latestResult.get(0).getCount()< standardResult.getCaution()){
                    stateNm = "일반";
                    state = "attention";
                }else if(standardResult.getAlert()>latestResult.get(0).getCount() && latestResult.get(0).getCount()>=standardResult.getCaution()){
                    stateNm = "주의";
                    state = "caution";
                }else if(standardResult.getSerious()>latestResult.get(0).getCount() && latestResult.get(0).getCount()>= standardResult.getAlert()){
                    stateNm = "경계";
                    state = "alert";
                }else{
                    stateNm = "위험";
                    state = "serious";
                }
            }else{
                stateNm = "없음";
                state = "none";
            }


            if(rawResults!=null){
                latest = rawResults.get(rawResults.size()-1).getCount();
                latestDtm = rawResults.get(rawResults.size()-1).getDate();
            }


            iotDeviceResult.setStreamPkId(iotDeviceData.getStreamInfos().get(0).getStreamPkId());
            iotDeviceResult.setDvcPkId(iotDeviceData.getDvcPkId());
            iotDeviceResult.setStreamId(iotDeviceData.getStreamInfos().get(0).getStreamId());
            iotDeviceResult.setDvcNm(iotDeviceData.getDvcNm());
            iotDeviceResult.setDvcSt(iotDeviceData.getDvcSt());
            iotDeviceResult.setCoordx(iotDeviceData.getCoordx());
            iotDeviceResult.setCoordy(iotDeviceData.getCoordy());
            iotDeviceResult.setLatest(latest);
            iotDeviceResult.setLatestDtm(latestDtm);
            iotDeviceResult.setState(state);
            iotDeviceResult.setStateNm(stateNm);
            iotDeviceResult.setLocate(iotDeviceData.getLocateDetail());
            iotDeviceResult.setUpdDtm(iotDeviceData.getUpdDtm());
            iotDeviceResult.setClientCd(iotDeviceData.getClientCd());

            result.add(iotDeviceResult);

        }

        DataResponse dataResponse = new DataResponse(iotDeviceResponse.getResponseCode(), iotDeviceResponse.getResponseMessage(), Integer.parseInt(iotDeviceResponse.getPageInfo().getTotalRows()), result);

        return dataResponse;

    }

    public List<IotStatResult> getStat(
            String dvcPkId, String streamPkId,
            String startDtm, String endDtm, String day) {


        List<IotRawResult> rawData = getRaw(dvcPkId, streamPkId, startDtm, endDtm);

        Map<String, List<IotStatResult>> statisticsMap = new HashMap<>();
        rawData.forEach(data -> {
            Double measure = data.getCount();

            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(YEAR_TO_SECOND_DASH);
            LocalDateTime keyDate;
            if (data.getDate().equals("-")) {
                return;
            } else {
                keyDate = LocalDateTime.parse(data.getDate(), formatter);
            }

            String key = "";
            String subKey = "";
            if (day.equals(DAY)) {
                key = keyDate.format(DateTimeFormatter.ofPattern(YEAR_TO_DAY));
            } else {
                key = keyDate.format(DateTimeFormatter.ofPattern(YEAR_TO_HOUR));
            }

            subKey = keyDate.format(DateTimeFormatter.ofPattern(YEAR_TO_MILLIS));

            IotStatResult stat = new IotStatResult(subKey, measure);

            List<IotStatResult> statisticsResponses = statisticsMap.get(key);

            if (statisticsResponses == null) {

                statisticsResponses = new ArrayList<>();
                statisticsMap.put(key, statisticsResponses);
            }
            statisticsResponses.add(stat);
        });

        List<IotStatResult> collectedStatistics = statisticsMap.entrySet().stream().map(stat -> {
            String key = stat.getKey();
            List<IotStatResult> value = stat.getValue();
            double sum = 0.0;
            for (IotStatResult v : value) {
                sum += v.getCount();
            }
            double average = sum / value.size();  // 평균 계산
            return new IotStatResult(key, average);
        }).collect(Collectors.toList());

        Collections.sort(collectedStatistics);
        Collections.reverse(collectedStatistics);
//        for ( IotRawResult r : rawData){
//            System.out.println("r = " + r);
//        }

//        return result;
        return collectedStatistics;
    }

    public List<IotRawResult> getRaw(
            String dvcPkId, String streamPkId,
            String startDtm, String endDtm) {

        String url = ConfFileInfo.get("iot.url");
        String last = ConfFileInfo.get("iot.raw.list")
                .replace("{dvcPkId}", dvcPkId)
                .replace("{streamPkId}", streamPkId);

        String statUrl = url + last;

        HttpConnection<String> connection = new HttpConnection<>();
        Map<String, Object> reqHeader = new HashMap<>();
        Map<String, Object> reqParam = new HashMap<>();

        reqHeader.put("API-KEY", ConfFileInfo.get("iot.apiKey"));

        if (!startDtm.isEmpty() && !endDtm.isEmpty()) {

            reqParam.put("startDtm", startDtm + "000000000");
            reqParam.put("endDtm", endDtm + "235959999");

        }

        String iotRawResponse = null;

        try {
            if (!startDtm.isEmpty() && !endDtm.isEmpty()) {
                iotRawResponse = connection.doGet(statUrl, reqHeader, reqParam);
            } else {
                iotRawResponse = connection.doGet(statUrl, reqHeader, null);
            }
        } catch (HttpConnectionException e) {
            throw new RuntimeException(e);
        }

        Gson gson = new Gson();

        IotRawResponse iotRawDataResponse = gson.fromJson(iotRawResponse, IotRawResponse.class);

        List<Object> iotrawDataList = new ArrayList<>();
        if(iotRawDataResponse.getData()!=null ){
            iotrawDataList = iotRawDataResponse.getData().getData();
        }
        List<IotRawResult> result = new ArrayList<>();


        if(iotrawDataList!=null && iotrawDataList.size()>0){
            for (Object iotRawData : iotrawDataList) {
                List<Object> temp = (List<Object>) iotRawData;
                Long dtm1 = ((Double) temp.get(0)).longValue();
                Double count = 0.0;
                if(String.valueOf(temp.get(1)).contains(",")){
                   String s = ((String.valueOf(temp.get(1)).split(",")))[0];
                   count = Double.parseDouble(s);
                } else {
                    count = Double.parseDouble(String.valueOf(temp.get(1)));
                }

                IotRawResult iotRawResult = new IotRawResult();
                iotRawResult.setDate(setDateForm(dtm1));
                iotRawResult.setCount(count);

                result.add(iotRawResult);


            }
        }else{
            result.add(new IotRawResult("-",0.0));
        }


        return result;
    }

    public List<IotRawResult> getLatest(
            String dvcPkId,
            String streamPkId
    ) {
        String url = ConfFileInfo.get("iot.url");
        String last = ConfFileInfo.get("iot.latest.list")
                .replace("{dvcPkId}", dvcPkId)
                .replace("{streamPkId}", streamPkId);

        String statUrl = url + last;

        HttpConnection<String> connection = new HttpConnection<>();
        Map<String, Object> reqHeader = new HashMap<>();
        Map<String, Object> reqParam = new HashMap<>();

        reqHeader.put("API-KEY", ConfFileInfo.get("iot.apiKey"));


        String iotRawResponse = null;

        try {
            iotRawResponse = connection.doGet(statUrl, reqHeader, null);
        } catch (HttpConnectionException e) {
            throw new RuntimeException(e);
        }

        Gson gson = new Gson();

        IotRawResponse iotRawDataResponse = gson.fromJson(iotRawResponse, IotRawResponse.class);

        List<Object> iotrawDataList = iotRawDataResponse.getData().getData();
        List<IotRawResult> result = new ArrayList<>();
        IotRawResult iotRawResult = new IotRawResult();


        if (iotrawDataList != null) {
            for (Object iotRawData : iotrawDataList) {
                List<Object> temp = (List<Object>) iotRawData;
                Long dtm1 = ((Double) temp.get(0)).longValue();
                String value = String.valueOf(temp.get(1));
                if (value.contains(",")) {
                    value = value.split(",")[0];
                }
                Double count = Double.parseDouble(value);


                iotRawResult.setDate(setDateForm(dtm1));
                iotRawResult.setCount(count);

            }
        } else {
            iotRawResult.setDate("-");
            iotRawResult.setCount(0.0);
        }


        result.add(iotRawResult);

        return result;

    }

    public IotStandardResult getStandard(String sensorId){

        List<EventConfInfo> sensorStandardList = iotDao.getStandard(sensorId);

        IotStandardResult iotStandardResult = new IotStandardResult();

        if(sensorStandardList.size()>0){
            iotStandardResult.setStreamId(sensorId);
            iotStandardResult.setCaution(sensorStandardList.get(0).getLevel1On());
            iotStandardResult.setAlert(sensorStandardList.get(0).getLevel3On());
            iotStandardResult.setSerious(sensorStandardList.get(0).getLevel5On());
        }

        return iotStandardResult;
    }




    public String setDateForm(Long date) {
        Date strDate = new Date(date);

        SimpleDateFormat sdf = new SimpleDateFormat("YYYY-MM-dd HH:mm:ss");
        sdf.setTimeZone(TimeZone.getTimeZone("Asia/Seoul"));

        return sdf.format(strDate);
    }

    public Workbook getIotExcel(String[] dvcPkId, String[] streamPkId, String[] dvcName) {

        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(YEAR_TO_DAY);
        String endDate = now.format(formatter);
        LocalDateTime startDateParse = now.minusYears(1);
        String startDate = startDateParse.format(formatter);

        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern(YEAR_TO_DAY_DASH);
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern(YEAR_TO_MINUTES_DASH);

        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("시간별 통계");
        Sheet secondSheet = workbook.createSheet("월별 통계");

        Row headerRow = sheet.createRow(0);
        Row secondHeaderRow = secondSheet.createRow(0);

        CellStyle cellCenter = workbook.createCellStyle();
        cellCenter.setAlignment(HorizontalAlignment.CENTER);
        cellCenter.setVerticalAlignment(VerticalAlignment.CENTER);

        for (int i = 13; i <= 17; i++) {
            sheet.setColumnWidth(i, 312 * 15);
            secondSheet.setColumnWidth(i, 312 * 15);
        }

        for (int i = 0; i < dvcPkId.length; i++) {
            String currentDvcPkId = dvcPkId[i];
            String currentStreamPkId = streamPkId[i];
            String currentDvcName = dvcName[i];

            List<IotStatResult> statResultsByTime = getStat(currentDvcPkId, currentStreamPkId, startDate, endDate, TIME);
            List<IotStatResult> statResultsByDay = getStat(currentDvcPkId, currentStreamPkId, startDate, endDate, DAY);
            headerRow.createCell(i + 1).setCellValue(currentDvcName);
            secondHeaderRow.createCell(i + 1).setCellValue(currentDvcName);

            Cell headerCell = headerRow.createCell(i + 1);
            headerCell.setCellValue(currentDvcName);
            headerCell.setCellStyle(cellCenter);

            Cell secondHeaderCell = secondHeaderRow.createCell(i + 1);
            secondHeaderCell.setCellValue(currentDvcName);
            secondHeaderCell.setCellStyle(cellCenter);


            int rowIndex = 1;
            sheet.setColumnWidth(0, 312 * 15);
            for (IotStatResult statResult : statResultsByTime) {
                Row dataRow = sheet.getRow(rowIndex);
                if (dataRow == null) {
                    dataRow = sheet.createRow(rowIndex);
                }

                Cell dateCell = dataRow.createCell(0);
                LocalDateTime dateTime = LocalDateTime.parse(statResult.getDate(), DateTimeFormatter.ofPattern(YEAR_TO_HOUR));
                dateCell.setCellValue(dateTime.format(dateTimeFormatter));
                dateCell.setCellStyle(cellCenter);

                Cell countCell = dataRow.createCell(i + 1);
                double count = statResult.getCount();
                countCell.setCellValue(Math.round(count * 10.0) / 10.0+"m");
                countCell.setCellStyle(cellCenter);


                rowIndex++;
            }

            int secondRowIndex = 1;
            secondSheet.setColumnWidth(0, 256 * 15);
            for (IotStatResult statResult : statResultsByDay) {
                Row dataRow = secondSheet.getRow(secondRowIndex);
                if (dataRow == null) {
                    dataRow = secondSheet.createRow(secondRowIndex);
                }

                Cell dateCell = dataRow.createCell(0);
                LocalDate date = LocalDate.parse(statResult.getDate(), DateTimeFormatter.ofPattern(YEAR_TO_DAY));
                dateCell.setCellValue(date.format(dateFormatter));
                dateCell.setCellStyle(cellCenter);

                Cell countCell = dataRow.createCell(i + 1);
                double count = statResult.getCount();
                countCell.setCellValue(Math.round(count * 10.0) / 10.0+"m");
                countCell.setCellStyle(cellCenter);


                secondRowIndex++;
            }
        }

        return workbook;
    }
}
