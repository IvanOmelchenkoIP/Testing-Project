package com.testingproject.auth.repository.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import com.testingproject.auth.entity.data.Answer;
import com.testingproject.auth.entity.data.Question;

public interface AnswerRepository extends JpaRepository<Answer, String> {

	public List<Answer> findByQuestion(Question question);
	
	public Answer findByContentAndQuestion(String content, Question question);
	
	@Modifying
	public void deleteByContentAndQuestion(String content, Question question);
}
