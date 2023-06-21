package com.testingproject.auth.entity.data;

import java.util.Collection;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.stereotype.Component;

import com.testingproject.auth.entity.User;

import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Component
@Table(name = "courses")
public class Course {

	@Id 
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	@Column(name = "id", unique = true)
	private String id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "description")
	private String description;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId
	@JoinColumn(name = "creator_id")
	private User user;

	public Course() {
		super();
	}	

	public Course(String name, String description, User user) {
		super();
		this.name = name;
		this.description = description;
		this.user = user;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	@OneToMany(mappedBy = "course")
	private Collection<CourseEditor> courseEditors;
	
	public Collection<CourseEditor> getTestEditors() {
		return courseEditors;
	}

	public void setTestEditors(Collection<CourseEditor> courseEditors) {
		this.courseEditors = courseEditors;
	}
	
	public void addTestEditor(CourseEditor courseEditor) {
		courseEditors.add(courseEditor);
	}
	
	@OneToMany(mappedBy = "course")
	private Collection<CourseTest> courseTests;
	
	public Collection<CourseTest> getCourseTests() {
		return courseTests;
	}

	public void setCourseTests(Collection<CourseTest> courseTests) {
		this.courseTests = courseTests;
	}
	
	public void addCourseTest(CourseTest courseTest) {
		courseTests.add(courseTest);
	}
}
