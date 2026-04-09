package com.eseict.eas.domain.dw;

import com.eseict.eas.config.EasConstants;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "EQP_INFO", schema = EasConstants.DB_SCHEMA.H_DW)
public class EqpInfo {

    @Id
    @Column(name = "SEQ")
    private Integer seq;

    @Column(name = "EQP_CODE", length = 20)
    private String eqpCode;

    @Column(name = "GROUP_CODE", length = 4)
    private String groupCode;

    @Column(name= "SENSOR_CODE")
    private Integer sensorCode;

    @Column(name= "MODEL_CODE")
    private Integer modelCode;

    @Column(name = "COM_CODE")
    private Integer comCode;

    @Column(name = "CALC_CODE")
    private Integer calcCode;

    @Column(name = "SYS_ID", length = 3)
    private String sysId;

    @Column(name = "RAIN_ID", length = 3)
    private String rainId;

    @Column(name = "FLOW_ID", length = 3)
    private String flowId;

    @Column(name = "ALARM_ID", length = 3)
    private String alarmId;

    @Column(name = "EQP_NAME",length = 20)
    private String eqpName;

    @Column(name = "CONNECTION_INFO",length = 60)
    private String connectionInfo;

    @Column(name = "CONNECTION_PORT")
    private Integer connectionPort;

    @Column(name = "EQP_CONN_ID", length = 20)
    private String eqpConnId;

    @Column(name = "EQP_CONN_PASS", length = 20)
    private String eqpConnPass;

    @Column(name = "EQP_CONN_CMD", length = 5)
    private String eqpConnCmd;

    @Column(name = "EQP_CONN_TURM")
    private Integer eqpConnTurm;

    @Column(name = "VHF_USE")
    private String vhfUse;

    @Column(name = "LAST_CALL_TIME")
    private String lasCallTime;

    @Column(name = "LOG_COUNT")
    private Integer logCount;

    @Column(name = "SORT_INDEX")
    private Integer sortIndex;

    @Column(name = "EQP_STATE")
    private String eqpState;

    @Column(name = "EQP_LAT")
    private String eqpLat;

    @Column(name = "EQP_LON")
    private String eqpLon;

    @Column(name = "EQP_ADDRESS",length = 100)
    private String eqpAddress;

    @Column(name = "EQP_IMAGE_PATH",length = 200)
    private String eqpImagePath;

    @Column(name = "USABLE")
    private String usable;

    @Column(name = "REG_DATE")
    private String regDate;

    @Column(name = "MOD_DATE")
    private String modDate;

    @Column(name = "FIRM_VERSION",length = 100)
    private String firmVersion;

    public EqpInfo(Integer seq, String eqpCode, String groupCode, Integer sensorCode, Integer modelCode, Integer comCode, Integer calcCode, String sysId, String rainId, String flowId, String alarmId, String eqpName, String connectionInfo, Integer connectionPort, String eqpConnId, String eqpConnPass, String eqpConnCmd, Integer eqpConnTurm, String vhfUse, String lasCallTime, Integer logCount, Integer sortIndex, String eqpState, String eqpLat, String eqpLon, String eqpAddress, String eqpImagePath, String usable, String regDate, String modDate, String firmVersion) {
        this.seq = seq;
        this.eqpCode = eqpCode;
        this.groupCode = groupCode;
        this.sensorCode = sensorCode;
        this.modelCode = modelCode;
        this.comCode = comCode;
        this.calcCode = calcCode;
        this.sysId = sysId;
        this.rainId = rainId;
        this.flowId = flowId;
        this.alarmId = alarmId;
        this.eqpName = eqpName;
        this.connectionInfo = connectionInfo;
        this.connectionPort = connectionPort;
        this.eqpConnId = eqpConnId;
        this.eqpConnPass = eqpConnPass;
        this.eqpConnCmd = eqpConnCmd;
        this.eqpConnTurm = eqpConnTurm;
        this.vhfUse = vhfUse;
        this.lasCallTime = lasCallTime;
        this.logCount = logCount;
        this.sortIndex = sortIndex;
        this.eqpState = eqpState;
        this.eqpLat = eqpLat;
        this.eqpLon = eqpLon;
        this.eqpAddress = eqpAddress;
        this.eqpImagePath = eqpImagePath;
        this.usable = usable;
        this.regDate = regDate;
        this.modDate = modDate;
        this.firmVersion = firmVersion;
    }

    public EqpInfo() {
    }

    public Integer getSeq() {
        return seq;
    }

    public void setSeq(Integer seq) {
        this.seq = seq;
    }

    public String getEqpCode() {
        return eqpCode;
    }

    public void setEqpCode(String eqpCode) {
        this.eqpCode = eqpCode;
    }

    public String getGroupCode() {
        return groupCode;
    }

    public void setGroupCode(String groupCode) {
        this.groupCode = groupCode;
    }

    public Integer getSensorCode() {
        return sensorCode;
    }

    public void setSensorCode(Integer sensorCode) {
        this.sensorCode = sensorCode;
    }

    public Integer getModelCode() {
        return modelCode;
    }

    public void setModelCode(Integer modelCode) {
        this.modelCode = modelCode;
    }

    public Integer getComCode() {
        return comCode;
    }

    public void setComCode(Integer comCode) {
        this.comCode = comCode;
    }

    public Integer getCalcCode() {
        return calcCode;
    }

    public void setCalcCode(Integer calcCode) {
        this.calcCode = calcCode;
    }

