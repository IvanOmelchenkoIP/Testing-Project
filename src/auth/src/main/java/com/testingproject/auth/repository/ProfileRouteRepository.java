package com.testingproject.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.ProfileRoute;

@Repository
@Component
public interface ProfileRouteRepository extends JpaRepository<ProfileRoute, String> {

	public ProfileRoute findByUser(User user);
	
	public ProfileRoute findByRoute(String route);
	
	@Modifying
	public void deleteByUser(User user);	
}
