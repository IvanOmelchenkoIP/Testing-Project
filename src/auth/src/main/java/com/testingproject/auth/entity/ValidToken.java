package com.testingproject.auth.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "valid_tokens")
public class ValidToken {

	@Id
	@Column(name = "token")
	private String token;
	
	@Id
	@Column(name = "username")
	private String username;

	public ValidToken() {
		super();
	}
	
	public ValidToken(String token, String username) {
		super();
		this.token = token;
		this.username = username;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
}
