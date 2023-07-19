package com.testingproject.auth.controller.assignment;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping("/assignmentConstructor")
@RestController
public class AssignmentConstructorController {

	@GetMapping
	public ModelAndView showAssignmentConstructor() {
		return new ModelAndView("assignmentconstructor.html");
	}
}
