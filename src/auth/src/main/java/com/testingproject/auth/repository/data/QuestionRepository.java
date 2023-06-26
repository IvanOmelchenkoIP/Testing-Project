package com.testingproject.auth.repository.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.testingproject.auth.entity.data.Question;
import com.testingproject.auth.entity.data.Test;

@Repository
@Component
public interface QuestionRepository extends JpaRepository<Question, String> {

	public List<Question> findByTest(Test test);
	
	public Question findByContentAndTest(String content, Test test);
	
	@Modifying
	public void deleteByContentAndTest(String content, Test test);
}
