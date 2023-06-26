package com.testingproject.auth.repository.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.data.Test;
import com.testingproject.auth.entity.data.TestEditor;

public interface TestEditorRepository extends JpaRepository<TestEditor, String> {

	public List<TestEditor> findByUser(User user);
	
	public List<TestEditor> findByTest(Test test);
		
	public TestEditor findByUserAndTest(User user, Test test);
	
	@Modifying
	public void deleteByUserAndTest(User user, Test test);
}
