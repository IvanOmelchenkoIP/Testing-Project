package com.testingproject.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping("/resetpasswd-reset")
@RestController
public class ResetPasswordReset {

	@GetMapping
	public ModelAndView showResetPasswdResetPage() {
		return new ModelAndView("resetpasswdreset.html");
	}
}
