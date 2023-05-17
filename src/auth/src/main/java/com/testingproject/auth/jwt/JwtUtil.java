package com.testingproject.auth.jwt;

import org.springframework.stereotype.Component;

@Component
public class JwtUtil {
	
	public boolean valiate(String token) {
		throw new Error("Not Implemented!");
	}

	public String getUsername(String token) {
		throw new Error("Not Implemented");
	}

	public String getDetailsByUsername(String token) {
		throw new Error("Not Implemented");
	}
}
