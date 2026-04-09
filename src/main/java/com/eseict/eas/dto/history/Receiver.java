package com.eseict.eas.dto.history;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Receiver {
    String userId;
    String userName;
    String cpNo;

    public Receiver() {
    }

    public Receiver(String userId, String userName, String cpNo) {
        this.userId = userId;
        this.userName = userName;
        this.cpNo = cpNo;
    }
}
