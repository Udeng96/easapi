package com.eseict.eas.dao.sensor;


import com.eseict.eas.domain.dw.EqpInfo;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import java.util.List;

@Repository(value = "sensorDao")
public class SensorDao {

    private final EntityManagerFactory emf;


    public SensorDao(@Qualifier(value="entityManagerFactory")EntityManagerFactory emf) {
        this.emf = emf;
    }

    private EntityManager getEntityManager() {return emf.createEntityManager();}

    public List<EqpInfo> getSensors(){
        EntityManager em = getEntityManager();
        List<EqpInfo> sensorList = Lists.newArrayList();

        StringBuffer sqlSb = new StringBuffer();


        sqlSb.append("select E from EqpInfo E where 1=1");
        sqlSb.append(" and E.usable = 'Y'");
        sqlSb.append(" and E.sensorCode in('1','11','14','15','16')");
        sqlSb.append(" and E.eqpCode not in('4159011600', '4159040024')");
        sqlSb.append(" order by E.eqpName");

        Query query = em.createQuery(sqlSb.toString());

        sensorList = query.getResultList();

        return sensorList;
    }

    public EqpInfo getSensor(String id){
        EntityManager em = getEntityManager();
        EqpInfo sensor = new EqpInfo();

        StringBuffer sqlSb = new StringBuffer();

        sqlSb.append("select E from EqpInfo E where 1=1");
        sqlSb.append(" and E.eqpCode = :id");

        Query query = em.createQuery(sqlSb.toString());
        query.setParameter("id", id);
        sensor = (EqpInfo) query.getSingleResult();

        return sensor;
    }
}
