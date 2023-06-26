package com.testingproject.auth.controller;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.httpbody.request.RegisterRequest;
import com.testingproject.auth.httpbody.response.HttpResponseBody;
import com.testingproject.auth.jwt.JwtUtil;
import com.testingproject.auth.service.UserService;

@RequestMapping("/register")
@RestController
public class RegisterController {

	@Autowired
	UserService userService;
	
	@Autowired
	JwtUtil jwtUtil;

	@Autowired
	PasswordEncoder encoder;
	
	@GetMapping
	public ModelAndView showRegisterPage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("register.html");
		return mav;
	}

	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> registerNewUser(@RequestBody RegisterRequest request) {
		User user;
		try {
			user = userService.registerUser(request.getUsername(), request.getEmail(), encoder.encode(request.getPasswd()));
			String token = jwtUtil.generate(user);
			return ResponseEntity.ok(new HttpResponseBody(token));
		} catch (DataIntegrityViolationException exception) {
			return new ResponseEntity<HttpResponseBody>(new HttpResponseBody("already-exists"), HttpStatus.BAD_REQUEST);
		} catch (IllegalArgumentException exception) {
			return new ResponseEntity<HttpResponseBody>(new HttpResponseBody("illegal-field"), HttpStatus.BAD_REQUEST);
		}
	}
}
