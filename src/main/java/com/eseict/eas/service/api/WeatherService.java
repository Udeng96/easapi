package com.eseict.eas.service.api;

import com.eseict.common.config.ConfFileInfo;
import com.eseict.common.datetime.DateTimeUtil;
import com.eseict.common.net.http.HttpConnection;
import com.eseict.common.net.http.HttpConnectionException;
import com.eseict.eas.dto.api.ForecastResponse;
import com.eseict.eas.dto.api.WarnApiCommonResponse;
import com.eseict.eas.dto.api.WarnInfoResponse;
import com.eseict.eas.dto.api.WeatherApiCommonResponse;
import com.eseict.eas.dto.common.DataResponse;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class WeatherService {

    private static final Logger _logger = LoggerFactory.getLogger(WeatherService.class);


    public DataResponse getForecastList() {
        Calendar c = Calendar.getInstance();
        String nowDtm = DateTimeUtil.toPlaneDateTimeString(c, DateTimeUtil.TYPE_DATE_TIME, true);
        String today = nowDtm.substring(0, 8);
        String baseTime = "0500";


        //기상 예보

        String apiBaseUrl = ConfFileInfo.get("api.weather.info")
                .replace("{BASE_DATE}", today)
                .replace("{BASE_TIME}", baseTime)
                .replace("{API_KEY}", ConfFileInfo.get("api.weather.key"))
                .replace("{NX}", ConfFileInfo.get("api.weather.grid.x"))
                .replace("{NY}", ConfFileInfo.get("api.weather.grid.y"));

        HttpConnection<String> connection = new HttpConnection<>();
        Map<String, Object> reqHeader = new HashMap<>();

        String apiResponse = null;
        try {
            apiResponse = connection.doGet(apiBaseUrl, reqHeader, null);
        } catch (HttpConnectionException e) {
            throw new RuntimeException(e);
        }

        Gson gson = new Gson();
        WeatherApiCommonResponse weatherApiCommonResponse = gson.fromJson(apiResponse, WeatherApiCommonResponse.class);
        List<WeatherApiCommonResponse.Response.Body.Items.Item> weatherItemList = weatherApiCommonResponse.getResponse().getBody().getItems().getItem();
        List<WeatherApiCommonResponse.Response.Body.Items.Item> filteredList = new ArrayList<>();

        //        오늘 날짜 것만 filtering
        for (WeatherApiCommonResponse.Response.Body.Items.Item item : weatherItemList) {
            if (today.equalsIgnoreCase(item.getFcstDate())) {
                filteredList.add(item);
            }
        }


        Map<String, ForecastResponse> timeMap = new HashMap<>();


        for (WeatherApiCommonResponse.Response.Body.Items.Item item : filteredList) {

            if (timeMap.get(item.getFcstTime()) == null) {
                timeMap.put(item.getFcstTime(), new ForecastResponse());
            }

            ForecastResponse forecastResponse = timeMap.get(item.getFcstTime());
            forecastResponse.setForecastDate(today);
            forecastResponse.setForecastTime(item.getFcstTime());
            if ("POP".equalsIgnoreCase(item.getCategory())) {
                forecastResponse.setPop(Double.parseDouble(item.getFcstValue()));
            } else if ("PTY".equalsIgnoreCase(item.getCategory())) {
                forecastResponse.setPty(Integer.parseInt(item.getFcstValue()));
                forecastResponse.setPtyName(forecastResponse.getPty());
            }
//            else if ("REH".equalsIgnoreCase(item.getCategory())){
//                forecastResponse.setReh(Double.parseDouble(item.getFcstValue()));
//            }
            else if ("SKY".equalsIgnoreCase(item.getCategory())) {
                forecastResponse.setSky(Integer.parseInt(item.getFcstValue()));
                forecastResponse.setSkyName(forecastResponse.getSky());
            } else if ("TMP".equalsIgnoreCase(item.getCategory())) {
                forecastResponse.setTmp(Double.parseDouble(item.getFcstValue()));
            } else if ("WSD".equalsIgnoreCase(item.getCategory())) {
                forecastResponse.setWsd(Double.parseDouble(item.getFcstValue()));
            }
        }

        ForecastResponse result = timeMap.get("0600");

        if (result.getTmp() != null && result.getTmp() != null){
            result.setWcf(result.getTmp(), result.getWsd());
        }


        List<ForecastResponse> list = new ArrayList<>(timeMap.values());
        list.sort(new Comparator<ForecastResponse>() {
            @Override
            public int compare(ForecastResponse o1, ForecastResponse o2) {
                return 0;
            }
        });

        DataResponse dataResponse = new DataResponse<>(weatherApiCommonResponse.getResponse().getHeader().getResultCode(), weatherApiCommonResponse.getResponse().getHeader().getResultMsg(), weatherApiCommonResponse.getResponse().getBody().getTotalCount(),list);



        return dataResponse;

    }

    public DataResponse getWarnInfoList() {
        Calendar c = Calendar.getInstance();
        String nowDtm = DateTimeUtil.toPlaneDateTimeString(c, DateTimeUtil.TYPE_DATE_TIME, true);
        String today = nowDtm.substring(0, 8);
//        String today = "20230519";

        List<WarnInfoResponse> list = new ArrayList<>();

        DataResponse dataResponse = new DataResponse();


        String apiBaseUrl = ConfFileInfo.get("api.weather.warn.info")
                .replace("{FROM_DATE}", today)
                .replace("{API_KEY}", ConfFileInfo.get("api.weather.key"))
                .replace("{STN}", ConfFileInfo.get("api.weather.warn.stn.id"));

        HttpConnection<String> connection = new HttpConnection<>();
        Map<String, Object> reqHeader = new HashMap<>();

        try {
            String apiResponse = connection.doGet(apiBaseUrl, reqHeader, null);

            Gson gson = new Gson();
            WarnApiCommonResponse warnApiCommonResponse = gson.fromJson(apiResponse, WarnApiCommonResponse.class);

            List<WarnApiCommonResponse.WarnResponse.WarnBody.WarnItems.WarnItem> warnItemList = new ArrayList<>();

            if (warnApiCommonResponse.getWarnResponse().getWarnBody() != null) {
                warnItemList = warnApiCommonResponse.getWarnResponse().getWarnBody().getWarnItems().getWarnItem();
            }

            WarnInfoResponse warnInfoResponse = new WarnInfoResponse();

            if (warnItemList != null && warnItemList.size() > 0) {
                warnInfoResponse.setFromDate(warnItemList.get(0).getTmFc());
                warnInfoResponse.setTitle(warnItemList.get(0).getTitle());
                dataResponse.setCode(warnApiCommonResponse.getWarnResponse().getWarnHeader().getResultCode());
                dataResponse.setMessage(warnApiCommonResponse.getWarnResponse().getWarnHeader().getResultMsg());
                dataResponse.setCount(warnApiCommonResponse.getWarnResponse().getWarnBody().getTotalCount());

            } else {
                warnInfoResponse.setTitle("특보 없음");
                warnInfoResponse.setFromDate(today);
                dataResponse.setCode("003");
                dataResponse.setMessage("NO RESULT");
                dataResponse.setCount(0);
            }


            list.add(warnInfoResponse);


            dataResponse.setData(list);

        } catch (HttpConnectionException e) {
            _logger.error(e.getMessage(), e);
        }

        return dataResponse;

    }

}
