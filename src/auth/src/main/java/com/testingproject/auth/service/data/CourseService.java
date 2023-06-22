package com.testingproject.auth.service.data;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.data.Course;
import com.testingproject.auth.repository.data.CourseRepository;

public class CourseService {
	
	@Autowired
	private CourseRepository courses;
	
	public Course createTest(String name, String description, User user) {
		Course course = new Course(name, description, user);
		return courses.saveAndFlush(course);
	}
	
	public List<Course> findByUser(User user) {
		return courses.findByUser(user);
	}
	
	public List<Course> findByName(String name) {
		return courses.findByName(name);
	}
	
	public Course findByNameAndUser(String name, User user) {
		return courses.findByNameAndUser(name, user);
	}
	
	public void deleteByNameAndUser(String name, User user) {
		courses.deleteByNameAndUser(name, user);
	}
}