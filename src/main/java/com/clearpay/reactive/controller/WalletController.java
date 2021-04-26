package com.clearpay.reactive.controller;

import com.clearpay.reactive.domain.Response;
import com.clearpay.reactive.domain.Wallet;
import com.clearpay.reactive.service.WalletService;
import com.clearpay.reactive.controller.utils.ControllerUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.List;

import static com.clearpay.reactive.controller.utils.ControllerConstants.OPERATION_SUCCESS;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.ResponseEntity.ok;

@Slf4j
@RestController
@RequestMapping("/user/{userId}/wallets")
public class WalletController {

    @Autowired
    private WalletService walletService;

    @GetMapping()
    private Mono<ResponseEntity<Response<List<Wallet>>>> getWalletsByUserId(@PathVariable() String userId) {
        log.info("Get wallets from user with ID {} request received", userId);
        return walletService.getWalletsByUserId(userId)
                .collectList()
                .map(wallets ->
                        ok().body(new Response<>(OK.value(), OPERATION_SUCCESS, wallets)))
                .onErrorResume(ControllerUtils::getMonoResponseOnError);
    }

}
