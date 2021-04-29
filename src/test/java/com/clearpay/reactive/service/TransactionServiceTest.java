package com.clearpay.reactive.service;

import com.clearpay.reactive.domain.Transaction;
import com.clearpay.reactive.domain.Wallet;
import com.clearpay.reactive.repository.TransactionRepository;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import static java.util.Collections.singletonList;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyDouble;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static reactor.core.publisher.Flux.fromIterable;
import static reactor.core.publisher.Mono.empty;
import static reactor.core.publisher.Mono.just;

@Slf4j
@ExtendWith(MockitoExtension.class)
public class TransactionServiceTest {

    @InjectMocks
    TransactionService transactionService;

    @Mock
    WalletService walletService;

    @Mock
    TransactionRepository transactionRepository;

    @Test
    void givenValidWalletId_whenGetTransactionsByWalletId_thenReturnListOfTransactions() {
        when(walletService.getWalletByWalletId(anyString())).thenReturn(getWallet());
        when(transactionRepository.findBySourceWalletIdOrDestinationWalletId(anyString(), anyString()))
                .thenReturn(getTransactions());
        Transaction result = transactionService.getTransactionsByWalletId("fakeWalletId").blockFirst();
        Transaction expectedResult = getTransactions().blockFirst();
        verify(walletService, times(1)).getWalletByWalletId(anyString());
        verify(transactionRepository, times(1))
                .findBySourceWalletIdOrDestinationWalletId(anyString(), anyString());
        assertEquals(expectedResult, result);
    }

    private Flux<Transaction> getTransactions() {
        return fromIterable(singletonList(buildTransaction()));
    }

    @Test
    void givenValidSourceWalletIdAndTransaction_whenAddTransaction_thenReturnAddedTransaction() {
        when(walletService.getWalletByWalletId(anyString())).thenReturn(getWallet(), getWallet());
        when(walletService.updateWalletBalance(any(), anyDouble())).thenReturn(getWallet(), getWallet());
        when(transactionRepository.save(any())).thenReturn(getTransaction());
        Transaction result = transactionService.addTransaction(anyString(), buildTransaction()).block();
        Transaction expectedResult = getTransaction().block();
        verify(walletService, times(2)).getWalletByWalletId(anyString());
        verify(walletService, times(2)).updateWalletBalance(any(), anyDouble());
        assertEquals(expectedResult, result);
    }

    private Mono<Wallet> getWallet() {
        return just(new Wallet());
    }

    private Mono<Transaction> getTransaction() {
        return just(buildTransaction());
    }

    private Transaction buildTransaction() {
        return new Transaction(
                "fakeWalletId",
                1d,
                null
        );
    }

    @Test
    void givenNonexistentSourceWallet_whenAddTransaction_thenThrowRuntimeExceptionWithSpecificMessage() {
        when(walletService.getWalletByWalletId(anyString())).thenReturn(empty());
        try {
            transactionService.addTransaction(anyString(), buildTransaction()).block();
            fail();
        } catch (RuntimeException e) {
            log.error(e.getMessage());
            assertTrue(e.getMessage().contains("Error updating source wallet"));
        }
    }

    @Test
    void givenNonexistentDestinationWallet_whenAddTransaction_thenThrowRuntimeExceptionWithSpecificMessage() {
        when(walletService.getWalletByWalletId(anyString())).thenReturn(getWallet(), empty());
        when(walletService.updateWalletBalance(any(), anyDouble())).thenReturn(getWallet());
        try {
            transactionService.addTransaction(anyString(), buildTransaction()).block();
            fail();
        } catch (RuntimeException e) {
            log.error(e.getMessage());
            assertTrue(e.getMessage().contains("Error updating destination wallet"));
        }
    }

}
