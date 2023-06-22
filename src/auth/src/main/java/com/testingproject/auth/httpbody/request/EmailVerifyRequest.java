package com.testingproject.auth.httpbody.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class EmailVerifyRequest {

	@NotBlank
	@Email
	private String email;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
