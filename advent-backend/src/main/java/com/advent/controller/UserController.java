package com.advent.controller;

import com.advent.dto.UserDTO;
import com.advent.service.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/users/create", method = RequestMethod.POST)
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        return userService.saveUser(userDTO);
    }

    @RequestMapping(value = "/users/delete", method = RequestMethod.POST)
    public Boolean deleteUser(@RequestBody UserDTO userDTO) {
        userService.deleteUser(userDTO);
        return true;
    }

    @RequestMapping(value = "/users/id/{userId}", method = RequestMethod.GET)
    public UserDTO getUser(@PathVariable("userId") Long userId) {
        return userService.findUser(userId);
    }

    @RequestMapping(value = "/users/username/{username}", method = RequestMethod.GET)
    public UserDTO getUserByUsername(@PathVariable("username") String username) {
        return userService.findUserByUsername(username);
    }

    @RequestMapping(value = "/users/email/{email}", method = RequestMethod.GET)
    public UserDTO getByEmail(@PathVariable("email") String email) {
        return userService.findUserByEmail(email);
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<UserDTO> getAllUsers() {
        return userService.findAllUsers();
    }
}
