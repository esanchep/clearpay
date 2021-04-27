package com.clearpay.reactive.controller;

import com.clearpay.reactive.domain.Response;
import com.clearpay.reactive.domain.Transaction;
import com.clearpay.reactive.service.TransactionService;
import com.clearpay.reactive.controller.utils.ControllerUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.List;

import static com.clearpay.reactive.controller.utils.ControllerConstants.OPERATION_SUCCESS;
import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.ResponseEntity.badRequest;
import static org.springframework.http.ResponseEntity.ok;

@Slf4j
@RestController
@RequestMapping("/wallet/{walletId}/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping()
    private Mono<ResponseEntity<Response<List<Transaction>>>> getTransactionsByWalletId(@PathVariable() String walletId) {
        log.info("Incoming request getTransactionsByWalletId for wallet with ID {}", walletId);
        return transactionService.getTransactionsByWalletId(walletId)
                .collectList()
                .map(transactions ->
                        ok().body(new Response<>(OK.value(), OPERATION_SUCCESS, transactions)))
                .onErrorResume(ControllerUtils::getMonoResponseOnError);
    }

    @PostMapping()
    private Mono<ResponseEntity<Response<Transaction>>> addTransaction(@PathVariable("walletId") String sourceWalletId, @RequestBody() Transaction transaction) {
        log.info("Incoming request addTransaction from wallet with ID {} to wallet with ID {}",
                sourceWalletId, transaction.getDestinationWalletId());
        if (transaction.getAmount() < 1) {
            log.error("The transaction amount is lesser than 1: {}", transaction.getAmount());
            return Mono.just(badRequest().body(new Response<>(BAD_REQUEST.value(), "The transaction amount is lesser than 1", null)));
        }
        if (sourceWalletId == transaction.getDestinationWalletId()) {
            log.error("Source wallet ({}) and destination wallet ({}) must not be equal", transaction.getAmount());
            return Mono.just(badRequest().body(new Response<>(BAD_REQUEST.value(), "Source and destination wallets must not be equal", null)));
        }
        return transactionService.addTransaction(sourceWalletId, transaction)
                .map(addedTransaction ->
                        ok().body(new Response<>(OK.value(), OPERATION_SUCCESS, addedTransaction)))
                .onErrorResume(ControllerUtils::getMonoResponseOnError);
    }

}
