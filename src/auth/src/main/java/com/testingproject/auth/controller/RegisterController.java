package com.testingproject.auth.controller;

import java.util.HashMap;
import java.util.Map;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.testingproject.auth.entity.User;
import com.testingproject.auth.service.UserService;

@RequestMapping("/register")
@RestController
public class RegisterController {
	
	@Autowired
	UserService userService;
	
	@GetMapping
	public ModelAndView registerPage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("register.html");
		return mav;
	}
	
	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> registerNewUser(@RequestBody Map<String, String> userReq) {
		String username = userReq.get("username") == "" ? null : userReq.get("username");
		String email = userReq.get("email") == "" ? null : userReq.get("email");
		String passwd = userReq.get("passwd") == "" ? null :userReq.get("passwd");
		User user;
		try {
			user = userService.registerUser(username, email, passwd);
			System.out.println(user.toString());
			return ResponseEntity.ok(user);
		} catch (DataIntegrityViolationException exception) {
			System.out.println(exception);
			Map<String, String> msg = new HashMap<String, String>();
			msg.put("message", "Already exists");
			return new ResponseEntity<Object>(msg, HttpStatus.BAD_REQUEST);
		} catch (IllegalArgumentException exception) {
			System.out.println(exception);
			Map<String, String> msg = new HashMap<String, String>();
			msg.put("message", "Cannot be empty");
			return new ResponseEntity<Object>(msg, HttpStatus.BAD_REQUEST);
		}
	}
}


