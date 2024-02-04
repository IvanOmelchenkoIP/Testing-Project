package com.testingproject.auth.httpbody.request;

import jakarta.validation.constraints.NotBlank;

public class RefreshTokenRequest {

	@NotBlank
	public String refreshToken;
	
	public String getRefreshToken() {
		return refreshToken;
	}
	
	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}
}
