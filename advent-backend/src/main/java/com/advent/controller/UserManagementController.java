package com.advent.controller;

import com.advent.dto.UserDTO;
import com.advent.service.interfaces.UserManagementService;
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
    @ResponseBody
    public UserDTO handleGToken(HttpServletRequest request) { return userManagementService.handleGToken(request);}

    //TODO dszopa 9/27/16 - These probably all want to return response bodies
    @RequestMapping(value = "/users/create", method = RequestMethod.POST)
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        return userManagementService.saveUser(userDTO);
    }

    @RequestMapping(value = "/users/delete", method = RequestMethod.POST)
    public void deleteUser(@RequestBody UserDTO userDTO) {
        userManagementService.deleteUser(userDTO);
    }

    @RequestMapping(value = "/users/id/{userId}", method = RequestMethod.GET)
    public UserDTO getUser(@PathVariable("userId") Long userId) {
        return userManagementService.findUser(userId);
    }

    @RequestMapping(value = "/users/username/{username}", method = RequestMethod.GET)
    public UserDTO getUserByUsername(@PathVariable("username") String username) {
        return userManagementService.findUserByUsername(username);
    }

    @RequestMapping(value = "/users/email/{email}", method = RequestMethod.GET)
    public UserDTO getUserByEmail(@PathVariable("email") String email) {
        return userManagementService.findUserByEmail(email);
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<UserDTO> getAllUsers() {
        return userManagementService.findAllUsers();
    }
}
