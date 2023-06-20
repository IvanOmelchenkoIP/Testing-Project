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
	
	@Query("SELECT p.* FROM password_reset_tokens p WHERE p.user_id = :userId")
	public PasswordResetToken findByUserId(@Param("userId") String userId);
	
	public PasswordResetToken findByUser(User user);
	
	@Modifying
	public void deleteByUser(User user);
}
