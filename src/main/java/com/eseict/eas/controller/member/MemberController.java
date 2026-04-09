package com.eseict.eas.controller.member;


import com.eseict.eas.config.EasConstants;
import com.eseict.eas.domain.oms.OmsGrupInfo;
import com.eseict.eas.domain.oms.OmsOrganInfo;
import com.eseict.eas.dto.common.DataResponse;
import com.eseict.eas.dto.member.MemberDto;
import com.eseict.eas.dto.member.TargetResult;
import com.eseict.eas.service.member.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/member", produces = EasConstants.API_PRODUCES)
public class MemberController {

    @Autowired
    MemberService memberService;

    @GetMapping("/groups")
    public ResponseEntity<DataResponse> getGroups(){
        List<OmsGrupInfo> result = memberService.getGroup();

        DataResponse dataResponse = new DataResponse();

        dataResponse.setCode(EasConstants.RESPONSE.CD_SUCCESS);
        dataResponse.setMessage(EasConstants.RESPONSE.MG_SUCCESS);
        dataResponse.setCount(result.size());
        dataResponse.setData(result);

        return ResponseEntity.ok(dataResponse);
    }

    @GetMapping("/organs")
    public ResponseEntity<DataResponse> getOrgan(){
        List<OmsOrganInfo> result = memberService.getOran();

        DataResponse dataResponse = new DataResponse();

        dataResponse.setCode(EasConstants.RESPONSE.CD_SUCCESS);
        dataResponse.setMessage(EasConstants.RESPONSE.MG_SUCCESS);
        dataResponse.setCount(result.size());
        dataResponse.setData(result);

        return ResponseEntity.ok(dataResponse);

    }

    @GetMapping("/target")
    public ResponseEntity<DataResponse> getTarget(){

        List<TargetResult> result = memberService.getTargets();

        DataResponse dataResponse = new DataResponse();

        dataResponse.setCode(EasConstants.RESPONSE.CD_SUCCESS);
        dataResponse.setMessage(EasConstants.RESPONSE.MG_SUCCESS);
        dataResponse.setCount(result.size());
        dataResponse.setData(result);

        return ResponseEntity.ok(dataResponse);
    }


}
