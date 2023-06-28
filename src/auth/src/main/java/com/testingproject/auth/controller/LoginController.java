package com.testingproject.auth.controller;

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
import com.testingproject.auth.httpbody.request.LoginRequest;
import com.testingproject.auth.httpbody.response.HttpResponseBody;
import com.testingproject.auth.jwt.JwtUtil;
import com.testingproject.auth.service.UserService;

@RequestMapping("/login")
@RestController
public class LoginController {

	@Autowired
	UserService userService;

	@Autowired
	JwtUtil jwtUtil;

	@Autowired
	PasswordEncoder encoder;

	@GetMapping
	public ModelAndView showLoginPage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("login.html");
		return mav;
	}

	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> loginUser(@RequestBody LoginRequest request) {
		User user = userService.findByUsername(request.getUsername());
		if (user != null && encoder.matches(request.getPasswd(), user.getPasswd())) {
			String token = jwtUtil.generate(user);
			String response = "username=" + user.getUsername() + ";jwtToken=" + token;
			return ResponseEntity.ok(new HttpResponseBody(response));
		}
		return new ResponseEntity<>(new HttpResponseBody("login-error"), HttpStatus.BAD_REQUEST);
	}
}
