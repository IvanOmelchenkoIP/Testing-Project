package com.testingproject.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.testingproject.auth.entity.RefreshToken;
import com.testingproject.auth.entity.User;

@Repository
@Component
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, String> {

	public RefreshToken findByUser(User user);

	public RefreshToken findByToken(String token);

	@Modifying
	public void deleteByUser(User user);
}
