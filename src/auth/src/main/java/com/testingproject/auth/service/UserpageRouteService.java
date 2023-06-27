package com.testingproject.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.UserpageRoute;
import com.testingproject.auth.repository.UserpageRouteRepository;

@Component
public class UserpageRouteService {

	@Autowired
	public UserpageRouteRepository userpageRoutes;
	
	public UserpageRoute createUserpageId(String route, User user) {
		UserpageRoute userpageRoute = new UserpageRoute(route, user);
		return userpageRoutes.saveAndFlush(userpageRoute);
	}
	
	public UserpageRoute findByUserpageId(String route) {
		return userpageRoutes.findByRoute(route);
	}
	
	public UserpageRoute findByUser(User user) {
		return userpageRoutes.findByUser(user);
	}
	
	public void deleteByUser(User user) {
		userpageRoutes.deleteByUser(user);
	}
}
