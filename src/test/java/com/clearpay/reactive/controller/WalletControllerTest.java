package com.clearpay.reactive.controller;

import com.clearpay.reactive.domain.Response;
import com.clearpay.reactive.domain.Wallet;
import com.clearpay.reactive.service.WalletService;
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
import static java.util.Collections.singletonList;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.http.HttpStatus.OK;
import static reactor.core.publisher.Flux.fromIterable;
import static reactor.core.publisher.Mono.just;

@Slf4j
@ExtendWith(MockitoExtension.class)
public class WalletControllerTest {

    @InjectMocks
    WalletController walletController;

    @Mock
    WalletService walletService;

    @Test
    void givenValidUserId_whenGetWalletsByUserIdRequestReceived_thenReturnNonEmptySuccessResponse() {
        when(walletService.getWalletsByUserId(any())).thenReturn(getFluxWallet());
        Mono result = walletController.getWalletsByUserId("fakeUserId");
        Mono expectedResult = buildGetWalletsByUserIdOkResponse();
        verify(walletService, times(1)).getWalletsByUserId(any());
        assertEquals(expectedResult.block(), result.block());
    }

    private Mono buildGetWalletsByUserIdOkResponse() {
        Response<List<Wallet>> response = new Response<>(OK.value(), OPERATION_SUCCESS, singletonList(buildWallet()));
        ResponseEntity<Response<List<Wallet>>> responseEntity = new ResponseEntity<>(response, OK);
        return just(responseEntity);
    }

    private Flux<Wallet> getFluxWallet() {
        return fromIterable(singletonList(buildWallet()));
    }

    private Wallet buildWallet() {
        Wallet wallet = new Wallet();
        wallet.setBalance(20d);
        wallet.setAlias("fakeAlias");
        wallet.setUserId("fakeUserId");
        wallet.setId("fakeWalletId");
        return wallet;
    }

}
