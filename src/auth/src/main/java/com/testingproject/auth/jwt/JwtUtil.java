package com.testingproject.auth.jwt;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.testingproject.auth.repository.UserRepository;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

	// hardcode for now, move to properties
	private static final String SECRET_KEY = "4683D381C5C232891F1421B2666F7";
	private static final long EXPIRATION_MILLS = 1000 * 60;

	private Key getSigningKey() {
		byte[] bytes = Decoders.BASE64.decode(SECRET_KEY);
		return Keys.hmacShaKeyFor(bytes);
	}

	private Claims getAllClaims(String token) {
		return Jwts.parserBuilder().setSigningKey(getSigningKey()).build().parseClaimsJws(token).getBody();
	}

	private <T> T getClaim(String token, Function<Claims, T> resolver) {
		final Claims claims = getAllClaims(token);
		return resolver.apply(claims);
	}

	public String getUsername(String token) {
		return getClaim(token, Claims::getSubject);
	}
	
	public Date getExpiration(String token) {
		return getClaim(token, Claims::getExpiration);
	}
	

	public String generate(UserDetails details) {
		return generate(new HashMap<>(), details);
	}
	
	public String generate(Map<String, Object> claims, UserDetails details) {
		return Jwts.builder().setClaims(claims).setSubject(details.getUsername())
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_MILLS))
				.signWith(getSigningKey(), SignatureAlgorithm.HS256).compact();
	}

	
	public boolean tokenExpired(String token) {
		return getExpiration(token).before(new Date());
	}
}
