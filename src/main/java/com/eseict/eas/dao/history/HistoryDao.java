package com.eseict.eas.dao.history;

import com.eseict.eas.dao.event.EventDao;
import com.eseict.eas.domain.dst.EasDisasterTransfer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class HistoryDao {

    private static final Logger logger = LoggerFactory.getLogger(EventDao.class);

    private final EntityManagerFactory emf ;

    public HistoryDao(@Qualifier(value="entityManagerFactory") EntityManagerFactory emf) {
        this.emf = emf;
    }

    private EntityManager getEntityManager() { return emf.createEntityManager();}


    public List<EasDisasterTransfer> getHistory(
            String id
    ){
        EntityManager em = getEntityManager();
        List<EasDisasterTransfer> historyList = new ArrayList<>();

        StringBuffer sb = new StringBuffer();

        sb.append("select E from EasDisasterTransfer E where 1=1 ");
        sb.append(" and E.disasterId = :id");
        sb.append(" order by E.transferDtm DESC");

        Query query = em.createQuery(sb.toString());

        query.setParameter("id",id);

        historyList = query.getResultList();

        return historyList;


    }





}
