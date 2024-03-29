package com.testingproject.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.testingproject.auth.entity.User;

@Repository
@Component
public interface UserRepository extends JpaRepository<User, String>{

	public User findByUsername(String username);

	public User findByEmail(String email);
}