    public String getSysId() {
        return sysId;
    }

    public void setSysId(String sysId) {
        this.sysId = sysId;
    }

    public String getRainId() {
        return rainId;
    }

    public void setRainId(String rainId) {
        this.rainId = rainId;
    }

    public String getFlowId() {
        return flowId;
    }

    public void setFlowId(String flowId) {
        this.flowId = flowId;
    }

    public String getAlarmId() {
        return alarmId;
    }

    public void setAlarmId(String alarmId) {
        this.alarmId = alarmId;
    }

    public String getEqpName() {
        return eqpName;
    }

    public void setEqpName(String eqpName) {
        this.eqpName = eqpName;
    }

    public String getConnectionInfo() {
        return connectionInfo;
    }

    public void setConnectionInfo(String connectionInfo) {
        this.connectionInfo = connectionInfo;
    }

    public Integer getConnectionPort() {
        return connectionPort;
    }

    public void setConnectionPort(Integer connectionPort) {
        this.connectionPort = connectionPort;
    }

    public String getEqpConnId() {
        return eqpConnId;
    }

    public void setEqpConnId(String eqpConnId) {
        this.eqpConnId = eqpConnId;
    }

    public String getEqpConnPass() {
        return eqpConnPass;
    }

    public void setEqpConnPass(String eqpConnPass) {
        this.eqpConnPass = eqpConnPass;
    }

    public String getEqpConnCmd() {
        return eqpConnCmd;
    }

    public void setEqpConnCmd(String eqpConnCmd) {
        this.eqpConnCmd = eqpConnCmd;
    }

    public Integer getEqpConnTurm() {
        return eqpConnTurm;
    }

    public void setEqpConnTurm(Integer eqpConnTurm) {
        this.eqpConnTurm = eqpConnTurm;
    }

    public String getVhfUse() {
        return vhfUse;
    }

    public void setVhfUse(String vhfUse) {
        this.vhfUse = vhfUse;
    }

    public String getLasCallTime() {
        return lasCallTime;
    }

    public void setLasCallTime(String lasCallTime) {
        this.lasCallTime = lasCallTime;
    }

    public Integer getLogCount() {
        return logCount;
    }

    public void setLogCount(Integer logCount) {
        this.logCount = logCount;
    }

    public Integer getSortIndex() {
        return sortIndex;
    }

    public void setSortIndex(Integer sortIndex) {
        this.sortIndex = sortIndex;
    }

    public String getEqpState() {
        return eqpState;
    }

    public void setEqpState(String eqpState) {
        this.eqpState = eqpState;
    }

    public String getEqpLat() {
        return eqpLat;
    }

    public void setEqpLat(String eqpLat) {
        this.eqpLat = eqpLat;
    }

    public String getEqpLon() {
        return eqpLon;
    }

    public void setEqpLon(String eqpLon) {
        this.eqpLon = eqpLon;
    }

    public String getEqpAddress() {
        return eqpAddress;
    }

    public void setEqpAddress(String eqpAddress) {
        this.eqpAddress = eqpAddress;
    }

    public String getEqpImagePath() {
        return eqpImagePath;
    }

    public void setEqpImagePath(String eqpImagePath) {
        this.eqpImagePath = eqpImagePath;
    }

    public String getUsable() {
        return usable;
    }

    public void setUsable(String usable) {
        this.usable = usable;
    }

    public String getRegDate() {
        return regDate;
    }

    public void setRegDate(String regDate) {
        this.regDate = regDate;
    }

    public String getModDate() {
        return modDate;
    }

    public void setModDate(String modDate) {
        this.modDate = modDate;
    }

    public String getFirmVersion() {
        return firmVersion;
    }

    public void setFirmVersion(String firmVersion) {
        this.firmVersion = firmVersion;
    }

    @Override
    public String toString() {
        return "eqpInfo{" +
                "seq=" + seq +
                ", eqpCode='" + eqpCode + '\'' +
                ", groupCode='" + groupCode + '\'' +
                ", sensorCode=" + sensorCode +
                ", modelCode=" + modelCode +
                ", comCode=" + comCode +
                ", calcCode=" + calcCode +
                ", sysId='" + sysId + '\'' +
                ", rainId='" + rainId + '\'' +
                ", flowId='" + flowId + '\'' +
                ", alarmId='" + alarmId + '\'' +
                ", eqpName='" + eqpName + '\'' +
                ", connectionInfo='" + connectionInfo + '\'' +
                ", connectionPort=" + connectionPort +
                ", eqpConnId='" + eqpConnId + '\'' +
                ", eqpConnPass='" + eqpConnPass + '\'' +
                ", eqpConnCmd='" + eqpConnCmd + '\'' +
                ", eqpConnTurm=" + eqpConnTurm +
                ", vhfUse='" + vhfUse + '\'' +
                ", lasCallTime=" + lasCallTime +
                ", logCount=" + logCount +
                ", sortIndex=" + sortIndex +
                ", eqpState='" + eqpState + '\'' +
                ", eqpLat='" + eqpLat + '\'' +
                ", eqpLon='" + eqpLon + '\'' +
                ", eqpAddress='" + eqpAddress + '\'' +
                ", eqpImagePath='" + eqpImagePath + '\'' +
                ", usable='" + usable + '\'' +
                ", regDate='" + regDate + '\'' +
                ", modDate='" + modDate + '\'' +
                ", firmVersion='" + firmVersion + '\'' +
                '}';
    }
}
