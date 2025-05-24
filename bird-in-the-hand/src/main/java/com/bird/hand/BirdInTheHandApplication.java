package com.bird.hand;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.mongodb.*;
import org.bson.BsonDocument;
import org.bson.BsonInt64;
import org.bson.Document;
import org.bson.conversions.Bson;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

@SpringBootApplication
public class BirdInTheHandApplication {

	public static void main(String[] args) {
		SpringApplication.run(BirdInTheHandApplication.class, args);
		
//		  String connectionString = "mongodb+srv://jjdibiasi:TyMWpVu1rb9Nhhve@dibiasicluster.siyginr.mongodb.net/?retryWrites=true&w=majority&appName=DiBiasiCluster";
//	        ServerApi serverApi = ServerApi.builder()
//	                .version(ServerApiVersion.V1)
//	                .build();
//	        MongoClientSettings settings = MongoClientSettings.builder()
//	                .applyConnectionString(new ConnectionString(connectionString))
//	                .serverApi(serverApi)
//	                .build();
//	        // Create a new client and connect to the server
//	        try (MongoClient mongoClient = MongoClients.create(settings)) {
//	            try {
//	                // Send a ping to confirm a successful connection
//	                MongoDatabase database = mongoClient.getDatabase("bird-in-the-hand");
//	                database.runCommand(new Document("ping", 1));
//	                System.out.println("Pinged your deployment. You successfully connected to MongoDB!");
//	            } catch (MongoException e) {
//	                e.printStackTrace();
//	            }
//	        }
	}

}
