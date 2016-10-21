package com.advent.factory;

import com.advent.config.AbstractFactoryUTest;
import com.advent.dto.UserDTO;
import com.advent.entity.User;
import org.junit.Test;
import org.mockito.InjectMocks;

import static org.junit.Assert.assertEquals;

public class UserFactoryUTest extends AbstractFactoryUTest {

    @InjectMocks
    private UserFactory userFactory;

    @Test
    public void userToUserDTO() throws Exception {
        User user = new User();
        user.setId(1L);
        user.setEmail("email");
        user.setFullName("fullname");
        user.setDisplayName("displayName");
        user.setDescription("description");
        user.setProfilePicUrl("picture.jpg");

        UserDTO expectedUserDTO = new UserDTO();
        expectedUserDTO.setId(1L);
        expectedUserDTO.setEmail("email");
        expectedUserDTO.setFullName("fullname");
        expectedUserDTO.setDisplayName("displayName");
        expectedUserDTO.setDescription("description");
        expectedUserDTO.setProfilePicUrl("picture.jpg");

        UserDTO returnedUserDTO = userFactory.userToUserDTO(user);

        assertEquals(expectedUserDTO, returnedUserDTO);
    }

    @Test
    public void userDTOToUser() throws Exception {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(1L);
        userDTO.setEmail("email");
        userDTO.setFullName("fullname");
        userDTO.setDisplayName("displayName");
        userDTO.setDescription("description");
        userDTO.setProfilePicUrl("picture.jpg");

        User expectedUser = new User();
        expectedUser.setId(1L);
        expectedUser.setEmail("email");
        expectedUser.setFullName("fullname");
        expectedUser.setDisplayName("displayName");
        expectedUser.setDescription("description");
        expectedUser.setProfilePicUrl("picture.jpg");

        User returnedUser = userFactory.userDTOToUser(userDTO);

        assertEquals(expectedUser, returnedUser);
    }
}
