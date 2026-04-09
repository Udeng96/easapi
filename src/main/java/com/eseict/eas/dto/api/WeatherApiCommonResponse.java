package com.eseict.eas.dto.api;

import java.util.List;

public class WeatherApiCommonResponse {
    Response response;

    public WeatherApiCommonResponse() {
    }

    public WeatherApiCommonResponse(Response response) {
        this.response = response;
    }

    public Response getResponse() {
        return response;
    }

    public void setResponse(Response response) {
        this.response = response;
    }

    @Override
    public String toString() {
        return "WeatherApiCommonResponse{" +
                "response=" + response +
                '}';
    }

    public class Response{
        Header header;
        Body body;

        public Response() {
        }

        public Response(Header header, Body body) {
            this.header = header;
            this.body = body;
        }

        public Header getHeader() {
            return header;
        }

        public void setHeader(Header header) {
            this.header = header;
        }

        public Body getBody() {
            return body;
        }

        public void setBody(Body body) {
            this.body = body;
        }

        @Override
        public String toString() {
            return "Response{" +
                    "header=" + header +
                    ", body=" + body +
                    '}';
        }

        public class Header{
            String resultCode;
            String resultMsg;

            public Header() {
            }

            public Header(String resultCode, String resultMsg) {
                this.resultCode = resultCode;
                this.resultMsg = resultMsg;
            }

            public String getResultCode() {
                return resultCode;
            }

            public void setResultCode(String resultCode) {
                this.resultCode = resultCode;
            }

            public String getResultMsg() {
                return resultMsg;
            }

            public void setResultMsg(String resultMsg) {
                this.resultMsg = resultMsg;
            }

            @Override
            public String toString() {
                return "Header{" +
                        "resultCode='" + resultCode + '\'' +
                        ", resultMsg='" + resultMsg + '\'' +
                        '}';
            }
        }

        public class Body{
            String dataType;
            Items items;
            Integer pageNo;
            Integer numOfRows;
            Integer totalCount;

            public Body() {
            }

            public Body(String dataType, Items items, Integer pageNo, Integer numOfRows, Integer totalCount) {
                this.dataType = dataType;
                this.items = items;
                this.pageNo = pageNo;
                this.numOfRows = numOfRows;
                this.totalCount = totalCount;
            }

            public String getDataType() {
                return dataType;
            }

            public void setDataType(String dataType) {
                this.dataType = dataType;
            }

            public Items getItems() {
                return items;
            }

            public void setItems(Items items) {
                this.items = items;
            }

            public Integer getPageNo() {
                return pageNo;
            }

            public void setPageNo(Integer pageNo) {
                this.pageNo = pageNo;
            }

            public Integer getNumOfRows() {
                return numOfRows;
            }

            public void setNumOfRows(Integer numOfRows) {
                this.numOfRows = numOfRows;
            }

            public Integer getTotalCount() {
                return totalCount;
            }

            public void setTotalCount(Integer totalCount) {
                this.totalCount = totalCount;
            }

            @Override
            public String toString() {
                return "Body{" +
                        "dataType='" + dataType + '\'' +
                        ", items=" + items +
                        ", pageNo=" + pageNo +
                        ", numOfRows=" + numOfRows +
                        ", totalCount=" + totalCount +
                        '}';
            }

            public class Items{
                List<Item> item;
                public Items(){

                }
                public Items(List<Item> item) {
                    this.item = item;
                }

                public List<Item> getItem() {
                    return item;
                }

                public void setItem(List<Item> item) {
                    this.item = item;
                }

                @Override
                public String toString() {
                    return "Items{" +
                            "item=" + item +
                            '}';
                }

                public class Item{
                    String baseDate;
                    String baseTime;
                    String category;
                    String fcstDate;
                    String fcstTime;
                    String fcstValue;
                    String obsrValue;
                    Integer nx;
                    Integer ny;

                    public Item() {
                    }

                    public Item(String baseDate, String baseTime, String category, String fcstDate, String fcstTime, String fcstValue, String obsrValue, Integer nx, Integer ny) {
                        this.baseDate = baseDate;
                        this.baseTime = baseTime;
                        this.category = category;
                        this.fcstDate = fcstDate;
                        this.fcstTime = fcstTime;
                        this.fcstValue = fcstValue;
                        this.obsrValue = obsrValue;
                        this.nx = nx;
                        this.ny = ny;
                    }

                    public String getBaseDate() {
                        return baseDate;
                    }

                    public void setBaseDate(String baseDate) {
                        this.baseDate = baseDate;
                    }

                    public String getBaseTime() {
                        return baseTime;
                    }

                    public void setBaseTime(String baseTime) {
                        this.baseTime = baseTime;
                    }

                    public String getCategory() {
                        return category;
                    }

                    public void setCategory(String category) {
                        this.category = category;
                    }

                    public String getFcstDate() {
                        return fcstDate;
                    }

                    public void setFcstDate(String fcstDate) {
                        this.fcstDate = fcstDate;
                    }

                    public String getFcstTime() {
                        return fcstTime;
                    }

                    public void setFcstTime(String fcstTime) {
                        this.fcstTime = fcstTime;
                    }

                    public String getFcstValue() {
                        return fcstValue;
                    }

                    public void setFcstValue(String fcstValue) {
                        this.fcstValue = fcstValue;
                    }

                    public String getObsrValue() {
                        return obsrValue;
                    }

                    public void setObsrValue(String obsrValue) {
                        this.obsrValue = obsrValue;
                    }

                    public Integer getNx() {
                        return nx;
                    }

                    public void setNx(Integer nx) {
                        this.nx = nx;
                    }

                    public Integer getNy() {
                        return ny;
                    }

                    public void setNy(Integer ny) {
                        this.ny = ny;
                    }

                    @Override
                    public String toString() {
                        return "Item{" +
                                "baseDate='" + baseDate + '\'' +
                                ", baseTime='" + baseTime + '\'' +
                                ", category='" + category + '\'' +
                                ", fcstDate='" + fcstDate + '\'' +
                                ", fcstTime='" + fcstTime + '\'' +
                                ", fcstValue='" + fcstValue + '\'' +
                                ", obsrValue='" + obsrValue + '\'' +
                                ", nx=" + nx +
                                ", ny=" + ny +
                                '}';
                    }
            }


            }
        }


    }




}
