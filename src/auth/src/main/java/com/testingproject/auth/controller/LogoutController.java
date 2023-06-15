package com.testingproject.auth.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;

@RequestMapping("/logout")
@Controller
public class LogoutController {

	@PostMapping
	public RedirectView logoutUser() {
		return new RedirectView("/");
	}
}
