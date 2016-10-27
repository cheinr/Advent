package com.advent.service.impl;

import com.advent.dto.UserDTO;
import com.advent.entity.User;
import com.advent.factory.UserFactory;
import com.advent.repo.UserRepo;
import com.advent.service.UserManagementService;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

//TODO - add libraries to project.

@Service
public class UserManagementServiceImpl implements UserManagementService {

    private JsonFactory jsonFactory = new JacksonFactory();
    private NetHttpTransport transport = new NetHttpTransport();
    private final String CLIENT_ID = "833501818150-94qfhnk1c77cqt73ak0asil9hpqudpl8.apps.googleusercontent.com";

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserFactory userFactory;


    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        User user = userFactory.userDTOToUser(userDTO);
        User returnedUser = userRepo.save(user);
        return userFactory.userToUserDTO(returnedUser);
    }


    public UserDTO registerUser(HttpServletRequest request)  {
        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
                .setAudience(Arrays.asList(CLIENT_ID))
                .setIssuer("accounts.google.com")
                .build();

        long before = System.currentTimeMillis();
        String idTokenString = request.getHeader("google-id-token");
        java.util.Enumeration<String> h = request.getHeaderNames();
        while (h.hasMoreElements()) {
            System.out.println(h.nextElement());
        }
        System.out.println("Headers: " + request.getHeaderNames().nextElement());
        System.out.println("Token: " + idTokenString);
        GoogleIdToken idToken = null;
        try {
            idToken = verifier.verify(idTokenString);
        } catch (GeneralSecurityException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println(idToken);
        if(idToken != null) {
            Payload payload = idToken.getPayload();

            // Print user identifier
            String userId = payload.getSubject();
            System.out.println("User ID: " + userId);

            // Get profile information from payload
            String email = payload.getEmail();

            //Query for user:
            UserDTO userDTO = findUserByEmail(email);

            if(userDTO == null) {
                System.out.println("Creating user: " + payload.get("name"));
                //create user
                User user = new User();
                user.setEmail(email);
                user.setDisplayName((String) payload.get("name"));
                user.setPictureUrl((String) payload.get("picture"));
                user.setDescription("");

                userDTO = userFactory.userToUserDTO(user);
                userDTO = saveUser(userDTO);
            }
            System.out.println("time = " + (System.currentTimeMillis() - before));
            return userDTO;
        } else {
            System.out.println("invalid ID Token");
            //TODO - handle invalid tokens.
            //TODO chein 10/17/16 - We need to somehow let the user know that something is wrong.
            return null; //this should work
        }
    }

    @Override
    public void deleteUser(UserDTO userDTO) {
        userRepo.delete(userDTO.getId());
    }



    public void deleteUserById(Long id) {
        userRepo.delete(id);
    }

    @Override
    public UserDTO findUser(Long id) {
        User user = userRepo.findOne(id);
        return userFactory.userToUserDTO(user);
    }

    @Override
    public UserDTO findUserByEmail(String email) {
        User user = userRepo.findByEmail(email);
        if(user == null) return null;
        return userFactory.userToUserDTO(user);
    }

    @Override
    public List<UserDTO> findUsersByDisplayName(String displayName) {
        List<User> users = userRepo.findAllByDisplayName(displayName);
        List<UserDTO> userDTOs = new ArrayList<>();

        users.forEach(user ->
            userDTOs.add(userFactory.userToUserDTO(user))
        );

        return userDTOs;
    }

    @Override
    public List<UserDTO> findAllUsers() {
        List<User> users = userRepo.findAll();
        List<UserDTO> userDTOs = new ArrayList<>();

        users.forEach(user->
            userDTOs.add(userFactory.userToUserDTO(user))
        );

        return userDTOs;
    }
}