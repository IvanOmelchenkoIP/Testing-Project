package com.testingproject.auth.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.WebUtils;

import com.testingproject.auth.httpbody.response.HttpResponseBody;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RequestMapping("/logoutUser")
@RestController
public class LogoutController {

	@PostMapping
	public ResponseEntity<HttpResponseBody> logoutUser(HttpServletRequest request, HttpServletResponse response) {
		Cookie jwtToken = WebUtils.getCookie(request, "jwtToken");
		jwtToken.setMaxAge(0);
		return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtToken.toString()).body(new HttpResponseBody("ok"));
	}
}
