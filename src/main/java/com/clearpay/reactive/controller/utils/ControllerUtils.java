package com.clearpay.reactive.controller.utils;

import com.clearpay.reactive.domain.Response;
import org.springframework.http.ResponseEntity;
import reactor.core.publisher.Mono;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.ResponseEntity.ok;

public class ControllerUtils {

    public static <T> Mono<ResponseEntity<Response<T>>> getMonoResponseOnError(Throwable throwable) {
        return Mono.just(ok().body(new Response<>(INTERNAL_SERVER_ERROR.value(), throwable.getMessage(), null)));
    }

}
