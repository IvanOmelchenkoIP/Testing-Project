package com.testingproject.auth.httpbody.request;

import jakarta.validation.constraints.NotBlank;

public class PasswordResetRequest {

	@NotBlank
	private String token;

	@NotBlank
	private String passwd;

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
}
