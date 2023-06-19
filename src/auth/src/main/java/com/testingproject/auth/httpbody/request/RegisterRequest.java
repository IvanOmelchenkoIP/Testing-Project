package com.testingproject.auth.httpbody.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Email;

public class RegisterRequest {
	
	@NotBlank
	private String username;
	
	@NotBlank
	@Email
	private String email;
	
	@NotBlank
	private String passwd;
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
}
