package com.testingproject.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.UserpageId;

@Repository
@Component
public interface UserpageIdRepository extends JpaRepository<UserpageId, String> {

	public UserpageId findByUser(User user);
	
	public UserpageId findByUserpageId(String userpahgeId);
	
	@Modifying
	public void deleteByUser(User user);	
}
