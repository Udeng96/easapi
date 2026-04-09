package com.eseict.eas.config.db;

import com.eseict.common.config.ConfFileInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
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
public class SmsDataConfig {


    private static final Logger _logger = LoggerFactory.getLogger(EasDataConfig.class);

    @Bean(name="smsDataSource")
    public DataSource dataSource(){
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(ConfFileInfo.get("db.sms.driver"));
        dataSource.setUrl(ConfFileInfo.get("db.sms.url"));
        dataSource.setUsername(ConfFileInfo.get("db.sms.username"));
        dataSource.setPassword(ConfFileInfo.get("db.sms.password"));

        _logger.info("## SMS DataSource initialized.");

        return dataSource;
    }

    @Bean(name = "smsEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean entityManagerFactoryBean(EntityManagerFactoryBuilder builder) {
        LocalContainerEntityManagerFactoryBean entityManagerFactory = builder.dataSource(dataSource()).packages("com.eseict.eas.domain.sms").build();
        HibernateJpaVendorAdapter jpaAdapter = new HibernateJpaVendorAdapter();
        entityManagerFactory.setJpaVendorAdapter(jpaAdapter);
        entityManagerFactory.setJpaProperties(jpaHibernateProperties());
        entityManagerFactory.setPackagesToScan("");
        return entityManagerFactory;
    }

    @Bean(name = "smsTransactionManager")
    @Autowired
    public JpaTransactionManager jpaTransactionManager(@Qualifier(value = "smsEntityManagerFactory") LocalContainerEntityManagerFactoryBean entityManagerFactoryBean){
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactoryBean.getObject());
        return transactionManager;
    }

    private Properties jpaHibernateProperties(){
        Properties props = new Properties();
        props.setProperty("hibernate.dialect", ConfFileInfo.get("db.sms.dialect"));
        props.setProperty("hibernate.show_sql", "false");
        props.setProperty("hibernate.format_sql", "true");
        props.setProperty("hibernate.temp.use_jdbc_metadata_defaults","false");
        return props;
    }

}
