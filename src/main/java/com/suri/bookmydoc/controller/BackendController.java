package com.suri.bookmydoc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BackendController {
	
	@GetMapping("/home")
	public String homepage() {
		return "forward:/home.html";
	}
	
	@GetMapping("/login")
	public String login() {
		return "forward:/login.html";
	}


}
