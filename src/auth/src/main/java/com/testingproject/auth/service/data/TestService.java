package com.testingproject.auth.service.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.data.Test;
import com.testingproject.auth.repository.data.TestRepository;

@Component
public class TestService {

	@Autowired
	private TestRepository tests;
	
	public Test createTest(String name, String description, User user) {
		Test test = new Test(name, description, user);
		return tests.saveAndFlush(test);
	}
	
	public Test findByUser(User user) {
		return tests.findByUser(user);
	}
	
	public Test findByName(String name) {
		return tests.findByName(name);
	}
	
	public Test findByNameAndUser(String name, User user) {
		return tests.findByNameAndUser(name, user);
	}
	
	public void deleteByNameAndUser(String name, User user) {
		tests.deleteByNameAndUser(name, user);
	}
}
