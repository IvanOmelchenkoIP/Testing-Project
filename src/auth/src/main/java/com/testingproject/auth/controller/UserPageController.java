package com.testingproject.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping("/user")
@RestController
public class UserPageController {
	
	@GetMapping
	public ModelAndView showUserPage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("userpage.html");
		return mav;
	}
}
