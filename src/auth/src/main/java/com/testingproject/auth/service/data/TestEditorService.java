package com.testingproject.auth.service.data;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Component;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.data.Test;
import com.testingproject.auth.entity.data.TestEditor;
import com.testingproject.auth.repository.data.TestEditorRepository;

@Component
public class TestEditorService {
	
	@Autowired
	private TestEditorRepository testEditors;
	
	public TestEditor createTestEditor(Test test, User user) {
		TestEditor testEditor = new TestEditor(user, test);
		return testEditors.saveAndFlush(testEditor);
	}

	public List<TestEditor> findByTest(Test test) {
		return testEditors.findByTest(test);
	}
	
	public List<TestEditor> findByUser(User user) {
		return testEditors.findByUser(user);
	}
	
	public TestEditor findByTestAndUser(Test test, User user) { 
		return testEditors.findByTestAndUser(test, user); 
	}
	
	@Modifying
	public void deleteByTestAndUser(Test test, User user) {
		testEditors.deleteByTestAndUser(test, user);
	}
}
