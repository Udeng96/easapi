package com.eseict.eas;

import com.eseict.eas.socket.rinoEvent.rcv.RinoEventSocketServer;
import com.eseict.eas.socket.rinoEvent.rcv.queue.event.SocketMsgQueuePolling;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

import javax.annotation.PostConstruct;

@Component
public class ServletInitializer extends SpringBootServletInitializer {

    public static Logger _logger = LoggerFactory.getLogger(ServletInitializer.class);

    final
    WebApplicationContext wac;

    public ServletInitializer(WebApplicationContext wac) {this.wac = wac;}

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(EasApplication.class);
    }

    @PostConstruct
    public void initialization(){
        _logger.info("===========================================================");
        _logger.info("application initialization in progress....................");

        // 포트는 자유롭게 설정
        RinoEventSocketServer.getinstance(28081).init();
        SocketMsgQueuePolling msgPolling = new SocketMsgQueuePolling();
        Thread msgPollingThread = new Thread(msgPolling);
        msgPollingThread.start();

        _logger.info("application initialization END !");
        _logger.info("============================================================");
    }

}
