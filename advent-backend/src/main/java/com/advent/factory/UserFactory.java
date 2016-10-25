package com.advent.factory;

import com.advent.dto.UserDTO;
import com.advent.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserFactory {

    public UserDTO createUserDTO() {
        // We possibly want users to join a certain group
        // automatically for example
        return new UserDTO();
    }

    public UserDTO userToUserDTO(User user) {
        if(user == null) {
            System.out.println("for some reason user is null.");
            return null;
        }
        UserDTO userDTO = new UserDTO();

        userDTO.setId(user.getId());
        userDTO.setEmail(user.getEmail());
        userDTO.setDisplayName(user.getDisplayName());
        userDTO.setDescription(user.getDescription());
        userDTO.setPictureUrl(user.getPictureUrl());


        return userDTO;
    }

    public User userDTOToUser(UserDTO userDTO) {
        User user = new User();

        user.setId(userDTO.getId());
        user.setEmail(userDTO.getEmail());
        user.setDisplayName(userDTO.getDisplayName());
        user.setDescription(userDTO.getDescription());
        user.setPictureUrl(userDTO.getPictureUrl());

        return user;
    }
}