package com.testingproject.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.testingproject.auth.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{

}
