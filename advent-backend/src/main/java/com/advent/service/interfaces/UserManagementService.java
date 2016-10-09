package com.advent.service.interfaces;

import com.advent.dto.UserDTO;

import java.util.List;

public interface UserManagementService {

    UserDTO saveUser(UserDTO userDTO);

    void deleteUser(UserDTO userDTO);

    void deleteUserById(Long id);

    UserDTO findUser(Long id);

    UserDTO findUserByEmail(String Email);

    List<UserDTO> findUsersByDisplayName(String displayName);

    List<UserDTO> findAllUsers();
}
