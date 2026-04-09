package com.eseict.eas.dao.sms;

import com.eseict.eas.dao.event.EventDao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.Map;


@Repository
public class SmsDao {

    private static final Logger logger = LoggerFactory.getLogger(EventDao.class);

    private final EntityManagerFactory emf ;

    private EntityManager getEntityManager() { return emf.createEntityManager();}

    public SmsDao(@Qualifier(value="smsEntityManagerFactory") EntityManagerFactory emf) {
        this.emf = emf;
    }


    @Transactional
    public boolean insertSndMsg(
            Map<String, String> paramMap,
            String procSt
    ){

        boolean result = false;
        EntityManager em = getEntityManager();
        EntityTransaction entityTransaction = em.getTransaction();


        String rcvMn = paramMap.get("rcvMn");
        String sndMn = paramMap.get("sndMn");
        String msgCntn = paramMap.get("msgCntn");


        try{

            entityTransaction.begin();

            StringBuffer sb = new StringBuffer();

            sb.append(" Insert into C50.TTB_SMS values ( ");
            sb.append(" ?, ?, ");
            sb.append(" (SELECT TO_CHAR(SYSDATE+(interval '30' second), 'YYYYMMDDHH24MISS')SYS_DATE24 FROM DUAL), ");
            sb.append(" ?, ? )");


            Query query = em.createNativeQuery(sb.toString());

            query.setParameter(1, sndMn);
            query.setParameter(2, rcvMn);
            query.setParameter(3, msgCntn);
            query.setParameter(4,procSt);

            int count = query.executeUpdate();


            if(count>0){
                result = true;
            }

            entityTransaction.commit();

            return result;


        }catch(Exception e){
            logger.error(e.getMessage(), e);
        }


        return result;

    }





}
