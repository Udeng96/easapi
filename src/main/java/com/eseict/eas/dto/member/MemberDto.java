package com.eseict.eas.dto.member;

public class MemberDto {
    String userId;

    String userLoginId ;

    String userName;

    String cpNo;

    String email;

    String departmentId;

    String departmentName;

    String encryptKey;


    public MemberDto(String userId, String userLoginId, String userName, String cpNo, String email, String departmentId, String departmentName, String encryptKey) {
        this.userId = userId;
        this.userLoginId = userLoginId;
        this.userName = userName;
        this.cpNo = cpNo;
        this.email = email;
        this.departmentId = departmentId;
        this.departmentName = departmentName;
        this.encryptKey = encryptKey;
    }

    public MemberDto() {
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserLoginId() {
        return userLoginId;
    }

    public void setUserLoginId(String userLoginId) {
        this.userLoginId = userLoginId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getCpNo() {
        return cpNo;
    }

    public void setCpNo(String cpNo) {
        this.cpNo = cpNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(String departmentId) {
        this.departmentId = departmentId;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    public String getEncryptKey() {
        return encryptKey;
    }

    public void setEncryptKey(String encryptKey) {
        this.encryptKey = encryptKey;
    }

    @Override
    public String toString() {
        return "MemberDto{" +
                "userId='" + userId + '\'' +
                ", userLoginId='" + userLoginId + '\'' +
                ", userName='" + userName + '\'' +
                ", cpNo='" + cpNo + '\'' +
                ", email='" + email + '\'' +
                ", departmentId='" + departmentId + '\'' +
                ", departmentName='" + departmentName + '\'' +
                ", encryptKey='" + encryptKey + '\'' +
                '}';
    }
}
