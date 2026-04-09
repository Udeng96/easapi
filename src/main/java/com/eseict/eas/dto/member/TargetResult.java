package com.eseict.eas.dto.member;

import java.util.List;

public class TargetResult {

    String groupId;
    String groupNm;

    List<OrganResult> organList;

    public TargetResult(String groupId, String groupNm, List<OrganResult> organList) {
        this.groupId = groupId;
        this.groupNm = groupNm;
        this.organList = organList;
    }

    public TargetResult() {
    }

    public String getGroupId() {
        return groupId;
    }

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    public String getGroupNm() {
        return groupNm;
    }

    public void setGroupNm(String groupNm) {
        this.groupNm = groupNm;
    }

    public List<OrganResult> getOrganList() {
        return organList;
    }

    public void setOrganList(List<OrganResult> organList) {
        this.organList = organList;
    }

    @Override
    public String toString() {
        return "TargetResult{" +
                "groupId='" + groupId + '\'' +
                ", groupNm='" + groupNm + '\'' +
                ", organList=" + organList +
                '}';
    }
}
