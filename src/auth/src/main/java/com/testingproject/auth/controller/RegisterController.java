package com.testingproject.auth.controller;

import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping("/register")
@RestController
public class RegisterController {
	
	@GetMapping
	public ModelAndView registerPage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("register.html");
		return mav;
	}
	
	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> registerNewUser(@RequestBody Map<String, String> user) {
		System.out.println(user.get("username") + " " + user.get("email") + " " + user.get("passwd"));
		return ResponseEntity.ok(user);
	}
}


