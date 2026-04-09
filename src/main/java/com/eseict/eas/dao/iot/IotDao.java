package com.eseict.eas.dao.iot;


import com.eseict.eas.domain.dw.EventConfInfo;
import com.google.common.collect.Lists;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import java.util.List;

@Repository(value = "iotDao")
public class IotDao {

    private static final Logger logger = LoggerFactory.getLogger(IotDao.class);

    private final EntityManagerFactory emf;


    public IotDao(@Qualifier(value = "sensorEntityManagerFactory") EntityManagerFactory emf) {
        this.emf = emf;
    }

    private EntityManager getEntityManager(){return emf.createEntityManager();}


    public List<EventConfInfo> getStandard(String sensorId){

        EntityManager em = getEntityManager();

        List<EventConfInfo> result = Lists.newArrayList();
        StringBuffer sqlSb = new StringBuffer();

        sqlSb.append("select E from EventConfInfo E where 1=1 and");
        sqlSb.append(" E.eqpCode = :sensorId");

        Query query = em.createQuery(sqlSb.toString());
        query.setParameter("sensorId",sensorId);
        result = query.getResultList();

        return result;

    }

}
