package com.testingproject.auth.entity.data;

import java.util.Collection;

import org.aspectj.weaver.patterns.TypePatternQuestions.Question;
import org.hibernate.annotations.GenericGenerator;

import com.testingproject.auth.entity.data.Test;

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
@Table(name = "question")
public class Question {

	@Id 
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	@Column(name = "id", unique = true)
	private String id;
	
	@Column(name = "content")
	private String content;
	
	@Column(name = "mark")
	private int mark;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId
	@JoinColumn(name = "test_id")
	private Test test;

	public Question() {
		super();
	}

	public Question(String content, int mark, Test test) {
		super();
		this.content = content;
		this.mark = mark;
		this.test = test;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getMark() {
		return mark;
	}

	public void setMark(int mark) {
		this.mark = mark;
	}

	public Test getTest() {
		return test;
	}

	public void setTest(Test test) {
		this.test = test;
	}	
	
	@OneToMany(mappedBy = "question")
	private Collection<Answer> answers;
	
	public Collection<Answer> getAnswers() {
		return answers;
	}

	public void setAnswers(Collection<Answer> answer) {
		this.answers = answer;
	}
	
	public void addAnswer(Answer answer) {
		answers.add(answer);
	}
}
