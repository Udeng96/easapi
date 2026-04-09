package com.eseict.eas.repository.main;

import com.eseict.eas.domain.ioc.IocEvetOutbHist;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface EventRepository extends JpaRepository<IocEvetOutbHist, Long> {

    @Query(value = "SELECT I FROM IocEvetOutbHist I WHERE 1=1 and I.svcThemeCd = 'EAS'",
            countQuery = "SELECT COUNT(I) FROM IocEvetOutbHist I WHERE I.svcThemeCd ='EAS'")
    Page<IocEvetOutbHist> findAllList(Pageable pageable);

    @Query(value = "SELECT I FROM IocEvetOutbHist I " +
            "WHERE 1=1 and I.svcThemeCd = 'EAS' " +
            "and (:startDtm is null or I.outbDtm >= :startDtm) " +
            "and (:endDtm is null or I.outbDtm <= :endDtm)" +
            "and I.statEvetCd in :gradeList",
            countQuery = "SELECT COUNT(I) FROM IocEvetOutbHist I " +
                    "WHERE 1=1 and I.svcThemeCd = 'EAS' " +
                    "and (:startDtm is null or I.outbDtm >= :startDtm) " +
                    "and (:endDtm is null or I.outbDtm <= :endDtm)"
    )
    Page<IocEvetOutbHist> findAllByDtm(@Param("startDtm")String startDtm, @Param("endDtm")String endDtm, List<String> gradeList, Pageable pageable);

    @Query(value = "SELECT I FROM IocEvetOutbHist I " +
            "WHERE 1=1 and I.sensorId = :sensorId " +
            "and I.svcThemeCd = 'EAS' " +
            "and (:startDtm is null or I.outbDtm >= :startDtm) " +
            "and (:endDtm is null or I.outbDtm <= :endDtm)"
    )

List<IocEvetOutbHist> findAllBySensorId(@Param("sensorId")String sensorId, @Param("startDtm")String startDtm, @Param("endDtm")String endDtm);
}


