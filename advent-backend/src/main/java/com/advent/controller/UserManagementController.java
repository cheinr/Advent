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

    //authenticates user or creates a new one if needed.
    @RequestMapping(value = "/auth/register", method = RequestMethod.POST)
    public UserDTO registerUser(HttpServletRequest request) { return userManagementService.registerUser(request);}

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

    @RequestMapping(value = "/users/username/{full_name}", method = RequestMethod.GET)
    public UserDTO getUserByFullName(@PathVariable("full_name") String full_name) {
        return userManagementService.findUserByFullName(full_name);
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
