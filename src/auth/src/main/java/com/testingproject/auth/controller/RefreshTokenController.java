package com.testingproject.auth.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.testingproject.auth.httpbody.request.RefreshTokenRequest;

@RequestMapping("/refreshToken")
@RestController
public class RefreshTokenController {
	
	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> refreshJwtToken(@RequestBody RefreshTokenRequest request) {
		return null;
	}
}
