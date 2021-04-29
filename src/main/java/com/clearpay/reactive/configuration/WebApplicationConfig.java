package com.clearpay.reactive.configuration;

import lombok.SneakyThrows;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.reactive.config.ResourceHandlerRegistry;
import org.springframework.web.reactive.config.WebFluxConfigurer;
import org.springframework.web.reactive.resource.PathResourceResolver;
import reactor.core.publisher.Mono;

import static reactor.core.publisher.Mono.just;

@Configuration
public class WebApplicationConfig implements WebFluxConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/public/")
                .resourceChain(true)
                .addResolver(new PathResourceResolver() {
                    @SneakyThrows
                    @Override
                    protected Mono<Resource> getResource(String resourcePath, Resource location) {
                        Resource requestedResource = location.createRelative(resourcePath);
                        return just(requestedResource.exists() && requestedResource.isReadable() ? requestedResource
                                : new ClassPathResource("/public/index.html"));
                    }
                });
    }

}
