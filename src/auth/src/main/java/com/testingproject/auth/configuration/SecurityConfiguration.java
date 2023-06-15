package com.testingproject.auth.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.firewall.DefaultHttpFirewall;
import org.springframework.security.web.firewall.HttpFirewall;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.testingproject.auth.jwt.JwtTokenFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

	@Autowired
	private JwtTokenFilter jwtTokenFilter;

	@Bean
	public HttpFirewall defaultHttpFirewall() {
		return new DefaultHttpFirewall();
	}

	@Bean
	public SecurityFilterChain configure(HttpSecurity http) throws Exception {
		return http.cors().and().csrf().disable().authorizeHttpRequests()
				.requestMatchers("/user**", "/user/**").authenticated()
				.requestMatchers("/**", "/register**", "register/**", "/login**", "/login/**").permitAll().and()
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
				.addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class).build();
	}

	@Bean
	public CorsFilter corsFilter() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowCredentials(true);
		configuration.addAllowedHeader("*");
		configuration.addAllowedMethod("*");
		configuration.addAllowedOrigin("*");

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);

		return new CorsFilter(source);
	}
}
