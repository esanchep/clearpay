package com.clearpay.reactive.service;

import com.clearpay.reactive.domain.Transaction;
import com.clearpay.reactive.domain.Wallet;
import com.clearpay.reactive.repository.TransactionRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Slf4j
@Service("transactionService")
public class TransactionService {

    @Autowired
    private WalletService walletService;

    @Autowired
    private TransactionRepository transactionRepository;

    public Flux<Transaction> getTransactionsByWalletId(String walletId) {
        return walletService.getWalletByWalletId(walletId)
                .flatMapMany(wallet ->
                        transactionRepository.findBySourceWalletIdOrDestinationWalletId(walletId, walletId)
                                .doOnError(throwable -> log.error(throwable.getMessage())))
                .doOnError(throwable -> log.error(throwable.getMessage()));
    }

    @Transactional
    public Mono<Transaction> addTransaction(String sourceWalletId, Transaction transaction) {
        return updateSourceWalletBalance(sourceWalletId, transaction.getAmount())
                .switchIfEmpty(Mono.error(new RuntimeException("Error updating source wallet")))
                .flatMap(wallet -> updateDestinationWalletBalance(transaction.getDestinationWalletId(), transaction.getAmount()))
                .switchIfEmpty(Mono.error(new RuntimeException("Error updating destination wallet")))
                .flatMap(wallet -> {
                    transaction.setSourceWalletId(sourceWalletId);
                    return transactionRepository.save(transaction);
                })
                .doOnError(throwable -> log.error(throwable.getMessage()));
    }

    private Mono<Wallet> updateSourceWalletBalance(String walletId, Double amount) {
        log.info("updating source wallet balance");
        return updateWalletBalance(walletId, amount * -1

        );
    }

    private Mono<Wallet> updateDestinationWalletBalance(String walletId, Double amount) {
        log.info("updating destination wallet balance");
        return updateWalletBalance(walletId, amount);
    }

    private Mono<Wallet> updateWalletBalance(String walletId, Double amount) {
        return walletService.getWalletByWalletId(walletId)
                .flatMap(wallet -> {
                    log.info("updating wallet balance");
                    return walletService.updateWalletBalance(wallet, amount);
                });
    }


}
