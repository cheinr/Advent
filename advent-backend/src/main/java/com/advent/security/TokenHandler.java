package com.advent.security;

import com.advent.dto.UserDTO;
import com.advent.service.interfaces.UserManagementService;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Arrays;

/**
 * Created by colin on 10/19/16.
 * TokenHandler's main function is to validate tokens sent from the
 * client with google and retrieve a UserDTO object related to that user.
 */
@Component
public class TokenHandler {

    //This is our client_id that google assigned (Colin) in the api console.
    private final String CLIENT_ID = "833501818150-94qfhnk1c77cqt73ak0asil9hpqudpl8.apps.googleusercontent.com";

    private UserManagementService userService;

    private JsonFactory jsonFactory = new JacksonFactory();
    private NetHttpTransport transport = new NetHttpTransport();

    GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
            .setAudience(Arrays.asList(CLIENT_ID))
            .setIssuer("accounts.google.com")
            .build();


    public TokenHandler(UserManagementService userService) {
        this.userService = userService;
    }

    private String parseUserEmailFromToken(String idTokenString) {
        GoogleIdToken idToken = null;
        try {
            idToken = verifier.verify(idTokenString);
        } catch (GeneralSecurityException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println(idToken);
        if (idToken != null) {
            GoogleIdToken.Payload payload = idToken.getPayload();
            return payload.getEmail();
        } else {
            return null;
        }
    }

    //this will send the token to google who will return a UserDTO
    public UserDTO parseUserFromToken(String idTokenString) {
        String userEmail = parseUserEmailFromToken(idTokenString);
        if (userEmail == null) return null;
        return userService.findUserByEmail(userEmail);
    }
}
