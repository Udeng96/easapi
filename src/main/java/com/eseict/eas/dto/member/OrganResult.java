package com.eseict.eas.dto.member;

import java.util.List;

public class OrganResult {

    String organId;
    String organNm;
    List<MemberDto> memberList;


    public OrganResult(String organId, String organNm, List<MemberDto> memberList) {
        this.organId = organId;
        this.organNm = organNm;
        this.memberList = memberList;
    }

    public OrganResult() {
    }

    public String getOrganId() {
        return organId;
    }

    public void setOrganId(String organId) {
        this.organId = organId;
    }

    public String getOrganNm() {
        return organNm;
    }

    public void setOrganNm(String organNm) {
        this.organNm = organNm;
    }

    public List<MemberDto> getMemberList() {
        return memberList;
    }

    public void setMemberList(List<MemberDto> memberList) {
        this.memberList = memberList;
    }

    @Override
    public String toString() {
        return "OrganResult{" +
                "organId='" + organId + '\'' +
                ", organNm='" + organNm + '\'' +
                ", memberList=" + memberList +
                '}';
    }

}
