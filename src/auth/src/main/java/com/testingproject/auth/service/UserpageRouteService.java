package com.testingproject.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.UserpageRoute;
import com.testingproject.auth.repository.UserpageRouteRepository;

@Component
public class UserpageRouteService {

	@Autowired
	public UserpageRouteRepository userpageIds;
	
	public UserpageRoute createUserpageId(String userpageId, User user) {
		UserpageRoute userpageIdInstance = new UserpageRoute(userpageId, user);
		return userpageIds.saveAndFlush(userpageIdInstance);
	}
	
	public UserpageRoute findByUserpageId(String route) {
		return userpageIds.findByRoute(route);
	}
	
	public UserpageRoute findByUser(User user) {
		return userpageIds.findByUser(user);
	}
	
	public void deleteByUser(User user) {
		userpageIds.deleteByUser(user);
	}
}
