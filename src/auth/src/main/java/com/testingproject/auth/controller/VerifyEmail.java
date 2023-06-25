package com.testingproject.auth.controller;

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

import com.testingproject.auth.entity.User;
import com.testingproject.auth.httpbody.request.EmailVerifyRequest;
import com.testingproject.auth.httpbody.response.HttpResponseBody;
import com.testingproject.auth.mail.EmailSenderService;
import com.testingproject.auth.service.PasswordResetTokenService;
import com.testingproject.auth.service.UserService;

@RequestMapping("/verifyEmail")
@RestController
public class VerifyEmail {

	@Autowired
	UserService userService;

	@Autowired
	PasswordResetTokenService passwdResetService;

	@Autowired
	EmailSenderService emailSenderService;

	@GetMapping
	public ModelAndView showResetPasswdPage() {
		return new ModelAndView("verifyemail.html");
	}

	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> confirmEmail(@RequestBody EmailVerifyRequest request) {
		String email = request.getEmail();
		User user = userService.findByEmail(email);
		if (user == null) {
			return new ResponseEntity<>(new HttpResponseBody("no-user-found"), HttpStatus.BAD_REQUEST);
		}
		String token = UUID.randomUUID().toString();
		passwdResetService.createOrRewritePasswordResetToken(token, user);
		//emailSenderService.sendEmail(email, "Testing-Project: Password Refresh Token", token);
		System.out.println(token);
		return ResponseEntity.ok(new HttpResponseBody("ok"));
	}
}
