package com.clearpay.reactive.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.data.mongodb.core.index.CompoundIndexes;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "wallets")
@CompoundIndexes({
        @CompoundIndex(
                name = "unique_wallet_alias_per_users",
                def = "{ 'userId': 1, 'alias' : 1 }",
                unique = true
        )
})
public class Wallet {

    @Id()
    private String id;

    private String userId;
    private String alias;
    private Double balance;

}
