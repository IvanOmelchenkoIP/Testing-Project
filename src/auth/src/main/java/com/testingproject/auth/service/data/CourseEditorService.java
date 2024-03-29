package com.testingproject.auth.service.data;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.data.Course;
import com.testingproject.auth.entity.data.CourseEditor;
import com.testingproject.auth.repository.data.CourseEditorRepository;

public class CourseEditorService {
	
	@Autowired
	private CourseEditorRepository courseEditors;

	public CourseEditor createTestEditor(Course course, User user) {
		CourseEditor courseEditor = new CourseEditor(user, course);
		return courseEditors.saveAndFlush(courseEditor);
	}

	public List<CourseEditor> findByUser(User user) {
		return courseEditors.findByUser(user);
	}
	
	public List<CourseEditor> findByCourse(Course course) {
		return courseEditors.findByCourse(course);
	}

	public CourseEditor findByUserAndCourse(User user, Course course) {
		return courseEditors.findByUserAndCourse(user, course);
	}

	public void deleteByCourseAndUser(User user, Course course) {
		courseEditors.deleteByUserAndCourse(user, course);
	}
}
