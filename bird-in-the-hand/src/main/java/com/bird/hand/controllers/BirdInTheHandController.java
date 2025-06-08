package com.bird.hand.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bird.hand.dto.PhotoLibrary;
import com.bird.hand.dto.RegisterDTO;
import com.bird.hand.dto.User;
import com.bird.hand.dto.Vote;
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
	public User login(HttpServletRequest request, @RequestBody RegisterDTO credentials) {
		String username = credentials.getUsername();
		String password = credentials.getPassword();
		
	        try {
				return birdInTheHandService.login(username, password);
			} catch (Exception e) {
				System.out.println("Login failed: Invalid username or password");
				return null;
			}
	    
	}
	
	@PostMapping(BASE_URL + "/registration")
	public User registration(HttpServletRequest request, @RequestBody RegisterDTO credentials) {
		String username = credentials.getUsername();
		String password = credentials.getPassword();
		String email = credentials.getEmail();
		try {
			return birdInTheHandService.register(username, password, email);
		} catch (Exception e) {
			System.out.println("Registration failed: " + e.getMessage());
			return null;
		}
	}
	
	@PostMapping(BASE_URL + "/report")
	public User report(HttpServletRequest request, @RequestBody RegisterDTO credentials) {
		String username = credentials.getUsername();
		String password = credentials.getPassword();
		String email = credentials.getEmail();
		try {
			return birdInTheHandService.report(username, password, email);
		} catch (Exception e) {
			System.out.println("Report failed: " + e.getMessage());
			return null;
		}
	}
	
	@PostMapping(BASE_URL + "/vote")
	public Vote vote(HttpServletRequest request, @RequestBody Vote vote) {

		try {
			return birdInTheHandService.vote(vote.getUsername(), vote.getAviaryPhoto());
		} catch (Exception e) {
			System.out.println("Voting failed: " + e.getMessage());
			return null;
		}
	}
	
	@GetMapping(BASE_URL + "/vote-list")
	public List<Vote> returnVotesList(HttpServletRequest request, @Param("username") String username) {
		
		return this.birdInTheHandService.retrieveVotes(username);
	}
	
	
	@GetMapping(BASE_URL + "/nest-profile")
	public User returnNestProfile(HttpServletRequest request, @Param("username") String username) {
		
	    return this.birdInTheHandService.nestPage(username);
	}
	
	@GetMapping(BASE_URL + "/aviary-photos")
	public List<PhotoLibrary> returnAviaryPhotos(HttpServletRequest request, @Param("username") String username) {
		
		return this.birdInTheHandService.returnAviaryPhotos(username);
	}
	
	
}
