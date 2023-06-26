package com.testingproject.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.UserpageId;
import com.testingproject.auth.repository.UserpageIdRepository;

@Component
public class UserpageIdService {

	@Autowired
	public UserpageIdRepository userpageIds;
	
	public UserpageId createUserpageId(String userpageId, User user) {
		UserpageId userpageIdInstance = new UserpageId(userpageId, user);
		return userpageIds.saveAndFlush(userpageIdInstance);
	}
	
	public UserpageId findByUserpageId(String userpageId) {
		return userpageIds.findByUserpageId(userpageId);
	}
	
	public UserpageId findByUser(User user) {
		return userpageIds.findByUser(user);
	}
	
	public void deleteByUser(User user) {
		userpageIds.deleteByUser(user);
	}
}
