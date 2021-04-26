package com.clearpay.reactive.repository;

import com.clearpay.reactive.domain.Wallet;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;

public interface WalletRepository extends ReactiveMongoRepository<Wallet, String> {

    Flux<Wallet> getWalletsByUserId(String userId);

}
