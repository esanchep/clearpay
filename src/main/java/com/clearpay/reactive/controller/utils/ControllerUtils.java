package com.clearpay.reactive.controller.utils;

import com.clearpay.reactive.domain.Response;
import org.springframework.http.ResponseEntity;
import reactor.core.publisher.Mono;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.ResponseEntity.badRequest;
import static org.springframework.http.ResponseEntity.ok;
import static reactor.core.publisher.Mono.just;

public class ControllerUtils {

    public static <T> Mono<ResponseEntity<Response<T>>> getMonoResponseOnError(Throwable throwable) {
        return just(ok().body(new Response<>(INTERNAL_SERVER_ERROR.value(), throwable.getMessage(), null)));
    }

    public static Mono buildBadRequestResponse(String message) {
        return just(badRequest().body(new Response<>(BAD_REQUEST.value(), message, null)));
    }

}
