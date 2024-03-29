package com.testingproject.auth.entity;

import java.util.Collection;

import org.hibernate.annotations.GenericGenerator;

import com.testingproject.auth.entity.data.Course;
import com.testingproject.auth.entity.data.CourseEditor;
import com.testingproject.auth.entity.data.Test;
import com.testingproject.auth.entity.data.TestEditor;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	@Column(name = "id", unique = true)
	private String id;

	@Column(name = "username")
	private String username;

	@Column(name = "email")
	private String email;

	@Column(name = "passwd")
	private String passwd;

	public User() {
		super();
	}

	public User(String username, String email, String passwd) {
		super();
		this.username = username;
		this.email = email;
		this.passwd = passwd;
	}


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}

	@Override
	public String toString() {
		return "User: { id = " + id + " username = " + username + " email = " + email + " }";
	}
	
	@OneToOne(mappedBy = "user")
	private ProfileRoute profileRoute;
	
	public ProfileRoute getProfileRoute() {
		return profileRoute;
	}
	
	public void setProfileRoute(ProfileRoute profileRoute) {
		this.profileRoute = profileRoute;
	}
	
	
	@OneToMany(mappedBy = "user")
	private Collection<Test> tests;
	
	public Collection<Test> getTests() {
		return tests;
	}

	public void setTests(Collection<Test> tests) {
		this.tests = tests;
	}
	
	public void addTest(Test test) {
		tests.add(test);
	}
	
	@OneToMany(mappedBy = "user")
	private Collection<TestEditor> testEditors;
	
	public Collection<TestEditor> setTestEditors() {
		return testEditors;
	}

	public void setTestEditors(Collection<TestEditor> testEditors) {
		this.testEditors = testEditors;
	}
	
	public void addTestEditor(TestEditor testEditor) {
		testEditors.add(testEditor);
	}
	
	@OneToMany(mappedBy = "user")
	private Collection<Course> courses;
	
	public Collection<Course> getCourses() {
		return courses;
	}

	public void setCourses(Collection<Course> courses) {
		this.courses = courses;
	}
	
	public void addCourse(Course course) {
		courses.add(course);
	}
	
	@OneToMany(mappedBy = "user")
	private Collection<CourseEditor> courseEditors;
	
	public Collection<CourseEditor> setCourseEditors() {
		return courseEditors;
	}

	public void setCourseEditors(Collection<CourseEditor> courseEditors) {
		this.courseEditors = courseEditors;
	}
	
	public void addCourseEditor(CourseEditor courseEditor) {
		courseEditors.add(courseEditor);
	}
} 
