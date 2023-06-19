package com.testingproject.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.testingproject.auth.entity.ValidToken;
import com.testingproject.auth.repository.ValidTokenRepository;

@Component
public class ValidTokenService {

	@Autowired
	private ValidTokenRepository validTokens;
	
	public ValidToken createValidToken(String token, String username) {
		ValidToken validToken = new ValidToken(token, username);
		return validTokens.saveAndFlush(validToken);
	}
	
	public ValidToken findByToken(String token) {
		return validTokens.findByToken(token);
	}
}
