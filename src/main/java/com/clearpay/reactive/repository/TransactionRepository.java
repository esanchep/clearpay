package com.clearpay.reactive.repository;

import com.clearpay.reactive.domain.Transaction;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;

public interface TransactionRepository extends ReactiveMongoRepository<Transaction, String> {

    Flux<Transaction> findBySourceWalletIdOrDestinationWalletId(String sourceWalletId, String destinationWalletId);

}
