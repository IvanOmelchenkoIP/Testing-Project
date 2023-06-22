package com.testingproject.auth.entity.data;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;

@Entity
@Table(name = "answers")
public class Answer {

	@Id 
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	@Column(name = "id", unique = true)
	private String id;
	
	@Column(name = "content")
	private String content;
	
	@Column(name = "is_correct")
	private boolean isCorrect;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId
	@JoinColumn(name = "question_id")
	private Question question;
	
	public Answer() {
		super();
	}

	public Answer(String content, boolean isCorrect, Question question) {
		super();
		this.content = content;
		this.isCorrect = isCorrect;
		this.question = question;
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

	public boolean isCorrect() {
		return isCorrect;
	}

	public void setCorrect(boolean isCorrect) {
		this.isCorrect = isCorrect;
	}

	public Question getQuestiom() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}
}
