package com.testingproject.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping("/resetpasswd-email")
@RestController
public class ResetPasswordEmail {

	@GetMapping
	public ModelAndView showResetPasswdPage() {
		return new ModelAndView("resetpasswdemail.html");
	}
	
	
	@PostMapping
	public void confirmEmail() {
		
	}
}
