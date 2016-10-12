package com.advent.service.interfaces;

import com.advent.dto.UserDTO;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;

public interface UserManagementService {

    UserDTO saveUser(UserDTO userDTO);

    void deleteUser(UserDTO userDTO);

    UserDTO findUser(Long id);

    UserDTO findUserByUsername(String username);

    UserDTO findUserByEmail(String Email);

    UserDTO handleGToken(HttpServletRequest request);

    List<UserDTO> findAllUsers();
}
