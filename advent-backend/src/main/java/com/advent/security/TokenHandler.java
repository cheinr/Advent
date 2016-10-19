package com.advent.security;

import com.advent.entity.User;
import com.advent.service.UserManagementServiceImpl;
import com.advent.service.interfaces.UserManagementService;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;

/**
 * Created by colin on 10/19/16.
 * from tutorial - I think I can do without this eventually
 */
public class TokenHandler {
    private final String secret;
    private final UserManagementService userService;

    private JsonFactory jsonFactory = new JacksonFactory();
    private NetHttpTransport transport = new NetHttpTransport();
    private final String CLIENT_ID = "833501818150-94qfhnk1c77cqt73ak0asil9hpqudpl8.apps.googleusercontent.com";

    public TokenHandler(String secret, UserManagementService userService) {
        this.secret = secret; //don't need a secret key since we aren't creating our own tokens
        this.userService = userService;
    }

    //this will send the token to google who will return all the information
    public User parseUserFromToken(String token) {
        //TODO - get user here
        return null;
        //return userService.loadUserByUsername(username);
    }
}
