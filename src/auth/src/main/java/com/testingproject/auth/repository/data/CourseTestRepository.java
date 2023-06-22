package com.testingproject.auth.repository.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.testingproject.auth.entity.data.Course;
import com.testingproject.auth.entity.data.CourseTest;
import com.testingproject.auth.entity.data.Test;

@Repository
@Component
public interface CourseTestRepository extends JpaRepository<CourseTest, String> {

	public List<CourseTest> findByCourse(Course course);
	
	public List<CourseTest> findByTest(Test test);
		
	public CourseTest findByCourseAndTest(Course course, Test test);
	
	@Modifying
	public void deleteByCourseAndTest(Course course, Test test);
}
