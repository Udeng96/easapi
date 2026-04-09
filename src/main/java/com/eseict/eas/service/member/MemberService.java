package com.eseict.eas.service.member;


import com.eseict.common.config.ConfFileInfo;
import com.eseict.common.net.http.HttpConnection;
import com.eseict.common.net.http.HttpConnectionException;
import com.eseict.common.net.http.responseHandler.JsonToMapHandler;
import com.eseict.eas.dao.member.MemberDao;
import com.eseict.eas.domain.oms.OmsDptInfo;
import com.eseict.eas.domain.oms.OmsGrupInfo;
import com.eseict.eas.domain.oms.OmsOrganInfo;
import com.eseict.eas.dto.member.MemberDto;
import com.eseict.eas.dto.member.OrganResult;
import com.eseict.eas.dto.member.TargetResult;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class MemberService {

    @Autowired
    MemberDao memberDao;

    String cryptSystemKey = ConfFileInfo.get("cryptsvr.system.key");
    String cryptSystemSecret = ConfFileInfo.get("cryptsvr.system.secret");
    String cryptType = ConfFileInfo.get("cryptsvr.crypt.type");
    String cryptAddress = ConfFileInfo.getInstance().get("cryptsvr.api.address");
    String cryptDecrypt = ConfFileInfo.getInstance().get("cryptsvr.decrypt");

    private final static Logger logger = LoggerFactory.getLogger(MemberService.class);

    public List<OmsGrupInfo> getGroup() {
        return memberDao.getGrups();
    }

    public List<OmsOrganInfo> getOran() {
        return memberDao.getOrgans();
    }

    public List<MemberDto> getUsers(String dptId) {

        List<MemberDto> result = Lists.newArrayList();
//        List<MemberDto> userList = memberDao.getUsers();
        List<MemberDto> userList = memberDao.getUsersByOrgan(dptId);

        Map<String, Object> reqHeader = getReqHeaderMap();
        Map<String, Object> reqParam = new HashMap<>();

        Gson gson = new Gson();
        JsonToMapHandler handler = new JsonToMapHandler();
        HttpConnection<Map<String, Object>> httpConn = new HttpConnection(handler);

        result = userList.stream().map(user -> {

            MemberDto decryptUser = new MemberDto(user.getUserId(), user.getUserLoginId(), user.getUserName(), user.getCpNo(), user.getEmail(), user.getDepartmentId(), user.getDepartmentName(), user.getEncryptKey());

            List<Map<String, String>> cryptDataMapList = Lists.newArrayList();
            Map<String, String> cryptDataMap = Maps.newHashMap();
            cryptDataMap.put("userName", user.getUserName());
            cryptDataMap.put("cpNo", user.getCpNo());
            cryptDataMap.put("encryptKey", user.getEncryptKey());

            cryptDataMapList.add(cryptDataMap);

            reqParam.put("data", gson.toJson(cryptDataMapList));
            reqParam.put("encType", cryptType);

            try {
                Map<String, Object> resultMap = httpConn.doPost(cryptAddress + cryptDecrypt, reqHeader, reqParam);
                List<Map<String, String>> resultDataList = gson.fromJson(resultMap.get("data").toString(), List.class);

                if (resultDataList.size() == 1) {
                    try {

                        decryptUser.setEncryptKey(resultDataList.get(0).get("encryptKey").toString());
                        decryptUser.setUserName(resultDataList.get(0).get("userName").toString());
                        decryptUser.setCpNo(resultDataList.get(0).get("cpNo").toString());

                    } catch (UnsupportedOperationException e) {
                        logger.error("user {}", user.toString());
                        logger.error(e.getMessage(), e);
                    }
                }
            } catch (HttpConnectionException e) {
                logger.error(e.getMessage(), e);
            }

            return decryptUser;
        }).collect(Collectors.toList());

        return result;
    }

    public Map<String, Object> getReqHeaderMap() {
        Map<String, Object> reqHeader = Maps.newHashMap();
        reqHeader.put("systemKey", cryptSystemKey);
        reqHeader.put("secret", cryptSystemSecret);
        return reqHeader;
    }


    public List<TargetResult> getTargets(){

        List<OmsGrupInfo> groupList = getGroup();
        List<OrganResult> organList = new ArrayList<>();

        List<TargetResult> result = new ArrayList<>();

        for(OmsGrupInfo group : groupList){
            List<OmsOrganInfo> organListByGrp = memberDao.getOrgansByGrp(group.getGrupId());

            for(OmsOrganInfo organ : organListByGrp){

                List<OmsDptInfo> dptList = memberDao.getDptId(organ.getOrgnId());
                String dptId = dptList.get(0).getDptId();
                List<MemberDto> members = getUsers(dptId);

                OrganResult organResult =new OrganResult();

                organResult.setOrganId(organ.getOrgnId());
                organResult.setOrganNm(organ.getOrgnNm());
                organResult.setMemberList(members);

                organList.add(organResult);
            }



            TargetResult targetResult = new TargetResult();

            targetResult.setGroupId(group.getGrupId());
            targetResult.setGroupNm(group.getGrupNm());
            targetResult.setOrganList(organList);

            result.add(targetResult);

        }

        return result;
    }

}
