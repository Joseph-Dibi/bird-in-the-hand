package com.bird.hand.dto;

import java.util.Date;

import lombok.Data;

@Data
public class User {
	
	String username;
	String profilePicture;
	String photos;
	String password;
	String email;
	Date memberSince;

}
