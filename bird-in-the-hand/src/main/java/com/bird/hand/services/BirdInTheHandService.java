package com.bird.hand.services;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.bird.hand.dto.User;

@Service
public class BirdInTheHandService {

	@Autowired
	private MongoTemplate mongoTemplate;
	private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

	public void login(String username, String password) {
//		Document query = new Document("username", username).append("password", password);
		Query query = new Query();
		query.addCriteria(Criteria.where("username").is(username).and("password").is(hashPassword(password)));
		List<User> user = mongoTemplate.find(query, User.class);

		if (user != null) {
			System.out.println("Authentication successful!");
		} else {
			System.out.println("Invalid username or password.");
		}
	}

	public void register(String username, String password, String email) {

		// Here you would typically save the user to the database
		// For example:
		Document userDoc = new Document("username", username).append("password", hashPassword(password)).append("email",
				email);
		mongoTemplate.insert(userDoc, "users");
	}

	public static String hashPassword(String password) {
		return encoder.encode(password);
	}

	public static boolean verifyPassword(String password, String hashedPassword) {
		return encoder.matches(password, hashedPassword);
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
