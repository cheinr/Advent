package com.advent.service;

import com.advent.dto.UserDTO;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;

public interface UserManagementService {

    UserDTO saveUser(UserDTO userDTO);

    void deleteUser(UserDTO userDTO);

    void deleteUserById(Long id);

    UserDTO findUser(Long id);

    UserDTO findUserByEmail(String Email);

    List<UserDTO> findUsersByDisplayName(String displayName);

    UserDTO handleGToken(HttpServletRequest request);

    List<UserDTO> findAllUsers();
}
