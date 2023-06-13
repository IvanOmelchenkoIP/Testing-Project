package com.testingproject.auth.encryption;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class PasswordEncoder {

	private BCryptPasswordEncoder encoder;

	public PasswordEncoder() {
		this.encoder = new BCryptPasswordEncoder();
	}

	public String encode(String passwd) {
		return encoder.encode(passwd);
	}
}
