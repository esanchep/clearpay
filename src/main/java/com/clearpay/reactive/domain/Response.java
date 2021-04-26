package com.clearpay.reactive.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Response<T> {

    private Integer status;
    private String message;
    private T body;

}
