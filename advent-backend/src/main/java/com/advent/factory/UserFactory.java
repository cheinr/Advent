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
        UserDTO userDTO = new UserDTO();

        userDTO.setId(user.getId());
        userDTO.setEmail(user.getEmail());
        userDTO.setUsername(user.getUsername());
        userDTO.setPassword(user.getPassword());
        userDTO.setDisplayName(user.getDisplayName());
        userDTO.setDescription(user.getDescription());
        userDTO.setPictureFilename(user.getPictureFilename());

        return userDTO;
    }

    public User userDTOToUser(UserDTO userDTO) {
        User user = new User();

        user.setId(userDTO.getId());
        user.setEmail(userDTO.getEmail());
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());
        user.setDisplayName(userDTO.getDisplayName());
        user.setDescription(userDTO.getDescription());
        user.setPictureFilename(userDTO.getPictureFilename());

        return user;
    }
}
