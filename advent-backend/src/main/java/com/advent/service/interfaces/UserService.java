package com.advent.service.interfaces;

import com.advent.dto.UserDTO;

public interface UserService {

    UserDTO saveUser(UserDTO userDTO);

    void deleteUser(UserDTO userDTO);

    UserDTO findUser(Long id);

    UserDTO findUserByUsername(String username);

    UserDTO findUserByEmail(String Email);
}
