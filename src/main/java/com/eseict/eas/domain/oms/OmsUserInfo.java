package com.eseict.eas.domain.oms;


import org.hibernate.annotations.Formula;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="OmsUserInfo")
@Table(name = "OMS_USER_INFO", schema = "rino_oms")
public class OmsUserInfo {

    @Id
    @Column(name = "USER_ID", length = 22)
    private String userId;

    @Column(name = "CP_NO", length = 50)
    private String cpNo;

    @Column(name = "DPT_ID", length = 22)
    private String dptId;

    @Column(name = "EMAIL", length = 100)
    private String email;

    @Column(name = "ENCRYPT_KEY", length = 50)
    private String encryptKey;

    @Column(name = "EVENT_ROLE_ID", length = 50)
    private String eventRoleId;

    @Column(name = "FIST_REG_DTM", length = 17)
    private String fistRegDtm;

    @Column(name = "LOGIN_BLOCK_FLAG", length = 5)
    private String loginBlockFlag;

    @Column(name = "LOGIN_TRY_COUNT")
    private Integer loginTryCount;

    @Column(name = "LST_LOGIN_DTM",length = 17)
    private String lstLoginDtm;

    @Column(name = "PHONE", length = 50)
    private String phone;

    @Column(name = "ROLE_ID",length = 22)
    private String roleId;

    @Column(name = "USER_TYPE", length = 50)
    private String userType;

    @Column(name = "USER_ZN", length = 50)
    private String userZn;

    @Column(name = "USE_YN", length = 1)
    private String useYn;

    @Column(name = "USER_LOGIN_ID",length = 50)
    private String userLoginId;

    @Column(name = "USER_LOGIN_PSWD",length = 64)
    private String userLoginPswd;

    @Column(name = "USER_NM",length = 50)
    private String userNm;

    @Formula("(SELECT D.dpt_nm FROM rino_oms.OMS_USER_INFO U JOIN rino_oms.OMS_DPT_INFO D on U.dpt_id = d.dpt_id WHERE U.user_id = USER_ID)")
    private String departmentName;


    public OmsUserInfo(String userId, String cpNo, String dptId, String email, String encryptKey, String eventRoleId, String fistRegDtm, String loginBlockFlag, Integer loginTryCount, String lstLoginDtm, String phone, String roleId, String userType, String userZn, String useYn, String userLoginId, String userLoginPswd, String userNm, String departmentName) {
        this.userId = userId;
        this.cpNo = cpNo;
        this.dptId = dptId;
        this.email = email;
        this.encryptKey = encryptKey;
        this.eventRoleId = eventRoleId;
        this.fistRegDtm = fistRegDtm;
        this.loginBlockFlag = loginBlockFlag;
        this.loginTryCount = loginTryCount;
        this.lstLoginDtm = lstLoginDtm;
        this.phone = phone;
        this.roleId = roleId;
        this.userType = userType;
        this.userZn = userZn;
        this.useYn = useYn;
        this.userLoginId = userLoginId;
        this.userLoginPswd = userLoginPswd;
        this.userNm = userNm;
        this.departmentName = departmentName;
    }

    public OmsUserInfo() {
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getCpNo() {
        return cpNo;
    }

    public void setCpNo(String cpNo) {
        this.cpNo = cpNo;
    }

    public String getDptId() {
        return dptId;
    }

    public void setDptId(String dptId) {
        this.dptId = dptId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEncryptKey() {
        return encryptKey;
    }

    public void setEncryptKey(String encryptKey) {
        this.encryptKey = encryptKey;
    }

    public String getEventRoleId() {
        return eventRoleId;
    }

    public void setEventRoleId(String eventRoleId) {
        this.eventRoleId = eventRoleId;
    }

    public String getFistRegDtm() {
        return fistRegDtm;
    }

    public void setFistRegDtm(String fistRegDtm) {
        this.fistRegDtm = fistRegDtm;
    }

    public String getLoginBlockFlag() {
        return loginBlockFlag;
    }

    public void setLoginBlockFlag(String loginBlockFlag) {
        this.loginBlockFlag = loginBlockFlag;
    }

    public Integer getLoginTryCount() {
        return loginTryCount;
    }

    public void setLoginTryCount(Integer loginTryCount) {
        this.loginTryCount = loginTryCount;
    }

    public String getLstLoginDtm() {
        return lstLoginDtm;
    }

    public void setLstLoginDtm(String lstLoginDtm) {
        this.lstLoginDtm = lstLoginDtm;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getUserZn() {
        return userZn;
    }

    public void setUserZn(String userZn) {
        this.userZn = userZn;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public String getUserLoginId() {
        return userLoginId;
    }

    public void setUserLoginId(String userLoginId) {
        this.userLoginId = userLoginId;
    }

    public String getUserLoginPswd() {
        return userLoginPswd;
    }

    public void setUserLoginPswd(String userLoginPswd) {
        this.userLoginPswd = userLoginPswd;
    }

    public String getUserNm() {
        return userNm;
    }

    public void setUserNm(String userNm) {
        this.userNm = userNm;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    @Override
    public String toString() {
        return "OmsUserInfo{" +
                "userId='" + userId + '\'' +
                ", cpNo='" + cpNo + '\'' +
                ", dptId='" + dptId + '\'' +
                ", email='" + email + '\'' +
                ", encryptKey='" + encryptKey + '\'' +
                ", eventRoleId='" + eventRoleId + '\'' +
                ", fistRegDtm='" + fistRegDtm + '\'' +
                ", loginBlockFlag='" + loginBlockFlag + '\'' +
                ", loginTryCount=" + loginTryCount +
                ", lstLoginDtm='" + lstLoginDtm + '\'' +
                ", phone='" + phone + '\'' +
                ", roleId='" + roleId + '\'' +
                ", userType='" + userType + '\'' +
                ", userZn='" + userZn + '\'' +
                ", useYn='" + useYn + '\'' +
                ", userLoginId='" + userLoginId + '\'' +
                ", userLoginPswd='" + userLoginPswd + '\'' +
                ", userNm='" + userNm + '\'' +
                ", departmentName='" + departmentName + '\'' +
                '}';
    }
}
