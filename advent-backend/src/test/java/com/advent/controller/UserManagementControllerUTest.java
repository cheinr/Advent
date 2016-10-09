package com.advent.controller;

import com.advent.config.AbstractControllerUTest;
import com.advent.dto.UserDTO;
import com.advent.service.interfaces.UserManagementService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserManagementControllerUTest extends AbstractControllerUTest {

    @Mock
    private UserManagementService userManagementService;

    @InjectMocks
    private UserManagementController userManagementController;

    private MockMvc mockMvc;
    private ObjectMapper mapper;
    private UserDTO userDTO;

    @Before
    public void setup() throws Exception {
        this.mockMvc = MockMvcBuilders.standaloneSetup(userManagementController).build();
        mapper = new ObjectMapper();
        userDTO = new UserDTO();
    }

    @Test
    public void createUser() throws Exception {
        String userDTOJson = mapper.writeValueAsString(userDTO);

        when(userManagementService.saveUser(any(UserDTO.class))).thenReturn(userDTO);

        ResultActions result = mockMvc.perform(post("/api/users/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(userDTOJson))
                .andExpect(status().isOk());

        verify(userManagementService, times(1)).saveUser(any(UserDTO.class));
        JSONAssert.assertEquals(userDTOJson, result.andReturn().getResponse().getContentAsString(), false);
    }

    @Test
    public void deleteUser() throws Exception {
        mockMvc.perform(post("/api/users/delete")
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(userDTO)))
                .andExpect(status().isOk());

        verify(userManagementService, times(1)).deleteUser(any(UserDTO.class));
    }

    @Test
    public void deleteUserById() throws Exception {
        // TOOD
    }

    @Test
    public void getUser() throws Exception {
        when(userManagementService.findUser(1L)).thenReturn(userDTO);

        ResultActions result = mockMvc.perform(get("/api/users/id/{userId}", 1L))
                .andExpect(status().isOk());

        verify(userManagementService, times(1)).findUser(1L);
        JSONAssert.assertEquals(mapper.writeValueAsString(userDTO), result.andReturn().getResponse().getContentAsString(), false);
    }

    @Test
    public void getUserByEmail() throws Exception {
        when(userManagementService.findUserByEmail("email")).thenReturn(userDTO);

        ResultActions result = mockMvc.perform(get("/api/users/email/{email}", "email"))
                .andExpect(status().isOk());

        verify(userManagementService, times(1)).findUserByEmail("email");
        JSONAssert.assertEquals(mapper.writeValueAsString(userDTO), result.andReturn().getResponse().getContentAsString(), false);
    }

    @Test
    public void getUsersByDisplayName() throws Exception {
        // TODO
    }

    @Test
    public void getAllUsers() throws Exception {
        List<UserDTO> userDTOs = Arrays.asList(userDTO);
        when(userManagementService.findAllUsers()).thenReturn(userDTOs);

        ResultActions result = mockMvc.perform(get("/api/users"))
                .andExpect(status().isOk());

        verify(userManagementService, times(1)).findAllUsers();
        JSONAssert.assertEquals(mapper.writeValueAsString(userDTOs), result.andReturn().getResponse().getContentAsString(), false);
    }
}
