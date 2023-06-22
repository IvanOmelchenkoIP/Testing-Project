package com.testingproject.auth.httpbody.request;

import jakarta.validation.constraints.NotBlank;

public class PasswordResetRequest {
	
	@NotBlank
	private String code;
	
	@NotBlank
	private String passwd;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
}
