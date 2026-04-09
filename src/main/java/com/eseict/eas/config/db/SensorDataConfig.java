package com.eseict.eas.config.db;


import com.eseict.common.config.ConfFileInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Properties;

@Configuration
@EnableTransactionManagement
@EnableJpaAuditing
@EnableJpaRepositories(basePackages = "com.eseict.eas.repository.dw")
public class SensorDataConfig {

    private static final Logger _logger = LoggerFactory.getLogger(EasDataConfig.class);

    @Bean(name="sensorDataSource")
    public DataSource dataSource(){
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(ConfFileInfo.get("db.sensor.driver"));
        dataSource.setUrl(ConfFileInfo.get("db.sensor.url"));
        dataSource.setUsername(ConfFileInfo.get("db.sensor.username"));
        dataSource.setPassword(ConfFileInfo.get("db.sensor.password"));

        _logger.info("## Sensor DataSource initialized.");

        return dataSource;
    }

    @Bean(name = "sensorEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean entityManagerFactoryBean(EntityManagerFactoryBuilder builder) {
        LocalContainerEntityManagerFactoryBean entityManagerFactory = builder.dataSource(dataSource()).packages("com.eseict.eas.domain.dw").build();
        HibernateJpaVendorAdapter jpaAdapter = new HibernateJpaVendorAdapter();
        entityManagerFactory.setJpaVendorAdapter(jpaAdapter);
        entityManagerFactory.setJpaProperties(jpaHibernateProperties());
        entityManagerFactory.setPackagesToScan("");
        return entityManagerFactory;
    }

    @Bean(name = "sensorTransactionManager")
    @Autowired
    public JpaTransactionManager jpaTransactionManager(@Qualifier(value = "sensorEntityManagerFactory") LocalContainerEntityManagerFactoryBean entityManagerFactoryBean){
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactoryBean.getObject());
        return transactionManager;
    }

    private Properties jpaHibernateProperties(){
        Properties props = new Properties();
        props.setProperty("hibernate.dialect", ConfFileInfo.get("db.sensor.dialect"));
        props.setProperty("hibernate.hbm2ddl.auto", ConfFileInfo.get("db.sensor.ddl.auto"));
        props.setProperty("hibernate.show_sql", "false");
        props.setProperty("hibernate.format_sql", "true");
        props.setProperty("hibernate.temp.use_jdbc_metadata_defaults","false");
        return props;
    }

}
