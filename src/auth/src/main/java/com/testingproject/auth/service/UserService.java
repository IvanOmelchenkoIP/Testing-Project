package com.testingproject.auth.service;

import org.springframework.dao.DataIntegrityViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.repository.UserRepository;

@Component
public class UserService {

	@Autowired
	private UserRepository users;
	
	public User registerUser(String username, String email, String passwd) throws DataIntegrityViolationException, IllegalArgumentException  {
		User user = new User(username, email, passwd);
		return users.saveAndFlush(user);
	}
	
	public User findByUsername(String username) {
		return users.findByUsername(username);
	}
}
