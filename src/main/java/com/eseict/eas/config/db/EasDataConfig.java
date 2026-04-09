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
@EnableJpaRepositories(basePackages = "com.eseict.eas.repository.main")
public class EasDataConfig {


    private static final Logger _logger = LoggerFactory.getLogger(EasDataConfig.class);

    @Primary
    @Bean(name="DataSource")
    public DataSource dataSource(){
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(ConfFileInfo.get("db.eas.driver"));
        dataSource.setUrl(ConfFileInfo.get("db.eas.url"));
        dataSource.setUsername(ConfFileInfo.get("db.eas.username"));
        dataSource.setPassword(ConfFileInfo.get("db.eas.password"));

        _logger.info("## EAS DataSource initialized.");

        return dataSource;
    }

    @Primary
    @Bean(name = "entityManagerFactory")
    public LocalContainerEntityManagerFactoryBean entityManagerFactoryBean(EntityManagerFactoryBuilder builder) {
        LocalContainerEntityManagerFactoryBean entityManagerFactory = builder.dataSource(dataSource()).packages("com.eseict.eas.domain.dst","com.eseict.eas.domain.ioc","com.eseict.eas.domain.oms").build();
        HibernateJpaVendorAdapter jpaAdapter = new HibernateJpaVendorAdapter();
        entityManagerFactory.setJpaVendorAdapter(jpaAdapter);
        entityManagerFactory.setJpaProperties(jpaHibernateProperties());
        entityManagerFactory.setPackagesToScan("");
        return entityManagerFactory;
    }

    @Primary
    @Bean(name = "transactionManager")
    @Autowired
    public JpaTransactionManager jpaTransactionManager(@Qualifier(value = "entityManagerFactory") LocalContainerEntityManagerFactoryBean entityManagerFactoryBean){
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactoryBean.getObject());
        return transactionManager;
    }

    private Properties jpaHibernateProperties(){
        Properties props = new Properties();
        props.setProperty("hibernate.dialect", ConfFileInfo.get("db.eas.dialect"));
        props.setProperty("hibernate.hbm2ddl.auto", ConfFileInfo.get("db.eas.ddl.auto"));
        props.setProperty("hibernate.show_sql", "false");
        props.setProperty("hibernate.format_sql", "true");
        props.setProperty("hibernate.temp.use_jdbc_metadata_defaults","false");
        return props;
    }

}
