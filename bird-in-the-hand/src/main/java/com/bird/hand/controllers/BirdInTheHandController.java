package com.bird.hand.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bird.hand.dto.RegisterDTO;
import com.bird.hand.services.BirdInTheHandService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class BirdInTheHandController {
	private static final String BASE_URL = "/bird-in-the-hand";
	private final BirdInTheHandService birdInTheHandService;

	@Autowired
	public BirdInTheHandController(
			BirdInTheHandService birdInTheHandService
			) {
		this.birdInTheHandService = birdInTheHandService;

	}

	@PostMapping(BASE_URL + "/login")
	public String login(HttpServletRequest request, @RequestBody RegisterDTO credentials) {
		String username = credentials.getUsername();
		String password = credentials.getPassword();
		
		birdInTheHandService.login(username, password);
	    return "Login Successful";
	}
	
	@PostMapping(BASE_URL + "/registration")
	public String registration(HttpServletRequest request, @RequestBody RegisterDTO credentials) {
		String username = credentials.getUsername();
		String password = credentials.getPassword();
		String email = credentials.getEmail();
		
		birdInTheHandService.register(username, password, email);
		return "Registration Successful";
	}
}
