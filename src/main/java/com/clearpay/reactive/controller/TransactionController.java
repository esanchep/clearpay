package com.clearpay.reactive.controller;

import com.clearpay.reactive.controller.utils.ControllerUtils;
import com.clearpay.reactive.domain.Response;
import com.clearpay.reactive.domain.Transaction;
import com.clearpay.reactive.service.TransactionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import static com.clearpay.reactive.controller.utils.ControllerConstants.OPERATION_SUCCESS;
import static com.clearpay.reactive.controller.utils.ControllerUtils.buildBadRequestResponse;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.ResponseEntity.ok;

@Slf4j
@RestController
@RequestMapping("/wallet/{walletId}/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping()
    Mono getTransactionsByWalletId(@PathVariable() String walletId) {
        log.info("Incoming request getTransactionsByWalletId for wallet with ID {}", walletId);
        return transactionService.getTransactionsByWalletId(walletId)
                .collectList()
                .map(transactions ->
                        ok().body(new Response<>(OK.value(), OPERATION_SUCCESS, transactions)))
                .onErrorResume(ControllerUtils::getMonoResponseOnError);
    }

    @PostMapping()
    Mono addTransaction(@PathVariable("walletId") String sourceWalletId, @RequestBody() Transaction transaction) {
        log.info("Incoming request addTransaction from wallet with ID {} to wallet with ID {}",
                sourceWalletId, transaction.getDestinationWalletId());
        if (transaction.getAmount() < 1) {
            log.error("The transaction amount is lesser than 1: {}", transaction.getAmount());
            return buildBadRequestResponse("The transaction amount is lesser than 1");
        }
        if (sourceWalletId == transaction.getDestinationWalletId()) {
            log.error("Source wallet ({}) and destination wallet ({}) must not be equal", transaction.getAmount());
            return buildBadRequestResponse("Source and destination wallets must not be equal");
        }
        return transactionService.addTransaction(sourceWalletId, transaction)
                .map(addedTransaction ->
                        ok().body(new Response<>(OK.value(), OPERATION_SUCCESS, addedTransaction)))
                .onErrorResume(ControllerUtils::getMonoResponseOnError);
    }



}
