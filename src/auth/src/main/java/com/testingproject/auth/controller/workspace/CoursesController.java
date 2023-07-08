package com.testingproject.auth.controller.workspace;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping("/workspaceCourses")
@RestController
public class CoursesController {
	
	@GetMapping
	public ModelAndView showCourses() {
		return new ModelAndView("courses.html");
	}
}
