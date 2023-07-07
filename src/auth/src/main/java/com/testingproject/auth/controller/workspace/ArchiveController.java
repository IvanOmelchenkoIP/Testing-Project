package com.testingproject.auth.controller.workspace;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping("/workspaceArchive")
@RestController
public class ArchiveController {

	@GetMapping
	public ModelAndView showArchive() {
		return new ModelAndView("archive.html");
	}
}
