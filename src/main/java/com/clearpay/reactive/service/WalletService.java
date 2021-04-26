package com.clearpay.reactive.service;

import com.clearpay.reactive.domain.Wallet;
import com.clearpay.reactive.repository.WalletRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Slf4j
@Service("walletService")
public class WalletService {

    @Autowired
    UserService userService;

    @Autowired
    WalletRepository walletRepository;

    public Flux<Wallet> getWalletsByUserId(String userId) {
        log.info("Get wallets by user with ID {}", userId);
        return userService.getUserById(userId)
                .flatMapMany(user -> walletRepository.getWalletsByUserId(user.getId()));
    }

    public Mono<Wallet> getWalletByWalletId(String walletId) {
        log.info("Get wallet with ID {}", walletId);
        return walletRepository.findById(walletId);
    }

    @Transactional
    public Mono<Wallet> updateWalletBalance(Wallet wallet, Double amount) {
        wallet.setBalance(getWalletResultingBalance(wallet, amount));
        log.info("Update wallet {} balance to {}", wallet.getId(), wallet.getBalance());
        return walletRepository.save(wallet);
    }

    private Double getWalletResultingBalance(Wallet wallet, Double amount) {
        if (wallet.getBalance() + amount < 0) {
            throw new RuntimeException("Cannot perform transaction: Resulting wallet balance cannot be negative");
        }
        return wallet.getBalance() + amount;
    }

}
