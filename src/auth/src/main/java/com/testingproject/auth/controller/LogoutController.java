package com.testingproject.auth.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

@RequestMapping("/logoutUser")
@Controller
public class LogoutController {

	@PostMapping
	public ResponseEntity<?> logoutUser(HttpServletRequest request) {
		Cookie[] cookies = request.getCookies();
		for (Cookie cookie : cookies) cookie.setMaxAge(0);
		return ResponseEntity.ok().build();
	}
}
