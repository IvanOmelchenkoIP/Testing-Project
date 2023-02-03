package com.testingproject.auth.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping("/login")
@RestController
public class LoginController {

	@GetMapping
	public ModelAndView showLoginPage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("login.html");
		return mav;
	}
	
	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void loginUser() {
		throw new Error("Not Implemented Yet!");
	}
}
