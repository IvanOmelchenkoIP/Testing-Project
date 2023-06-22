package com.testingproject.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.testingproject.auth.entity.ValidToken;

@Repository
@Component
public interface ValidTokenRepository extends JpaRepository<ValidToken, String>{

	public ValidToken findByToken(String token);
	
	@Modifying
	public void deleteByToken(String token);
}
