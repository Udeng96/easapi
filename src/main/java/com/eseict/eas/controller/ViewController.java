package com.eseict.eas.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping("/main")
    public String main(){
        return "index";
    }
}
