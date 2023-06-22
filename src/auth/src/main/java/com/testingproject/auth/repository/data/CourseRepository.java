package com.testingproject.auth.repository.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.data.Course;

public interface CourseRepository extends JpaRepository<Course, String> {
	
	public List<Course> findByName(String name);
	
	public List<Course> findByUser(User user);
	
	public Course findByNameAndUser(String name, User user);
	
	@Modifying
	public void deleteByNameAndUser(String name, User user);
}
