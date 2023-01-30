package com.testingproject.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.testingproject.auth.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{

	@Query("SELECT * FROM users WHERE users.username = :username")
	public User getByUsername(@Param("username") String username);
	
	@Query("SELECT * FROM users WHERE users.email = :email")
	public User getByEmail(@Param("username") String email);
}
