package com.testingproject.auth.jwt;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import org.springframework.stereotype.Component;
import com.testingproject.auth.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

	// hardcode for now, move to properties
	private static final String SECRET_KEY = "BlSYdsaUoQDNjpGId6ZxCXxk2yEjnOdxVRXAXHVWqZUSSZSjJUFjIDpx4ZEJs6LWo3fiUKBk7rpn5c2MPrWd31kRCYgC0sDM6aVKh9H1p3l7AXNGD8h9hQ59bMS/4R8wthhaEdAY468o2qK2irEtm6uCw8ObsfMvIKCd+z51QrAUb7IXaI/Ln41q0Jz+POHqAMsXgG1Xifa96dMLgxBJtc3TIkZasXwNrb4hCErML6ZUbpAc2TajrGQTMWeq/iiYcc9cYkebJqw3s6K9nsx+W3XVe175DkVx/gH7etNjhrKHx50bgUvk069P4m8CAFlp/kKwEYt03TzGOGXojJ3b1fOQAczSnXboGZpuTh4rHYE=\r\n";
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

	public String generate(User user) {
		return generate(new HashMap<>(), user);
	}

	public String generate(Map<String, Object> claims, User user) {
		return Jwts.builder().setClaims(claims).setSubject(user.getUsername())
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_MILLS))
				.signWith(getSigningKey(), SignatureAlgorithm.HS256).compact();
	}

	public boolean tokenExpired(String token) {
		return getExpiration(token).before(new Date());
	}
}
