package com.eseict.eas.dao.member;


import com.eseict.eas.domain.oms.OmsDptInfo;
import com.eseict.eas.domain.oms.OmsGrupInfo;
import com.eseict.eas.domain.oms.OmsOrganInfo;
import com.eseict.eas.dto.member.MemberDto;
import com.google.common.collect.Lists;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import java.util.List;

@Repository(value = "memberDao")
public class MemberDao {


    private final EntityManagerFactory emf;

    public MemberDao(@Qualifier(value="entityManagerFactory")EntityManagerFactory emf) {
        this.emf = emf;
    }

    private EntityManager getEntityManager() { return emf.createEntityManager();}

    public List<OmsGrupInfo> getGrups(){


        EntityManager em = getEntityManager();
        List<OmsGrupInfo> result = Lists.newArrayList();

        StringBuffer sqlSb = new StringBuffer();

        sqlSb.append("select G from OmsGrupInfo G");

        Query query = em.createQuery(sqlSb.toString());

        result = query.getResultList();

        return result;

    }

    public List<OmsOrganInfo> getOrgans(){

        EntityManager em = getEntityManager();
        List<OmsOrganInfo> result = Lists.newArrayList();

        StringBuffer sqlSb = new StringBuffer();
        sqlSb.append("select O from OmsOrganInfo O");
        Query query = em.createQuery(sqlSb.toString());

        result = query.getResultList();

        return result;
    }

    public List<OmsOrganInfo> getOrgansByGrp(String grpId){

        EntityManager em = getEntityManager();
        List<OmsOrganInfo> result = Lists.newArrayList();

        StringBuffer sqlSb = new StringBuffer();
        sqlSb.append("select O from OmsOrganInfo O where 1=1 and ");
        sqlSb.append("O.grupId = :grpId");

        Query query = em.createQuery(sqlSb.toString());
        query.setParameter("grpId",grpId);

        result = query.getResultList();

        return result;
    }

    public List<MemberDto> getUsers(){

        EntityManager em = getEntityManager();
        List<MemberDto> result = Lists.newArrayList();

        StringBuffer sqlSb = new StringBuffer();
        sqlSb.append("select new com.eseict.eas.dto.member.MemberDto(");
        sqlSb.append("U.userId,");
        sqlSb.append(" U.userLoginId,");
        sqlSb.append(" U.userNm,");
        sqlSb.append(" U.cpNo,");
        sqlSb.append(" U.email,");
        sqlSb.append(" U.dptId,");
        sqlSb.append(" U.departmentName,");
        sqlSb.append(" U.encryptKey)");
        sqlSb.append(" from OmsUserInfo U");

        Query query = em.createQuery(sqlSb.toString());

        result = query.getResultList();

        return result;

    }

    public List<OmsDptInfo> getDptId(String organId){
        EntityManager em = getEntityManager();

        StringBuffer sqlSb = new StringBuffer();
        sqlSb.append("select D from OmsDptInfo D");
        sqlSb.append(" where 1=1 and");
        sqlSb.append(" D.orgnId = :organId");

        Query query = em.createQuery(sqlSb.toString());
        query.setParameter("organId",organId);

        return query.getResultList();
    }

    public List<MemberDto> getUsersByOrgan(String dptId){

        EntityManager em = getEntityManager();
        List<MemberDto> result = Lists.newArrayList();

        StringBuffer sqlSb = new StringBuffer();
        sqlSb.append("select new com.eseict.eas.dto.member.MemberDto(");
        sqlSb.append("U.userId,");
        sqlSb.append(" U.userLoginId,");
        sqlSb.append(" U.userNm,");
        sqlSb.append(" U.cpNo,");
        sqlSb.append(" U.email,");
        sqlSb.append(" U.dptId,");
        sqlSb.append(" U.departmentName,");
        sqlSb.append(" U.encryptKey)");
        sqlSb.append(" from OmsUserInfo U");
        sqlSb.append(" where 1=1 and");
        sqlSb.append(" U.dptId = :dptId");

        Query query = em.createQuery(sqlSb.toString());
        query.setParameter("dptId",dptId);

        result = query.getResultList();

        return result;

    }


}
