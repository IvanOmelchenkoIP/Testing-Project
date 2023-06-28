package com.testingproject.auth.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.ProfileRoute;
import com.testingproject.auth.repository.ProfileRouteRepository;

@Component
public class ProfileRouteService {

	@Autowired
	public ProfileRouteRepository userpageRoutes;
	
	public String generateProfileRoute() {
		return UUID.randomUUID().toString().replace("-", "");
	}
	
	public ProfileRoute createProfileRoute(String route, User user) {
		ProfileRoute userpageRoute = new ProfileRoute(route, user);
		return userpageRoutes.saveAndFlush(userpageRoute);
	}
	
	public ProfileRoute findByToute(String route) {
		return userpageRoutes.findByRoute(route);
	}
	
	public ProfileRoute findByUser(User user) {
		return userpageRoutes.findByUser(user);
	}
	
	public void deleteByUser(User user) {
		userpageRoutes.deleteByUser(user);
	}
}
