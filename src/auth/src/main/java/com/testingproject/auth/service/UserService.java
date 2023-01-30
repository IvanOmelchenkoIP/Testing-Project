package com.testingproject.auth.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.repository.UserRepository;

public class UserService {

	@Autowired
	private UserRepository users;
	
	public void registerUser(User user) throws Exception  {
		if (emailExists(user.getEmail()) || usernameExists(user.getUsername())) {
			throw new Exception("Email or Username Already Exists");
		}
		users.saveAndFlush(user);
	}
	
	private boolean emailExists(String email) {
		return users.getByEmail(email) == null ? false : true;
	}
	
	private boolean usernameExists(String username) {
		return users.getByUsername(username) == null ? false : true;
	}
}
