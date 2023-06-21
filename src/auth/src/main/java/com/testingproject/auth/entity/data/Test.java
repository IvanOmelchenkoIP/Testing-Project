package com.testingproject.auth.entity.data;

import java.util.Collection;

import org.aspectj.weaver.patterns.TypePatternQuestions.Question;
import org.hibernate.annotations.GenericGenerator;

import com.testingproject.auth.entity.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tests")
public class Test {

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
	@JoinColumn(name = "user_id")
	private User user;

	public Test() {
		super();
	}	

	public Test(String name, String description, User user) {
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
	
	@OneToMany(mappedBy = "test")
	private Collection<TestEditor> testEditors;
	
	public Collection<TestEditor> getTestEditors() {
		return testEditors;
	}

	public void setTestEditors(Collection<TestEditor> testEditors) {
		this.testEditors = testEditors;
	}
	
	public void addTestEditor(TestEditor testEditor) {
		testEditors.add(testEditor);
	}
	
	@OneToMany(mappedBy = "test")
	private Collection<Question> questions;
	
	public Collection<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(Collection<Question> question) {
		this.questions = question;
	}
	
	public void addQuestion(Question question) {
		questions.add(question);
	}
}
