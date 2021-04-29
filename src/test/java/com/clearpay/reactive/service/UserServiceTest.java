package com.clearpay.reactive.service;

import com.clearpay.reactive.domain.User;
import com.clearpay.reactive.repository.UsersRepository;
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
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static reactor.core.publisher.Flux.fromIterable;
import static reactor.core.publisher.Mono.just;

@Slf4j
@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UsersRepository usersRepository;

    @Test
    void givenValidRequest_whenGetAllUsers_thenReturnUserList() {
        when(usersRepository.findAll()).thenReturn(buildUsersList());
        User result = userService.getAllUsers().blockFirst();
        User expectedResult = buildUsersList().blockFirst();
        verify(usersRepository, times(1)).findAll();
        assertEquals(expectedResult, result);
    }

    private Flux<User> buildUsersList() {
        return fromIterable(singletonList(new User()));
    }

    @Test
    void givenValidUserId_whenGetUserById_thenReturnUser() {
        when(usersRepository.findById(anyString())).thenReturn(buildUser());
        User result = userService.getUserById(anyString()).block();
        User expectedResult = buildUser().block();
        verify(usersRepository, times(1)).findById(anyString());
        assertEquals(expectedResult, result);
    }

    private Mono<User> buildUser() {
        return just(new User());
    }

}
