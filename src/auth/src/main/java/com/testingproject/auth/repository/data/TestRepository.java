package com.testingproject.auth.repository.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.data.Test;

@Repository
@Component
public interface TestRepository extends JpaRepository<Test, String> {
	
	public List<Test> findByName(String name);
	
	public List<Test> findByUser(User user);
	
	public Test findByNameAndUser(String name, User user);
	
	@Modifying
	public void deleteByNameAndUser(String name, User user);
}
