package com.advent.service;

import com.advent.config.AbstractServiceTest;
import com.advent.dto.UserDTO;
import com.advent.entity.User;
import com.advent.factory.UserFactory;
import com.advent.repo.UserRepo;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class UserManagementServiceImplUTest extends AbstractServiceTest {

    @Mock
    private UserRepo userRepo;

    @Mock
    private UserFactory userFactory;

    @InjectMocks
    private UserManagementServiceImpl userManagementService;

    @Before
    public void setup() throws Exception {

    }

    @Test
    public void saveUser() throws Exception {
        UserDTO userDTO = new UserDTO();
        User user = new User();

        when(userFactory.userDTOToUser(userDTO)).thenReturn(user);

        UserDTO returnedUserDTO = userManagementService.saveUser(userDTO);

        verify(userFactory, times(1)).userDTOToUser(userDTO);
        verify(userRepo, times(1)).save(user);
        assertEquals(userDTO, returnedUserDTO);
    }

    @Test
    public void deleteUser() throws Exception {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(1L);

        userManagementService.deleteUser(userDTO);

        verify(userRepo, times(1)).delete(1L);
    }

    @Test
    public void findUser() throws Exception {
        User user = new User();
        UserDTO userDTO = new UserDTO();

        when(userRepo.findOne(1L)).thenReturn(user);
        when(userFactory.userToUserDTO(user)).thenReturn(userDTO);

        UserDTO returnedUserDTO = userManagementService.findUser(1L);

        verify(userRepo, times(1)).findOne(1L);
        verify(userFactory, times(1)).userToUserDTO(user);
        assertEquals(userDTO, returnedUserDTO);
    }

    @Test
    public void findUserByUsername() throws Exception {
        User user = new User();
        UserDTO userDTO = new UserDTO();

        when(userRepo.findByUsername("username")).thenReturn(user);
        when(userFactory.userToUserDTO(user)).thenReturn(userDTO);

        UserDTO returnedUserDTO = userManagementService.findUserByUsername("username");

        verify(userRepo, times(1)).findByUsername("username");
        verify(userFactory, times(1)).userToUserDTO(user);
        assertEquals(userDTO, returnedUserDTO);
    }

    @Test
    public void findUserByEmail() throws Exception {
        User user = new User();
        UserDTO userDTO = new UserDTO();

        when(userRepo.findByEmail("email")).thenReturn(user);
        when(userFactory.userToUserDTO(user)).thenReturn(userDTO);

        UserDTO returnedUserDTO = userManagementService.findUserByEmail("email");

        verify(userRepo, times(1)).findByEmail("email");
        verify(userFactory, times(1)).userToUserDTO(user);
        assertEquals(userDTO, returnedUserDTO);
    }

    @Test
    public void findAllUsers() throws Exception {
        User user = new User();
        UserDTO userDTO = new UserDTO();
        List<User> users = Arrays.asList(user);
        List<UserDTO> userDTOs = Arrays.asList(userDTO);

        when(userRepo.findAll()).thenReturn(users);
        when(userFactory.userToUserDTO(user)).thenReturn(userDTO);

        List<UserDTO> returnedUserDTOs = userManagementService.findAllUsers();

        verify(userRepo, times(1)).findAll();
        verify(userFactory, times(1)).userToUserDTO(any(User.class));
        assertEquals(userDTOs, returnedUserDTOs);
    }
}
