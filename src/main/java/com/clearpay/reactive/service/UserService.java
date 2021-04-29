package com.clearpay.reactive.service;

import com.clearpay.reactive.domain.User;
import com.clearpay.reactive.repository.UsersRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Slf4j
@Service("userService")
public class UserService {

    @Autowired
    private UsersRepository usersRepository;

    public Flux<User> getAllUsers() {
        return usersRepository.findAll();
    }

    public Mono<User> getUserById(String userId) {
        return usersRepository.findById(userId);
    }

}
