package com.testingproject.auth.controller;

import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.testingproject.auth.entity.RefreshToken;

import com.testingproject.auth.httpbody.request.PasswordResetRequest;
import com.testingproject.auth.httpbody.response.HttpResponseBody;
import com.testingproject.auth.service.RefreshTokenService;
import com.testingproject.auth.service.UserService;

@RequestMapping("/resetPasswd")
@RestController
public class ResetPassword {
	
	@Autowired
	UserService userService;
	
	@Autowired
	RefreshTokenService refreshTokenService;
	
	@GetMapping
	public ModelAndView showResetPasswdResetPage() {
		return new ModelAndView("resetpasswdt.html");
	}
	
	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> resetPassword(@RequestBody PasswordResetRequest request) {
		RefreshToken refreshToken = refreshTokenService.findByToken(request.getToken());
		if (refreshToken == null) {
			return new ResponseEntity<HttpResponseBody>(new HttpResponseBody("token-error"), HttpStatus.BAD_REQUEST);
		}
		if (new Date().after(refreshToken.getExpireDate())) {
			return new ResponseEntity<HttpResponseBody>(new HttpResponseBody("token-error"), HttpStatus.BAD_REQUEST);
		}
		userService.resetPassword(refreshToken.getUser(), request.getPasswd());
		return ResponseEntity.ok(new HttpResponseBody("ok"));
	}
}
