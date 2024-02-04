package com.testingproject.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping("/join/forgot-password")
@RestController
public class ForgotPasswordController {

	@GetMapping
	public ModelAndView showStudentRegisterPage() {
		return new ModelAndView("../forgot-password.html");
	}
}
