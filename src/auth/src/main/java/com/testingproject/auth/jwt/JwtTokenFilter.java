package com.testingproject.auth.jwt;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.repository.UserRepository;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtTokenFilter extends OncePerRequestFilter {

	private final String JWT_HEADER = "Bearer ";

	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private UserRepository userRepository;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		final String header = request.getHeader(HttpHeaders.AUTHORIZATION);
		if (header.isEmpty() || !header.startsWith(JWT_HEADER)) {
			filterChain.doFilter(request, response);
			return;
		}

		final String token = header.substring(JWT_HEADER.length()).trim();
		if (!jwtUtil.valiate(token)) {
			filterChain.doFilter(request, response);
			return;
		}

		User user = userRepository.findByUsername(jwtUtil.getDetailsByUsername(token));
		UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(user, null, null);
		auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
		SecurityContextHolder.getContext().setAuthentication(auth);
		filterChain.doFilter(request, response);
	}

}
