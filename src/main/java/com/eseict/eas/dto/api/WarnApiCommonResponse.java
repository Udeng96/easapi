package com.eseict.eas.dto.api;

import java.util.List;

public class WarnApiCommonResponse {
    WarnResponse response;

    public WarnApiCommonResponse() {
    }

    public WarnApiCommonResponse(WarnResponse warnResponse) {
        this.response = warnResponse;
    }

    public WarnResponse getWarnResponse() {
        return response;
    }

    public void setWarnResponse(WarnResponse warnResponse) {
        this.response = warnResponse;
    }

    @Override
    public String toString() {
        return "WarnApiCommonResponse{" +
                "warnResponse=" + response +
                '}';
    }

    public class WarnResponse {
        WarnHeader header;
        WarnBody body;

        public WarnResponse() {
        }

        public WarnResponse(WarnHeader warnHeader, WarnBody warnBody) {
            this.header = warnHeader;
            this.body = warnBody;
        }

        public WarnHeader getWarnHeader() {
            return header;
        }

        public void setWarnHeader(WarnHeader warnHeader) {
            this.header = warnHeader;
        }

        public WarnBody getWarnBody() {
            return body;
        }

        public void setWarnBody(WarnBody warnBody) {
            this.body = warnBody;
        }

        @Override
        public String toString() {
            return "WarnResponse{" +
                    "warnHeader=" + header +
                    ", warnBody=" + body +
                    '}';
        }

        public class WarnHeader {
            private String resultCode;
            private String resultMsg;

            public WarnHeader() {
            }

            public WarnHeader(String resultCode, String resultMsg) {
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
                return "WarnHeader{" +
                        "resultCode='" + resultCode + '\'' +
                        ", resultMsg='" + resultMsg + '\'' +
                        '}';
            }
        }

        public class WarnBody {
            String dataType;
            WarnItems items;
            Integer pageNo;
            Integer numOfRows;
            Integer totalCount;


            public WarnBody() {
            }

            public WarnBody(String dataType, WarnItems warnItems, Integer pageNo, Integer numOfRows, Integer totalCount) {
                this.dataType = dataType;
                this.items = warnItems;
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

            public WarnItems getWarnItems() {
                return items;
            }

            public void setWarnItems(WarnItems warnItems) {
                this.items = warnItems;
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
                return "WarnBody{" +
                        "dataType='" + dataType + '\'' +
                        ", warnItems=" + items +
                        ", pageNo=" + pageNo +
                        ", numOfRows=" + numOfRows +
                        ", totalCount=" + totalCount +
                        '}';
            }

            public class WarnItems {
                List<WarnItem> item;

                public WarnItems() {
                }

                public WarnItems(List<WarnItem> warnItem) {
                    this.item = warnItem;
                }

                public List<WarnItem> getWarnItem() {
                    return item;
                }

                public void setWarnItem(List<WarnItem> warnItem) {
                    this.item = warnItem;
                }

                @Override
                public String toString() {
                    return "WarnItems{" +
                            "warnItem=" + item +
                            '}';
                }

                public class WarnItem {
                    String stnId; // 지역 이름
                    String title; // 제목 및 발효시간
                    String tmFc; // 발표시간
                    String tmSeq; // 발표 번호

                    public WarnItem() {
                    }

                    public WarnItem(String stnId, String title, String tmFc, String tmSeq) {
                        this.stnId = stnId;
                        this.title = title;
                        this.tmFc = tmFc;
                        this.tmSeq = tmSeq;
                    }

                    public String getStnId() {
                        return stnId;
                    }

                    public void setStnId(String stnId) {
                        this.stnId = stnId;
                    }

                    public String getTitle() {
                        return title;
                    }

                    public void setTitle(String title) {
                        this.title = title;
                    }

                    public String getTmFc() {
                        return tmFc;
                    }

                    public void setTmFc(String tmFc) {
                        this.tmFc = tmFc;
                    }

                    public String getTmSeq() {
                        return tmSeq;
                    }

                    public void setTmSeq(String tmSeq) {
                        this.tmSeq = tmSeq;
                    }

                    @Override
                    public String toString() {
                        return "WarnItem{" +
                                "stnId='" + stnId + '\'' +
                                ", title='" + title + '\'' +
                                ", tmFc='" + tmFc + '\'' +
                                ", tmSeq='" + tmSeq + '\'' +
                                '}';
                    }
                }


            }
        }


    }
}
