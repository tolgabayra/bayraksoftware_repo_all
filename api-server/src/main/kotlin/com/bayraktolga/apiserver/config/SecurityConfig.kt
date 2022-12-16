package com.bayraktolga.apiserver.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder

import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.SecurityFilterChain


@Configuration
@EnableWebSecurity
class SecurityConfig {

    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain{
        http.authorizeHttpRequests()
                .requestMatchers("/api/v1/auth/**").permitAll()
                .requestMatchers("/api/v1/groups/").permitAll()
                .and()
                //.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .csrf().disable()
        return http.build()
    }


    @Bean
    fun encoder(): PasswordEncoder? {
        return BCryptPasswordEncoder()
    }
}