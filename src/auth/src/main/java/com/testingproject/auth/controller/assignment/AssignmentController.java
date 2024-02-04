package com.testingproject.auth.controller.assignment;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping("/assignment/constructor")
@RestController
public class AssignmentController {

	@GetMapping
	public ModelAndView showTestCreatorTool() {
		return new ModelAndView("../html/assignment/constructor-container.html");
	}
}
