package com.testingproject.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.testingproject.auth.entity.RefreshToken;

@Repository
@Component
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, String>{

	public RefreshToken findByUsername(String username);
}
