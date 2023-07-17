package com.testingproject.auth.controller.assignment;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping("/assignmentSettings")
@RestController
public class AssignmentSettingsController {

	@GetMapping
	public ModelAndView showAssignmentSettings() {
		return new ModelAndView("assignmentsettings.html");
	}
}
