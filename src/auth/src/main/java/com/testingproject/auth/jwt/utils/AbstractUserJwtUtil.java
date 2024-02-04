package com.testingproject.auth.jwt.utils;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.service.UserService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public abstract class AbstractUserJwtUtil extends AbstractJwtUtil<User, UserService> {

	public String getUsername(String token) {
		return getClaim(token, Claims::getSubject);
	}

	public String generate(User user) {
		return generate(new HashMap<>(), user);
	}
	
	@Override
	public String generate(Map<String, Object> claims, User entity) {
		return Jwts.builder().setClaims(claims).setSubject(entity.getUsername())
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
				.signWith(getSigningKey(), SignatureAlgorithm.HS256).compact();
	}

	@Override
	public boolean validate(String token, UserService service) {
		String username = getUsername(token);
		User user = service.findByUsername(username);
		return !tokenExpired(token) && user != null;
	}
}
