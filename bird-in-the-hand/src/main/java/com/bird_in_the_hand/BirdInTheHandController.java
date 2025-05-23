package com.bird_in_the_hand;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BirdInTheHandController {
	
    @GetMapping("/bird-in-the-hand")
    public String getGreeting() {
        return "Greetings from /bird-in-the-hand!";
    }
}
