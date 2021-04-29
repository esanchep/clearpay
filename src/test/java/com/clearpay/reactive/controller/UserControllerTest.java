package com.clearpay.reactive.controller;

import com.clearpay.reactive.domain.Response;
import com.clearpay.reactive.domain.User;
import com.clearpay.reactive.service.UserService;
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
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.http.HttpStatus.OK;
import static reactor.core.publisher.Flux.fromIterable;
import static reactor.core.publisher.Mono.just;

@Slf4j
@ExtendWith(MockitoExtension.class)
public class UserControllerTest {

    @InjectMocks
    UserController userController;

    @Mock
    UserService userService;

    @Test
    void givenValidRequest_whenGetAllUsers_thenReturnListOfUsers() {
        when(userService.getAllUsers()).thenReturn(getFluxUser());
        Mono result = userController.getAllUsers();
        Mono expectedResult = buildGetAllUsersOkResponse();
        verify(userService, times(1)).getAllUsers();
        assertEquals(expectedResult.block(), result.block());
    }

    private Flux<User> getFluxUser() {
        return fromIterable(singletonList(buildUser()));
    }

    private Mono buildGetAllUsersOkResponse() {
        Response<List<User>> response = new Response<>(OK.value(), OPERATION_SUCCESS, singletonList(buildUser()));
        ResponseEntity<Response<List<User>>> responseEntity = new ResponseEntity<>(response, OK);
        return just(responseEntity);
    }

    private User buildUser() {
        User user = new User();
        user.setId("fakeUserId");
        user.setUsername("fakeUser");
        user.setName("fake");
        user.setSurname("User");
        return user;
    }

}
