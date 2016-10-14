package com.advent.controller;

import com.advent.dto.UserDTO;
import com.advent.service.UserManagementService;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class UserManagementController {

    @Autowired
    private UserManagementService userManagementService;

    @RequestMapping(value = "/users/authGToken", method = RequestMethod.POST)
    public UserDTO handleGToken(HttpServletRequest request) { return userManagementService.handleGToken(request);}

    //TODO dszopa 9/27/16 - These probably all want to return response bodies
    @RequestMapping(value = "/users/create", method = RequestMethod.POST)
    public UserDTO saveUser(@RequestBody UserDTO userDTO) {
        return userManagementService.saveUser(userDTO);
    }

    @RequestMapping(value = "/users/delete", method = RequestMethod.POST)
    public void deleteUser(@RequestBody UserDTO userDTO) {
        userManagementService.deleteUser(userDTO);
    }

    @RequestMapping(value = "/users/delete/id/{userId}", method = RequestMethod.POST)
    public void deleteUserById(@PathVariable Long userId) {
        userManagementService.deleteUserById(userId);
    }

    @RequestMapping(value = "/users/id/{userId}", method = RequestMethod.GET)
    public UserDTO getUser(@PathVariable Long userId) {
        return userManagementService.findUser(userId);
    }

    @RequestMapping(value = "/users/email/{email}", method = RequestMethod.GET)
    public UserDTO getUserByEmail(@PathVariable String email) {
        return userManagementService.findUserByEmail(email);
    }

    @RequestMapping(value = "/users/display_name/{displayName}", method = RequestMethod.GET)
    public List<UserDTO> getUsersByDisplayName(@PathVariable String displayName) {
        return userManagementService.findUsersByDisplayName(displayName);
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<UserDTO> getAllUsers() {
        return userManagementService.findAllUsers();
    }
}
