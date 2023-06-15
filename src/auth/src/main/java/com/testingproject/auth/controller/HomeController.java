package com.testingproject.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping("/")
@RestController
public class HomeController {

	@GetMapping
	public ModelAndView showHomePage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("home.html");
		return mav;
	}
}
