package com.testingproject.auth.repository.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.data.Test;
import com.testingproject.auth.entity.data.TestEditor;

public interface TestEditorRepository extends JpaRepository<TestEditor, String> {

	public List<TestEditor> findByTest(Test test);
	
	public List<TestEditor> findByUser(User user);
	
	public TestEditor findByTestAndUser(Test test, User user);
	
	@Modifying
	public void deleteByTestAndUser(Test test, User user);
}
