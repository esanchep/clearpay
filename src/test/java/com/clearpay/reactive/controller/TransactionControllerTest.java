package com.clearpay.reactive.controller;

import com.clearpay.reactive.domain.Response;
import com.clearpay.reactive.domain.Transaction;
import com.clearpay.reactive.service.TransactionService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

import static com.clearpay.reactive.controller.utils.ControllerConstants.OPERATION_SUCCESS;
import static com.clearpay.reactive.controller.utils.ControllerUtils.buildBadRequestResponse;
import static java.util.Collections.singletonList;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.http.HttpStatus.OK;
import static reactor.core.publisher.Flux.fromIterable;
import static reactor.core.publisher.Mono.just;

@Slf4j
@ExtendWith(MockitoExtension.class)
public class TransactionControllerTest {

    @InjectMocks
    TransactionController transactionController;

    @Mock
    TransactionService transactionService;

    @Test
    void givenValidWalletId_whenGetTransactionsByWalletId_thenReturnListOfTransactions() {
        when(transactionService.getTransactionsByWalletId(any())).thenReturn(getFluxTransaction());
        Mono result = transactionController.getTransactionsByWalletId("fakeWalletId");
        Mono expectedResult = buildGetTransactionsByWalletIdOkResponse();
        verify(transactionService, times(1)).getTransactionsByWalletId(any());
        assertEquals(expectedResult.block(), result.block());
    }

    private Flux<Transaction> getFluxTransaction() {
        return fromIterable(singletonList(buildTransaction()));
    }

    private Mono buildGetTransactionsByWalletIdOkResponse() {
        Response<List<Transaction>> response = new Response<>(OK.value(), OPERATION_SUCCESS, singletonList(buildTransaction()));
        ResponseEntity<Response<List<Transaction>>> responseEntity = new ResponseEntity<>(response, OK);
        return just(responseEntity);
    }

    @Test
    void givenValidSourceWalletIdAndTransaction_whenAddTransaction_thenReturnAddedTransaction() {
        when(transactionService.addTransaction(anyString(), any())).thenReturn(getMonoTransaction());
        Mono result = transactionController.addTransaction("fakeSourceWalletId", buildTransaction());
        Mono expectedResult = buildAddTransactionOkResponse();
        verify(transactionService, times(1)).addTransaction(anyString(), any());
        assertEquals(expectedResult.block(), result.block());
    }

    private Mono getMonoTransaction() {
        return just(buildTransaction());
    }

    private Mono buildAddTransactionOkResponse() {
        Response<Transaction> response = new Response<>(OK.value(), OPERATION_SUCCESS, buildTransaction());
        ResponseEntity<Response<Transaction>> responseEntity = new ResponseEntity<>(response, OK);
        return just(responseEntity);
    }

    private Transaction buildTransaction() {
        return new Transaction(
                "fakeDestinationWalletId",
                1d,
                "fakeComment"
        );
    }

    @Test
    void givenSameSourceAndDestinationIds_whenAddTransaction_thenReturnBadRequestWithSpecificMessage() {
        Mono result = transactionController.addTransaction("sameFakeWalletId", buildTransactionWithSameId());
        Mono expectedResult = buildBadRequestResponse("Source and destination wallets must not be equal");
        verify(transactionService, times(0)).addTransaction(anyString(), any());
        assertEquals(expectedResult.block(), result.block());
    }

    private Transaction buildTransactionWithSameId() {
        return new Transaction(
                "sameFakeWalletId",
                1d,
                "fakeComment"
        );
    }

    @Test
    void givenNegativeTransactionAmount_whenAddTransaction_thenReturnBadRequestWithSpecificMessage() {
        Mono result = transactionController.addTransaction("fakeWalletId", buildTransactionWithNegativeAmount());
        Mono expectedResult = buildBadRequestResponse("The transaction amount is lesser than 1");
        verify(transactionService, times(0)).addTransaction(anyString(), any());
        assertEquals(expectedResult.block(), result.block());
    }

    private Transaction buildTransactionWithNegativeAmount() {
        return new Transaction(
                "someOtherFakeWalletId",
                -1d,
                "fakeComment"
        );
    }

}
