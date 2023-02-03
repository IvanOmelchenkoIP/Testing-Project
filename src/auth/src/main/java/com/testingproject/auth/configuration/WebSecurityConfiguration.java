package com.testingproject.auth.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.SecurityBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import jakarta.servlet.Filter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration {

	@Bean
	public SecurityFilterChain configure(HttpSecurity http) throws Exception {
		http.authorizeHttpRequests((authorize) -> authorize.requestMatchers(HttpMethod.GET, "/").anonymous().requestMatchers(HttpMethod.GET, "user").authenticated());
		return http.build();
	}
	
	@Bean
	public SecurityBuilder<?> configureUnauthenticated(WebSecurity web) throws Exception {
		web.ignoring().requestMatchers(HttpMethod.GET, "/", "/login", "/register");
		web.ignoring().requestMatchers(HttpMethod.POST, "/login", "/register");
		return (SecurityBuilder<?>) web.build();
	}
}
