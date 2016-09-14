package com.advent.service.interfaces;

import com.advent.entity.ExampleEntity;

import java.util.List;

public interface ExampleEntityService {

    ExampleEntity saveExampleEntity(ExampleEntity exampleEntity);

    void deleteExampleEntity(ExampleEntity exampleEntity);

    ExampleEntity findExampleEntity(Long id);

    List<ExampleEntity> findAllExampleEntities();
}
