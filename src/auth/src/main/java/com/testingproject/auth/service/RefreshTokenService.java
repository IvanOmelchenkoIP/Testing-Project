package com.testingproject.auth.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.testingproject.auth.entity.RefreshToken;
import com.testingproject.auth.entity.User;
import com.testingproject.auth.repository.RefreshTokenRepository;

@Component
public class RefreshTokenService {

	@Autowired
	private RefreshTokenRepository refreshTokens;

	public RefreshToken createRefreshToken(String token, User user) {
		RefreshToken refreshToken = new RefreshToken(UUID.randomUUID().toString(), user);
		return refreshTokens.saveAndFlush(refreshToken);
	}

	public RefreshToken findByUser(User user) {
		return refreshTokens.findByUser(user);
	}

	public RefreshToken findByToken(String token) {
		return refreshTokens.findByToken(token);
	}

	public void deleteByUser(User user) {
		refreshTokens.deleteByUser(user);
	}
}
