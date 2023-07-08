package com.testingproject.auth.controller.workspace;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping("/workspaceDashboard")
@RestController
public class DashboardController {

	@GetMapping
	public ModelAndView showDashboard() {
		return new ModelAndView("dashboard.html");
	}
}
