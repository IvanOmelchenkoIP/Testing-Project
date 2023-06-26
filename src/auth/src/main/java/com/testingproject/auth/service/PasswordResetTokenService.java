package com.testingproject.auth.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.testingproject.auth.entity.PasswordResetToken;
import com.testingproject.auth.entity.User;
import com.testingproject.auth.repository.PasswordResetTokenRepository;

@Component
public class PasswordResetTokenService {

	@Autowired
	private PasswordResetTokenRepository passwordResetTokens;
	
	public PasswordResetToken createPasswordResetToken(String token, User user) {
		PasswordResetToken passwordResetToken = new PasswordResetToken(token, user);
		return passwordResetTokens.saveAndFlush(passwordResetToken);
	}
	
	public PasswordResetToken createOrRewritePasswordResetToken(String token, User user) {
		PasswordResetToken oldResetToken = passwordResetTokens.findByUser(user);
		if (oldResetToken != null) {
			passwordResetTokens.deleteByUser(user);
		}
		return createPasswordResetToken(token, user);
	}
	
	public PasswordResetToken findByUser(User user) {
		return passwordResetTokens.findByUser(user);
	}
	
	public PasswordResetToken findByToken(String token) {
		return passwordResetTokens.findByToken(token);
	}
	
	public boolean tokenExpired(PasswordResetToken token) {
		return new Date().after(token.getExpireDate());
	}
	
	public void deleteByUser(User user) {
		passwordResetTokens.deleteByUser(user);
	}
}
