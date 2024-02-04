package com.testingproject.auth.jwt.utils;

import java.security.Key;
import java.util.Date;
import java.util.Map;
import java.util.function.Function;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

public abstract class AbstractJwtUtil<T, V> {

	protected String SECRET_KEY;
	protected long EXPIRATION_TIME;
	
	protected Key getSigningKey() {
		byte[] bytes = Decoders.BASE64.decode(SECRET_KEY);
		return Keys.hmacShaKeyFor(bytes);
	}
	
	protected Claims getAllClaims(String token) {
		return Jwts.parserBuilder().setSigningKey(getSigningKey()).build().parseClaimsJws(token).getBody();
	}
	
	protected <U> U getClaim(String token, Function<Claims, U> resolver) {
		final Claims claims = getAllClaims(token);
		return resolver.apply(claims);
	}
	
	public Date getExpiration(String token) {
		return getClaim(token, Claims::getExpiration);
	}

	public boolean tokenExpired(String token) {
		return getExpiration(token).before(new Date());
	}
	
	public abstract String generate(Map<String, Object> claims, T entity);
	
	public abstract boolean validate(String token, V service);

}
