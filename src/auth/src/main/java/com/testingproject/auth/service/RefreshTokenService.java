package com.testingproject.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.testingproject.auth.entity.RefreshToken;
import com.testingproject.auth.repository.RefreshTokenRepository;

@Component
public class RefreshTokenService {

	@Autowired
	private RefreshTokenRepository refreshTokens;
	
	public RefreshToken createRefreshToken(String token, String username, boolean keepToken) {
		RefreshToken refreshToken = new RefreshToken(token, username, keepToken);
		return refreshTokens.saveAndFlush(refreshToken);
	}
	
	public RefreshToken findByUsername(String username) {
		return refreshTokens.findByUsername(username);
	}
}
