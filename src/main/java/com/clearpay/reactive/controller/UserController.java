package com.clearpay.reactive.controller;

import com.clearpay.reactive.controller.utils.ControllerUtils;
import com.clearpay.reactive.domain.Response;
import com.clearpay.reactive.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import static com.clearpay.reactive.controller.utils.ControllerConstants.OPERATION_SUCCESS;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.ResponseEntity.ok;

@Slf4j
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping()
    Mono getAllUsers() {
        log.info("getAllUsers request received");
        return userService.getAllUsers()
                .collectList()
                .map(users ->
                        ok().body(new Response<>(OK.value(), OPERATION_SUCCESS, users)))
                .onErrorResume(ControllerUtils::getMonoResponseOnError);
    }


}
