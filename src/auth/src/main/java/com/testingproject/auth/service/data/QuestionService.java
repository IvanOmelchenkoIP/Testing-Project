package com.testingproject.auth.service.data;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.testingproject.auth.entity.data.Question;
import com.testingproject.auth.entity.data.Test;
import com.testingproject.auth.repository.data.QuestionRepository;

@Component
public class QuestionService {

	@Autowired
	private QuestionRepository questions;
	
	public Question createQuestion(String content, int mark, Test test) {
		Question question = new Question(content, mark, test);
		return questions.saveAndFlush(question);
	}
	
	public List<Question> findByTest(Test test) {
		return questions.findByTest(test);
	}
	
	public Question findByContentAndTest(String content, Test test) {
		return questions.findByContentAndTest(content, test);
	}
	
	public void deleteByContentAndTest(String content, Test test) {
		questions.deleteByContentAndTest(content, test);
	}
}
