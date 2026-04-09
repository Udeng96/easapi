package com.eseict.eas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class EasApplication {

    public static void main(String[] args) {
        SpringApplication.run(EasApplication.class, args);
    }

}
