package com.testingproject.auth.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "refresh_tokens")
public class RefreshToken {

	@Id
	@Column(name = "token")
	private String token;
	
	@Id
	@Column(name = "username")
	private String username;
	
	@Column(name = "keep_token")
	private boolean keepToken;
	
	public RefreshToken() {
		super();
	}
	
	public RefreshToken(String token, String username, boolean keepToken) {
		this.token = token;
		this.username = username;
		this.keepToken = keepToken;
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

	public boolean isKeepToken() {
		return keepToken;
	}

	public void setKeepToken(boolean keepToken) {
		this.keepToken = keepToken;
	}
}
