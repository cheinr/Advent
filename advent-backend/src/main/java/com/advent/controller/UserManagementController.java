package com.advent.controller;

import com.advent.dto.UserDTO;
import com.advent.service.UserManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class UserManagementController {

    @Autowired
    private UserManagementService userManagementService;

    @RequestMapping(value = "/users/create", method = RequestMethod.POST)
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        return userManagementService.saveUser(userDTO);
    }

    @RequestMapping(value = "/users/delete", method = RequestMethod.POST)
    public void deleteUser(@RequestBody UserDTO userDTO) {
        userManagementService.deleteUser(userDTO);
    }

    @RequestMapping(value = "/users/delete/id/{userId}", method = RequestMethod.POST)
    public void deleteUserById(@RequestBody Long userId) {
        userManagementService.deleteUserById(userId);
    }

    @RequestMapping(value = "/users/id/{userId}", method = RequestMethod.GET)
    public UserDTO getUser(@PathVariable("userId") Long userId) {
        return userManagementService.findUser(userId);
    }

    @RequestMapping(value = "/users/email/{email}", method = RequestMethod.GET)
    public UserDTO getUserByEmail(@PathVariable("email") String email) {
        return userManagementService.findUserByEmail(email);
    }

    @RequestMapping(value = "/users/display_name/{displayName}", method = RequestMethod.GET)
    public List<UserDTO> getUsersByDisplayName(@PathVariable("displayName") String displayName) {
        return userManagementService.findUsersByDisplayName(displayName);
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<UserDTO> getAllUsers() {
        return userManagementService.findAllUsers();
    }
}
