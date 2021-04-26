package com.clearpay.reactive.repository;

import com.clearpay.reactive.domain.User;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface UsersRepository extends ReactiveMongoRepository<User, String> {
}
