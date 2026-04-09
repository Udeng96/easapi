package com.eseict.eas.util;


import org.apache.hc.client5.http.classic.methods.HttpGet;
import org.apache.hc.client5.http.classic.methods.HttpPost;
import org.apache.hc.client5.http.entity.UrlEncodedFormEntity;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.CloseableHttpResponse;
import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.core5.http.*;
import org.apache.hc.core5.http.io.entity.EntityUtils;
import org.apache.hc.core5.http.io.entity.StringEntity;
import org.apache.hc.core5.http.message.BasicHeader;
import org.apache.hc.core5.http.message.BasicNameValuePair;
import org.apache.hc.core5.util.TimeValue;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

public class HttpClient {

    public static String doGet(String url, Map<String, String> requestHeader, Map<String, String> paramMap){
        String result = "";
        try (CloseableHttpClient httpclient = HttpClients.createDefault()) {
            if(paramMap != null){
                if(!url.endsWith("?")){
                    url += "?";
                }
                Iterator<String> reqParamKeys = paramMap.keySet().iterator();
                while(reqParamKeys.hasNext()){
                    String key = reqParamKeys.next();
                    url += key + "=" + paramMap.get(key) + "&";
                }

                if(url.endsWith("&")){
                    url = url.substring(0, url.length() - 1);
                }
            }


            HttpGet httpGet = new HttpGet(url);
            if(requestHeader != null){
                requestHeader.forEach((key, value) -> {
                    httpGet.setHeader(new BasicHeader(key, value));
                });
            }



            try (CloseableHttpResponse response1 = httpclient.execute(httpGet)) {
                HttpEntity entity1 = response1.getEntity();
                result = EntityUtils.toString(entity1);
            } catch (ParseException e) {
                e.printStackTrace();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }

    public static String doGet(String url, Map<String, String> requestHeader){
        String result = "";
        try (CloseableHttpClient httpclient = HttpClients.createDefault()) {
            HttpGet httpGet = new HttpGet(url);
            if(requestHeader != null){
                requestHeader.forEach((key, value) -> {
                    httpGet.setHeader(new BasicHeader(key, value));
                });
            }

            try (CloseableHttpResponse response1 = httpclient.execute(httpGet)) {
                HttpEntity entity1 = response1.getEntity();
                result = EntityUtils.toString(entity1);
            } catch (ParseException e) {
                e.printStackTrace();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }

    public static String doPost(String url, Map<String, String> requestHeader, Map<String, String> requestParam){
        String result = "";
//        try (CloseableHttpClient httpclient = HttpClients.createDefault()) {
        try (final CloseableHttpClient httpclient = HttpClients.custom()
                .evictExpiredConnections()
                .evictIdleConnections(TimeValue.ofSeconds(5))
                .setKeepAliveStrategy((httpResponse, httpContext) -> TimeValue.of(3, TimeUnit.SECONDS))
                .build()) {
            HttpPost httpPost = new HttpPost(url);
            if(requestHeader != null){
                requestHeader.forEach((key, value) -> {
                    httpPost.setHeader(new BasicHeader(key, value));
                });
            }


            List<NameValuePair> nvps = new ArrayList<>();
            if(requestParam != null){
                requestParam.forEach((key, value) -> {
                    nvps.add(new BasicNameValuePair(key, value));
                });
            }


            httpPost.setEntity(new UrlEncodedFormEntity(nvps));

            try (CloseableHttpResponse response2 = httpclient.execute(httpPost)) {
                HttpEntity entity2 = response2.getEntity();
                result = EntityUtils.toString(entity2);
            } catch (ParseException e) {
                e.printStackTrace();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }

    public static String doPost(String url, Map<String, String> requestHeader, String requestParam){
        String result = "";
        try (final CloseableHttpClient httpclient = HttpClients.custom()
                .evictExpiredConnections()
                .evictIdleConnections(TimeValue.ofSeconds(5))
                .setKeepAliveStrategy((httpResponse, httpContext) -> TimeValue.of(3, TimeUnit.SECONDS))
                .build()) {
            HttpPost httpPost = new HttpPost(url);
            if(requestHeader != null){
                requestHeader.forEach((key, value) -> {
                    httpPost.setHeader(new BasicHeader(key, value));
                });
            }

            StringEntity stringBody = new StringEntity(requestParam, Charset.forName("UTF-8"));
            httpPost.setEntity(stringBody);

            try (CloseableHttpResponse response2 = httpclient.execute(httpPost)) {
                HttpEntity entity2 = response2.getEntity();
                result = EntityUtils.toString(entity2);
            } catch (ParseException e) {
                e.printStackTrace();
            }

        }catch(Exception e){
            e.printStackTrace();
        }
        return result;
    }
}
