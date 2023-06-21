package com.testingproject.auth.service.data;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.testingproject.auth.entity.data.Course;
import com.testingproject.auth.entity.data.CourseTest;
import com.testingproject.auth.entity.data.Test;
import com.testingproject.auth.repository.data.CourseTestRepository;

@Component
public class CourseTestService {
	
	@Autowired
	private CourseTestRepository courseTests;
	
	public CourseTest createTestEditor(Test test, Course course) {
		CourseTest courseTest = new CourseTest(course, test);
		return courseTests.saveAndFlush(courseTest);
	}

	public List<CourseTest> findByCourse(Course course) {
		return courseTests.findByCourse(course);
	}
	
	public List<CourseTest> findByTest(Test test) {
		return courseTests.findByTest(test);
	}
	
	public CourseTest findByCourseAndTest(Course course, Test test) { 
		return courseTests.findByCourseAndTest(course, test); 
	}
	
	public void deleteByCourseAndTest(Course course, Test test) {
		courseTests.deleteByCourseAndTest(course, test);
	}
}
