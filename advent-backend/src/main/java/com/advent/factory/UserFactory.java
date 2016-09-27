package com.advent.factory;

import com.advent.dto.UserDTO;
import com.advent.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserFactory {

    public UserDTO createUserDTO() {
        return new UserDTO();
    }

    public UserDTO userToUserDTO(User user) {
        UserDTO userDTO = new UserDTO();

        userDTO.setDescription(user.getDescription());
        userDTO.setDisplayName(user.getDisplayName());
        userDTO.setEmail(user.getEmail());
        userDTO.setPictureFilename(user.getPictureFilename());
        userDTO.setUsername(user.getUsername());
        userDTO.setPassword(user.getPassword());

        return userDTO;
    }

    public User userDTOToUser(UserDTO userDTO) {
        User user = new User();

        user.setDescription(userDTO.getDescription());
        user.setDisplayName(userDTO.getDisplayName());
        user.setEmail(userDTO.getEmail());
        user.setPictureFilename(userDTO.getPictureFilename());
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());

        return user;
    }
}
