package com.eseict.eas.dao.event;

import com.eseict.eas.domain.ioc.VwIocEvetInfo;
import com.eseict.eas.dto.event.EventResult;
import com.google.common.collect.Lists;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import java.util.List;

@Transactional
@Repository(value="eventDao")
public class EventDao {

    private static final Logger logger = LoggerFactory.getLogger(EventDao.class);

    private final EntityManagerFactory emf ;

    public EventDao(@Qualifier(value="entityManagerFactory") EntityManagerFactory emf) {  this.emf = emf; }

    private EntityManager getEntityManager() { return emf.createEntityManager();}

    public List<EventResult> getEvents(
            String startDtm,
            String endDtm,
            Integer rows,
            Integer pageNumber
    ){
        EntityManager em = getEntityManager();
        List<EventResult> eventDataList = Lists.newArrayList();

        StringBuffer sqlSb = new StringBuffer();

        sqlSb.append("select new com.eseict.eas.dto.event.EventResult(");
        sqlSb.append("I.statEvetOubSeqn,");
        sqlSb.append("concat(I.svcThemeCd, I.unitSvcCd, I.statEvetGdCd, I.statEvetCd),");
        sqlSb.append("I.clrDtm,");
        sqlSb.append("I.outbDtm,");
        sqlSb.append("I.procSt,");
        sqlSb.append("'',");
        sqlSb.append("I.outbPlac,");
        sqlSb.append("I.znCd,");
        sqlSb.append("I.x,");
        sqlSb.append("I.y,");
        sqlSb.append("I.sensorId, ");
        sqlSb.append("I.streamPkId, ");
        sqlSb.append("I.dvcPkId, ");
        sqlSb.append("I.statEvetCntn)");
        sqlSb.append(" from IocEvetOutbHist I");
        sqlSb.append(" where 1=1");
        sqlSb.append(" and I.svcThemeCd = 'EAS'");

        if(!startDtm.isEmpty() && !endDtm.isEmpty()){
            sqlSb.append(" and I.outbDtm >= :startDtm");
            sqlSb.append(" and I.outbDtm <= :endDtm");
        }

        sqlSb.append(" order by I.outbDtm DESC");

        Query query = em.createQuery(sqlSb.toString());

        if(!startDtm.isEmpty() && !endDtm.isEmpty()){
            query.setParameter("startDtm",startDtm+"000000"); // 시작하는 날짜 + "00시 00분 00초"
            query.setParameter("endDtm",endDtm+"115959"); // 끝나는 날짜 + "11시 59분 59초"
        }


        // 지난 이벤트에서 페이지가 시작할 때, 0부터 9까지의 10개가 표출이 된다.
        // 따라서 각 페이지의 index가 0,10,20,30... 순으로 흘러간다.
        // 없으면 무조건 0부터 시작이다.
        if (pageNumber > 0){
            query.setFirstResult((pageNumber-1)*10);
        }

        if(rows > 0){
            query.setMaxResults(rows);
        }

        eventDataList = query.getResultList();


        return eventDataList;
    }



    public EventResult getEvent(
            String id
    ){
        EntityManager em = getEntityManager();
        EventResult event = new EventResult();

        try{
            StringBuffer sqlSb = new StringBuffer();
            sqlSb.append("select new com.eseict.eas.dto.event.EventResult(");
            sqlSb.append("I.statEvetOubSeqn,");
            sqlSb.append("concat(I.svcThemeCd, I.unitSvcCd, I.statEvetGdCd, I.statEvetCd),");
            sqlSb.append("I.clrDtm,");
            sqlSb.append("I.outbDtm,");
            sqlSb.append("I.procSt,");
            sqlSb.append("'',");
            sqlSb.append("I.outbPlac,");
            sqlSb.append("I.znCd,");
            sqlSb.append("I.x,");
            sqlSb.append("I.y,");
            sqlSb.append("I.sensorId, ");
            sqlSb.append("I.streamPkId, ");
            sqlSb.append("I.dvcPkId, ");
            sqlSb.append("I.statEvetCntn)");
            sqlSb.append(" from IocEvetOutbHist I");
            sqlSb.append(" where I.statEvetOubSeqn = :id");

            Query query = em.createQuery(sqlSb.toString());

            query.setParameter("id",id);

            event = (EventResult) query.getResultList().get(0);

        }catch (Exception e){
            logger.error(e.getMessage(),e);
        }

        return event;
    }

    public EventResult getEventBySensorId(String sensorId){

        EntityManager em = getEntityManager();
        EventResult event = new EventResult();

        try{
            StringBuffer sqlSb = new StringBuffer();
            sqlSb.append("select new com.eseict.eas.dto.event.EventResult(");
            sqlSb.append("I.statEvetOubSeqn,");
            sqlSb.append("concat(I.svcThemeCd, I.unitSvcCd, I.statEvetGdCd, I.statEvetCd),");
            sqlSb.append("I.clrDtm,");
            sqlSb.append("I.outbDtm,");
            sqlSb.append("I.procSt,");
            sqlSb.append("'',");
            sqlSb.append("I.outbPlac,");
            sqlSb.append("I.znCd,");
            sqlSb.append("I.x,");
            sqlSb.append("I.y,");
            sqlSb.append("I.statEvetCntn)");
            sqlSb.append(" from IocEvetOutbHist I");
            sqlSb.append(" where I.statEvetOubSeqn = :id");

            Query query = em.createQuery(sqlSb.toString());

            query.setParameter("id",sensorId);

            event = (EventResult) query.getResultList().get(0);

        }catch (Exception e){
            logger.error(e.getMessage(),e);
        }

        return event;

    }

    public boolean setEvent(String id,String clrDtm) {

        boolean result = false;
        EntityManager em = getEntityManager();
        EntityTransaction entityTransaction = em.getTransaction();

        try{
            entityTransaction.begin();

            StringBuffer sb = new StringBuffer();
            sb.append("update IocEvetOutbHist H set H.procSt = '5', H.clrDtm = :clrDtm where H.statEvetOubSeqn = :id");
            Query query = em.createQuery(sb.toString());
            query.setParameter("id",id);
            query.setParameter("clrDtm",clrDtm);
            int count = query.executeUpdate();
            if(count>0){result = true;}

            entityTransaction.commit();
        }catch (Exception e){
            if(entityTransaction!=null){
                entityTransaction.rollback();
            }
            logger.error(e.getMessage(),e);

        }



        return result;

    }

    public List<VwIocEvetInfo> getOptions(){

        EntityManager em = getEntityManager();
        List<VwIocEvetInfo> eventOptionList = Lists.newArrayList();

        StringBuffer sqlSb = new StringBuffer();

        sqlSb.append("select E from VwIocEvetInfo E where 1=1");

        Query query = em.createQuery(sqlSb.toString());
        eventOptionList = query.getResultList();

        return eventOptionList;
    }


}
