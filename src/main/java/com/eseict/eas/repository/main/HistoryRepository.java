package com.eseict.eas.repository.main;


import com.eseict.eas.domain.dst.EasDisasterTransfer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoryRepository extends JpaRepository<EasDisasterTransfer,Long> {

}
