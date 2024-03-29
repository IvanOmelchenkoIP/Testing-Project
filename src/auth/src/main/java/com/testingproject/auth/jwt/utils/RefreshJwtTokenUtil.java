package com.testingproject.auth.jwt.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class RefreshJwtTokenUtil extends AbstractUserJwtUtil {
	
	@Value("${config.jwt.refresh.secret}")
	protected String SECRET_KEY;
	
	@Value("${config.jwt.refresh.expiration}")
	protected long EXPIRATION_TIME;
}
