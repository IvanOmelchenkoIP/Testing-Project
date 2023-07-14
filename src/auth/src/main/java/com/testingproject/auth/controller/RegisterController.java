package com.testingproject.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
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
import com.testingproject.auth.jwt.utils.AuthJwtTokenUtil;
import com.testingproject.auth.jwt.utils.RefreshJwtTokenUtil;
import com.testingproject.auth.service.ProfileRouteService;
import com.testingproject.auth.service.UserService;

import jakarta.servlet.http.Cookie;

@RequestMapping("/register")
@RestController
public class RegisterController {

	@Autowired
	private UserService userService;

	@Autowired
	private ProfileRouteService profileRouteService;

	@Autowired
	private AuthJwtTokenUtil authJwtUtil;
	
	@Autowired
	private RefreshJwtTokenUtil refreshJwtUtil;

	@Autowired
	private PasswordEncoder encoder;

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
			user = userService.registerUser(request.getUsername(), request.getEmail(),
					encoder.encode(request.getPasswd()));
			profileRouteService.createProfileRoute(profileRouteService.generateProfileRoute(), user);
			String authToken = authJwtUtil.generate(user);
			String refreshToken = refreshJwtUtil.generate(user);
			
			/*Cookie authCookie = new Cookie("jwtToken", authToken);
			authCookie.setHttpOnly(true);
			
			Cookie refreshCookie = new Cookie("refreshToken", refreshToken);
			refreshCookie.setHttpOnly(true);
			
			return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
					.body(new HttpResponseBody(user.getUsername()));*/
			
			String response = "jwtToken=" + authToken + ";username=" + user.getUsername() + ";refreshToken=" + refreshToken;
			return ResponseEntity.ok().body(new HttpResponseBody(response));
		} catch (DataIntegrityViolationException exception) {
			return new ResponseEntity<>(new HttpResponseBody("already-exists"), HttpStatus.BAD_REQUEST);
		} catch (IllegalArgumentException exception) {
			return new ResponseEntity<>(new HttpResponseBody("illegal-field"), HttpStatus.BAD_REQUEST);
		}
	}
}
