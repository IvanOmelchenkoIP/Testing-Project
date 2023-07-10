package com.testingproject.auth.controller;

import java.util.ArrayList;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;

import com.testingproject.auth.httpbody.response.HttpResponseBody;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RequestMapping("/logoutUser")
@RestController
public class LogoutController {

	@PostMapping
	public HttpServletResponse logoutUser(HttpServletRequest request, HttpServletResponse response) {
		Cookie[] cookies = request.getCookies();
		for (Cookie cookie : cookies) {
			Cookie deletedCookie = new Cookie(cookie.getName(), null);
			deletedCookie.setMaxAge(0);
			response.addCookie(deletedCookie);
		}
		response.setStatus(HttpServletResponse.SC_OK);
		return response;
	}
}
