package com.testingproject.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.testingproject.auth.entity.PasswordResetToken;
import com.testingproject.auth.entity.User;

@Repository
@Component
public interface PasswordResetTokenRepository  extends JpaRepository<PasswordResetToken, String> {
	
	public PasswordResetToken findByUser(User user);
	
	public PasswordResetToken findByToken(String token);
	
	@Modifying
	public void deleteByUser(User user);
}
