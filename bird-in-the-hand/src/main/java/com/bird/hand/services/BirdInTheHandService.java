package com.bird.hand.services;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.bird.hand.dto.PhotoLibrary;
import com.bird.hand.dto.User;
import com.bird.hand.dto.Vote;


@Service
public class BirdInTheHandService {

	@Autowired
	private MongoTemplate mongoTemplate;
	private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

	public User login(String username, String password) {
	    Query query = new Query();
	    query.addCriteria(Criteria.where("username").is(username));
	    List<User> users = mongoTemplate.find(query, User.class, "users");
	    try {
	        if (users != null && !users.isEmpty() && verifyPassword(password, users.get(0).getPassword())) {
	        	users.get(0).setPassword(null); // Clear password before returning.
	            return users.get(0);
	        } else {
		        System.out.println("Invalid username or password.");
		        throw new RuntimeException("Error during password verification.");

	        }
	    } catch (Exception e) {
	        System.out.println("Error during password verification: " + e.getMessage());
	        throw new RuntimeException("Login failed: Invalid username or password.");
	    }

	    
	}

	public User register(String username, String password, String email) {

		// Here you would typically save the user to the database
		// For example:
		try {
			Document userDoc = new Document("username", username).append("password", hashPassword(password)).append("email",
					email).append("memberSince", java.time.Instant.now());
			mongoTemplate.insert(userDoc, "users");
			System.out.println("User Doc Successfully Inserted.");
			User user = new User();
			user.setUsername(username);
			user.setEmail(email);
			return user;
		} catch (Exception e) {
			System.out.println("User Doc Failed to Insert.");
			e.printStackTrace();
			return null;
		}
	}

	public static String hashPassword(String password) {
		return encoder.encode(password);
	}

	public static boolean verifyPassword(String password, String hashedPassword) {
		return encoder.matches(password, hashedPassword);
	}

	public User nestPage(String username) {
	    Query query = new Query();
	    query.addCriteria(Criteria.where("username").is(username));
	    List<User> users = mongoTemplate.find(query, User.class, "users");

	    try {
	    	System.out.println("Found User");
			return users.get(0);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	
	}

	public User report(String username, String password, String email) {

			// Here you would typically save the user to the database
			// For example:
			try {
				Document userDoc = new Document("username", username).append("password", hashPassword(password)).append("email",
						email).append("memberSince", java.time.Instant.now());
				mongoTemplate.insert(userDoc, "users");
				System.out.println("User Doc Successfully Inserted.");
				User user = new User();
				user.setUsername(username);
				user.setEmail(email);
				return user;
			} catch (Exception e) {
				System.out.println("User Doc Failed to Insert.");
				e.printStackTrace();
				return null;
			}
	}
	
	public List<Vote> retrieveVotes(String username) {
	    Query query = new Query();
	    query.addCriteria(Criteria.where("username").is(username));
	    List<Vote> votes = mongoTemplate.find(query, Vote.class, "votes");
	    try {
	        if (votes != null) {
	            return votes;
	        } else {
		        throw new RuntimeException("Error during Voting.");

	        }
	    } catch (Exception e) {
	        throw new RuntimeException("Voting failed: Invalid something.");
	    }

	    
	}
	
	public Vote vote(String username, String aviaryPhoto) {

		// Here you would typically save the user to the database
		// For example:
		try {
			Document voteDoc = new Document("username", username).append("aviaryPhoto", aviaryPhoto);
			mongoTemplate.insert(voteDoc, "votes");
			System.out.println("Vote Successfully Inserted.");
			Vote vote = new Vote();
			vote.setUsername(username);
			vote.setAviaryPhoto(aviaryPhoto);
			return vote;
		} catch (Exception e) {
			System.out.println("Fake News");
			e.printStackTrace();
			return null;
		}
	}


	public List<PhotoLibrary> returnAviaryPhotos(String username) {
	    // Step 1: Retrieve all PhotoLibrary objects
	    List<PhotoLibrary> photoLibraries = mongoTemplate.find(
	        new Query(), PhotoLibrary.class);

	    // Step 2: Retrieve all Vote objects for the given username
	    Query voteQuery = new Query(Criteria.where("username").is(username));
	    List<Vote> votes = mongoTemplate.find(voteQuery, Vote.class, "votes");

	    // Step 3: Count votes per aviaryPhoto
	    Map<String, Long> voteCountMap = votes.stream()
	        .collect(Collectors.groupingBy(Vote::getAviaryPhoto, Collectors.counting()));

	    // Step 4: Set the votes count in each PhotoLibrary object
	    for (PhotoLibrary photoLibrary : photoLibraries) {
	        String photo = photoLibrary.getPhoto();
	        int count = voteCountMap.getOrDefault(photo, 0L).intValue();
	        photoLibrary.setVotes(count);
	    }

	    return photoLibraries;
	}

}
