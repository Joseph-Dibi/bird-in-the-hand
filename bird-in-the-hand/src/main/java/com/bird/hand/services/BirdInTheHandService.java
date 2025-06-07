package com.bird.hand.services;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.bird.hand.dto.PhotoLibrary;
import com.bird.hand.dto.User;


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


	public List<PhotoLibrary> returnAviaryPhotos() {
	    Query query = new Query();
	    query.addCriteria(Criteria.where("public").is(true));
	    List<PhotoLibrary> aviaryPhotos = mongoTemplate.find(query, PhotoLibrary.class, "photo_library");

	    try {
	    	System.out.println("Found User");
			return aviaryPhotos;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

//	public String exampleServiceMethod() {
//	    MongoDatabase database = mongoClient.getDatabase("your_database_name");
//	    MongoCollection<Document> collection = database.getCollection("your_collection_name");
//		Document doc1 = new Document("color", "red").append("qty", 5);
//		InsertOneResult result = collection.insertOne(doc1);
//		System.out.println("Inserted a document with the following id: " 
//		    + result.getInsertedId().asObjectId().getValue());
//	}
}
