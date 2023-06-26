package com.testingproject.auth.service.data;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.testingproject.auth.entity.data.Answer;
import com.testingproject.auth.entity.data.Question;
import com.testingproject.auth.repository.data.AnswerRepository;

public class AnswerService {
	
	@Autowired
	private AnswerRepository answers;

	public Answer createQuestion(String content, boolean isCorrect, Question question) {
		Answer answer = new Answer(content, isCorrect, question);
		return answers.saveAndFlush(answer);
	}
	
	public List<Answer> findByQuestion(Question question) {
		return answers.findByQuestion(question);
	}
	
	public Answer findByContentAndQuestion(String content, Question question) {
		return answers.findByContentAndQuestion(content, question);
	}
	
	public void deleteByContentAndQuestion(String content, Question question) {
		answers.deleteByContentAndQuestion(content, question);
	}
}
