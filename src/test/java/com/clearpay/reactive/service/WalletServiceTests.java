package com.clearpay.reactive.service;

import com.clearpay.reactive.domain.User;
import com.clearpay.reactive.domain.Wallet;
import com.clearpay.reactive.repository.WalletRepository;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

import static java.util.Collections.singletonList;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static reactor.core.publisher.Flux.fromIterable;
import static reactor.core.publisher.Mono.just;

@Slf4j
@ExtendWith(MockitoExtension.class)
public class WalletServiceTests {

    @InjectMocks
    WalletService walletService;

    @Mock
    UserService userService;

    @Mock
    WalletRepository walletRepository;

    @Test
    void givenValidUserId_whenGetWalletsByUserId_thenReturnListOfWallets() {
        when(userService.getUserById(any())).thenReturn(getUserOk());
        when(walletRepository.getWalletsByUserId(any())).thenReturn(getUserWalletsOk());
        Wallet result = walletService.getWalletsByUserId("fakeUserId").blockFirst();
        Wallet expectedResult = getUserWalletsOk().blockFirst();
        verify(userService, times(1)).getUserById(any());
        verify(walletRepository, times(1)).getWalletsByUserId(any());
        assertEquals(expectedResult, result);
    }

    @Test
    void givenValidWalletId_whenGetWalletByWalletId_thenReturnWallet() {
        when(walletRepository.findById(anyString())).thenReturn(getWallet());
        Wallet result = walletService.getWalletByWalletId("fakeWalletId").block();
        Wallet expectedResult = getWallet().block();
        verify(walletRepository, times(1)).findById(anyString());
        assertEquals(expectedResult, result);
    }

    @Test
    void givenValidWalletAndAmount_whenUpdateWalletBalance_updateWalletBalance() {
        Wallet walletFromRequest = getWalletFromUpdateBalanceRequest();
        Double amountFromRequest = 10d;
        when(walletRepository.save(any())).thenReturn(getUpdatedWallet(walletFromRequest, amountFromRequest));
        Wallet expectedResult = getUpdatedWallet(walletFromRequest, amountFromRequest).block();
        Wallet result = walletService.updateWalletBalance(walletFromRequest, amountFromRequest).block();
        verify(walletRepository, times(1)).save(any());
        assertEquals(expectedResult, result);
    }

    @Test
    void givenWalletWithNegativeResultingBalance_whenUpdateWalletBalance_doNotUpdateWalletBalanceAndThrowError() {
        Wallet walletFromRequest = getWalletFromUpdateBalanceRequest();
        Double amountFromRequest = -10d;
        try {
            walletService.updateWalletBalance(walletFromRequest, amountFromRequest).block();
            fail();
        } catch (RuntimeException e) {
            log.error(e.getMessage());
            assertTrue(e.getMessage().contains("Cannot perform transaction: Resulting wallet balance cannot be negative"));
        }
        verify(walletRepository, times(0)).save(any());
    }

    private Mono<User> getUserOk() {
        return just(new User());
    }

    private Flux<Wallet> getUserWalletsOk() {
        return fromIterable(buildWalletList());
    }

    private List<Wallet> buildWalletList() {
        return singletonList(new Wallet());
    }

    private Mono<Wallet> getWallet() {
        return just(new Wallet());
    }

    private Wallet getWalletFromUpdateBalanceRequest() {
        Wallet wallet = new Wallet();
        wallet.setBalance(0d);
        return wallet;
    }

    private Mono<Wallet> getUpdatedWallet(Wallet wallet, Double amount) {
        wallet.setBalance(wallet.getBalance() + amount);
        return just(wallet);
    }


}
