package com.advent.service;

import com.advent.dto.UserDTO;
import com.advent.entity.User;
import com.advent.factory.UserFactory;
import com.advent.repo.UserRepo;
import com.advent.service.interfaces.UserManagementService;
import com.google.api.client.http.javanet.NetHttpTransport;
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
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;

import com.google.api.client.json.JsonFactory;


@Service
public class UserManagementServiceImpl implements UserManagementService {

    private JsonFactory jsonFactory = new JacksonFactory();
    private NetHttpTransport transport = new NetHttpTransport();
    private String CLIENT_ID = "833501818150-94qfhnk1c77cqt73ak0asil9hpqudpl8.apps.googleusercontent.com";

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserFactory userFactory;

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        User user = userFactory.userDTOToUser(userDTO);
        userRepo.save(user);
        return userDTO;
    }

    GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
            .setAudience(Arrays.asList(CLIENT_ID))
            .setIssuer("https://accounts.google.com")
            .build();

    public UserDTO handleGToken(HttpServletRequest request)  {
        String idTokenString = request.getHeader("google-id-token"); //TODO - get token from request

        GoogleIdToken idToken = null;
        try {
            idToken = verifier.verify(idTokenString);
        } catch (GeneralSecurityException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        if(idToken != null) {
            Payload payload = idToken.getPayload();

            // Print user identifier
            String userId = payload.getSubject();
            System.out.println("User ID: " + userId);

            // Get profile information from payload
            String email = payload.getEmail();
            boolean emailVerified = Boolean.valueOf(payload.getEmailVerified());
            String name = (String) payload.get("name");
            String pictureUrl = (String) payload.get("picture");
            String locale = (String) payload.get("locale");
            String familyName = (String) payload.get("family_name");
            String givenName = (String) payload.get("given_name");

            System.out.println("User " + name + " has been authenticated.");
            // Use or store profile information
            // ...

            //Query for user.
            UserDTO userDTO = findUserByEmail(email);

            if(user == null) {
                //create user
                User user = new User();

            }

            //return userDTO?
            return userDTO;
        } else {
            return null;
            //TODO - handle invalid tokens.
        }
    }


    // TODO dszopa 9/27/16 - Add delete user by Id
    @Override
    public void deleteUser(UserDTO userDTO) {
        userRepo.delete(userDTO.getId());
    }

    @Override
    public UserDTO findUser(Long id) {
        User user = userRepo.findOne(id);
        return userFactory.userToUserDTO(user);
    }

    @Override
    public UserDTO findUserByUsername(String username) {
        User user = userRepo.findByUsername(username);
        return userFactory.userToUserDTO(user);
    }

    @Override
    public UserDTO findUserByEmail(String email) {
        User user = userRepo.findByEmail(email);
        return userFactory.userToUserDTO(user);
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
