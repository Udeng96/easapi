package com.eseict.eas.config;

import com.eseict.common.base.SystemProperties;
import com.eseict.common.config.ConfFileInfo;
import com.google.common.base.Strings;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;
import org.springframework.boot.autoconfigure.context.PropertyPlaceholderAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.io.File;
import java.nio.file.FileSystem;

@Configuration
@EnableAspectJAutoProxy
@EnableScheduling
public class ApplicationContextConfig {
    private static final Logger logger = LoggerFactory.getLogger(ApplicationContextConfig.class);

    @Bean
    public PropertyPlaceholderConfigurer confFileInfo(){
        try{
            PropertyPlaceholderConfigurer config = new ConfFileInfo();
            Resource location = new FileSystemResource(SystemProperties.getProperty("EAS_HOME")+File.separator+"system_config.properties");
            config.setLocation(location);
            logger.info("System Config Properties load Complete");
            return config;
        }catch(Exception e){
            logger.error("System Config Properties load Fail");
            logger.error("System Config Properties load Fail");
            logger.error("System Config Properties load Fail");
            logger.error("System Config Properties load Fail");
            return null;
        }
    }
}
