package com.testingproject.auth.repository.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.data.Course;
import com.testingproject.auth.entity.data.CourseEditor;

@Repository
@Component
public interface CourseEditorRepository extends JpaRepository<CourseEditor, String> {

	public List<CourseEditor> findByUser(User user);
	
	public List<CourseEditor> findByCourse(Course course);
		
	public CourseEditor findByUserAndCourse(User user, Course course);
	
	@Modifying
	public void deleteByUserAndCourse(User user, Course course);
}
