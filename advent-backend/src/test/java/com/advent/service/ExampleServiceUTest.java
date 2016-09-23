package com.advent.service;

import com.advent.config.AbstractServiceTest;
import com.advent.entity.ExampleEntity;
import com.advent.repo.ExampleEntityRepo;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;

public class ExampleServiceUTest extends AbstractServiceTest {

    @Mock
    private ExampleEntityRepo exampleEntityRepo;

    @InjectMocks
    private ExampleServiceImpl exampleService;

    @Test
    public void saveExampleEntity() throws Exception {
        ExampleEntity exampleEntity = new ExampleEntity("test");
        when(exampleEntityRepo.save(exampleEntity)).thenReturn(exampleEntity);
        exampleService.saveExampleEntity(exampleEntity);
        verify(exampleEntityRepo, times(1)).save(exampleEntity);
    }

    @Test
    public void deleteExampleEntity() throws Exception {
        ExampleEntity exampleEntity = new ExampleEntity("Test");
        exampleService.deleteExampleEntity(exampleEntity);
        verify(exampleEntityRepo, times(1)).delete(exampleEntity);
    }

    @Test
    public void findExample() throws Exception {
        ExampleEntity exampleEntity = new ExampleEntity("test");
        when(exampleEntityRepo.findOne(1L)).thenReturn(exampleEntity);
        exampleService.findExampleEntity(1L);
        verify(exampleEntityRepo, times(1)).findOne(1L);
    }

    @Test
    public void findAllExampleEntities() throws Exception {
        List<ExampleEntity> exampleEntities = new ArrayList<>();
        when(exampleEntityRepo.findAll()).thenReturn(exampleEntities);
        exampleService.findAllExampleEntities();
        verify(exampleEntityRepo, times(1)).findAll();
    }
}
