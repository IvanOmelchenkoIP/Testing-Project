package com.testingproject.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.entity.UserpageRoute;

@Repository
@Component
public interface UserpageRouteRepository extends JpaRepository<UserpageRoute, String> {

	public UserpageRoute findByUser(User user);
	
	public UserpageRoute findByRoute(String route);
	
	@Modifying
	public void deleteByUser(User user);	
}
