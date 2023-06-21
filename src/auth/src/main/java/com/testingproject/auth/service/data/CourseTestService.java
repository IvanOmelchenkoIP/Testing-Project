package com.testingproject.auth.service.data;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.data.Course;
import com.testingproject.auth.entity.data.CourseEditor;
import com.testingproject.auth.entity.data.CourseTest;
import com.testingproject.auth.entity.data.Test;
import com.testingproject.auth.entity.data.TestEditor;
import com.testingproject.auth.repository.data.CourseTestRepository;
import com.testingproject.auth.repository.data.TestEditorRepository;

@Component
public class CourseTestService {
	
	@Autowired
	private CourseTestRepository courseTests;
	
	public CourseTest createTestEditor(Test test, Course course) {
		CourseTest courseTest = new CourseTest(course, test);
		return courseTests.saveAndFlush(courseTest);
	}

	public List<CourseTest> findByTest(Test test) {
		return courseTests.findByTest(test);
	}
	
	public List<CourseTest> findByCourse(Course course) {
		return courseTests.findByCourse(course);
	}
	
	public CourseTest findByTestAndCourse(Test test, Course course) { 
		return courseTests.findByTestAndCourse(test, course); 
	}
	
	public void deleteByTestAndCourse(Test test, Course course) {
		courseTests.deleteByTestAndCourse(test, course);
	}
}
