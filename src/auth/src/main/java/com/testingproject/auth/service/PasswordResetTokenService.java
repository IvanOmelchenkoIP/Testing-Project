package com.testingproject.auth.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;

import com.testingproject.auth.entity.PasswordResetToken;
import com.testingproject.auth.entity.User;
import com.testingproject.auth.repository.PasswordResetTokenRepository;

public class PasswordResetTokenService {

	@Autowired
	private PasswordResetTokenRepository passwordResetTokens;
	
	public PasswordResetToken createPasswordResetToken(String id, User user) {
		PasswordResetToken passwordResetToken = new PasswordResetToken(UUID.randomUUID().toString(), user);
		return passwordResetTokens.saveAndFlush(passwordResetToken);
	}
	
	public PasswordResetToken findByUser(User user) {
		return passwordResetTokens.findByUser(user);
	}
	
	public void deleteByUser(User user) {
		passwordResetTokens.deleteByUser(user);
	}
}
