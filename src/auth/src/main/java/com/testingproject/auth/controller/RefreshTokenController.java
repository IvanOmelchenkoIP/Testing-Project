package com.testingproject.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.WebUtils;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.httpbody.response.HttpResponseBody;
import com.testingproject.auth.jwt.utils.AuthJwtTokenUtil;
import com.testingproject.auth.jwt.utils.RefreshJwtTokenUtil;
import com.testingproject.auth.service.UserService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

@RequestMapping("/refreshToken")
@RestController
public class RefreshTokenController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private AuthJwtTokenUtil authJwtUtil;
	
	@Autowired
	private RefreshJwtTokenUtil refreshJwtUtil;
	
	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> refreshJwtToken(HttpServletRequest request) {
		Cookie authCookie = WebUtils.getCookie(request, "jwtToken");
		Cookie refreshCookie = WebUtils.getCookie(request, "refreshToken");
		if (authCookie == null || refreshCookie == null) {
			return new ResponseEntity<>(new HttpResponseBody("refresh-error"), HttpStatus.FORBIDDEN);
		}
		String authToken = authCookie.getValue();
		String refreshToken = refreshCookie.getValue();
		String username = refreshJwtUtil.getUsername(refreshToken);
		if (authJwtUtil.getUsername(authToken) != username) {
			return new ResponseEntity<>(new HttpResponseBody("refresh-error"), HttpStatus.FORBIDDEN);
		}
		
		boolean valid = refreshJwtUtil.validate(refreshToken, userService);
		boolean expired = refreshJwtUtil.tokenExpired(refreshToken);
		if (!valid ) {
			return new ResponseEntity<>(new HttpResponseBody("refresh-error"), HttpStatus.FORBIDDEN);
		}
		User user = userService.findByUsername(username);
		String newAuthToken = authJwtUtil.generate(user);
		String newRefreshToken = refreshJwtUtil.generate(user);
		
		/*Cookie authCookie = new Cookie("jwtToken", newAuthToken);
		authCookie.setHttpOnly(true);
		
		Cookie refreshCookie = new Cookie("refreshToken", newRefreshToken);
		refreshCookie.setHttpOnly(true);
		
		return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
				.body(new HttpResponseBody(user.getUsername()));*/
		
		String response = "jwtToken=" + newAuthToken + ";refreshToken=" + newRefreshToken;
		return ResponseEntity.ok().body(new HttpResponseBody(response));
		// To DO: ADD REFRESH TOKEN BLACKLIST
	}
}
