package com.testingproject.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.ValidToken;
import com.testingproject.auth.repository.ValidTokenRepository;

@Component
public class ValidTokenService {

	@Autowired
	private ValidTokenRepository validTokens;

	public ValidToken createValidToken(String token, User user) {
		ValidToken validToken = new ValidToken(token, user);
		return validTokens.saveAndFlush(validToken);
	}

	public ValidToken findByToken(String token) {
		return validTokens.findByToken(token);
	}

	public void deleteByToken(String token) {
		validTokens.deleteByToken(token);
	}
}
