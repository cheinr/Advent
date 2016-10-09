package com.advent.service.impl;

import com.advent.dto.UserDTO;
import com.advent.entity.User;
import com.advent.factory.UserFactory;
import com.advent.repo.UserRepo;
import com.advent.service.UserManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserManagementServiceImpl implements UserManagementService {

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

    @Override
    public void deleteUser(UserDTO userDTO) {
        userRepo.delete(userDTO.getId());
    }

    @Override
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
