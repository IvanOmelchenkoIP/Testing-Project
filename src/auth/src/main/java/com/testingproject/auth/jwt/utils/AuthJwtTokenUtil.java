package com.testingproject.auth.jwt.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class AuthJwtTokenUtil extends AbstractUserJwtUtil {

	@Value("${config.jwt.secret}")
	protected String SECRET_KEY;
	
	@Value("${config.jwt.expiration}")
	protected long EXPIRATION_TIME;
}
