package com.advent.controller;

import com.advent.config.AbstractControllerTest;
import com.advent.entity.ExampleEntity;
import com.advent.service.interfaces.ExampleService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.initMocks;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class ExampleRestControllerUTest extends AbstractControllerTest {

    @Mock
    private ExampleService exampleService;

    @InjectMocks
    private ExampleRestController exampleRestController;

    private MockMvc mockMvc;

    @Before
    public void setup() throws Exception {
        initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(exampleRestController).build();
    }

    @Test
    public void getGreeting() throws Exception {
        ExampleEntity exampleEntity = new ExampleEntity("Hello testName!");
        ObjectMapper mapper = new ObjectMapper();
        String expected = mapper.writeValueAsString(exampleEntity);

        ResultActions result = mockMvc.perform(get("/api/helloWorld?name={name}", "testName"))
                .andExpect(status().isOk());

        JSONAssert.assertEquals(expected, result.andReturn().getResponse().getContentAsString(), false);
    }

    @Test
    public void getAllExampleEntities() throws Exception {
        List<ExampleEntity> exampleEntities = new ArrayList<>();

        when(exampleService.findAllExampleEntities()).thenReturn(exampleEntities);

        mockMvc.perform(get("/api/example"))
                .andExpect(status().isOk());

        verify(exampleService, times(1)).findAllExampleEntities();
    }

    @Test
    public void getExampleEntity() throws Exception {
        ExampleEntity exampleEntity = new ExampleEntity("test");

        when(exampleService.findExampleEntity(1L)).thenReturn(exampleEntity);

        mockMvc.perform(get("/api/example/{exampleEntityId}", 1L))
                .andExpect(status().isOk());

        verify(exampleService, times(1)).findExampleEntity(1L);
    }

    @Test
    public void createExampleEntity() throws Exception {
        ExampleEntity exampleEntity = new ExampleEntity("test");

        when(exampleService.saveExampleEntity(any(ExampleEntity.class))).thenReturn(exampleEntity);

        mockMvc.perform(get("/api/example/create"))
                .andExpect(status().isOk());

        verify(exampleService, times(1)).saveExampleEntity(any(ExampleEntity.class));
    }
}
