package com.testingproject.auth.jwt;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.WebUtils;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.jwt.utils.AuthJwtTokenUtil;
import com.testingproject.auth.service.UserService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtTokenFilter extends OncePerRequestFilter {

	private final String JWT_HEADER = "Bearer ";

	@Autowired
	private AuthJwtTokenUtil jwtUtil;
	
	@Autowired
	private UserService userService;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String token = "";
		System.out.println("\n---------------------------\nCOOKIES");
		Cookie[] cookies = request.getCookies();
		for (Cookie cookie : cookies) System.out.println(cookie.getName() + " = " + cookie.getValue());
		final String header = request.getHeader(HttpHeaders.AUTHORIZATION);
		if (header == null || !header.startsWith(JWT_HEADER)) {
			Cookie jwtCookie = WebUtils.getCookie(request, "jwtToken");
			if (jwtCookie == null) {
				filterChain.doFilter(request, response);
				return;
			}
			token = jwtCookie.getValue();
			System.out.println("RECEIVED_TOKEN = " + token);
		} else {
			token = header.substring(JWT_HEADER.length()).trim();
		}

		User user = userService.findByUsername(jwtUtil.getUsername(token));
		boolean tokenValid = jwtUtil.validate(token, userService);
		boolean notAuthed = SecurityContextHolder.getContext().getAuthentication() == null;
		if (tokenValid && notAuthed) {
			UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(user, null, null);
			auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
			SecurityContextHolder.getContext().setAuthentication(auth);
		}
		filterChain.doFilter(request, response);
	}
}
