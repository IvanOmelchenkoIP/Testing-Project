package com.testingproject.auth.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

/*@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration {

	@Bean
	public SecurityFilterChain configure(HttpSecurity http) throws Exception {
		http.securityMatcher("/user");
		.authorizeHttpRequests().requestMatchers("/user").authenticated()
				.requestMatchers(HttpMethod.GET, "/", "/login", "/register").permitAll()
				.requestMatchers(HttpMethod.POST, "/", "/login", "/register").permitAll();
		return http.build();
	}
}*/
