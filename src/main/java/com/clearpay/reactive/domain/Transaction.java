package com.clearpay.reactive.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document(collection = "transactions")
public class Transaction {

    @Id()
    private String id;

    private String sourceWalletId;
    private String destinationWalletId;
    private Double amount;
    private Date date;
    private String comment;

    public Transaction(String destinationWalletId, Double amount, String comment) {
        this.destinationWalletId = destinationWalletId;
        this.amount = amount;
        this.comment = comment;
    }

}
