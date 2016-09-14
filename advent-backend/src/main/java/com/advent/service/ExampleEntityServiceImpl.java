package com.advent.service;

import com.advent.entity.ExampleEntity;
import com.advent.repo.ExampleEntityRepo;
import com.advent.service.interfaces.ExampleEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExampleEntityServiceImpl implements ExampleEntityService {

    @Autowired
    private ExampleEntityRepo exampleEntityRepo;

    public ExampleEntity saveExampleEntity(ExampleEntity exampleEntity) {
        return exampleEntityRepo.save(exampleEntity);
    }

    public void deleteExampleEntity(ExampleEntity exampleEntity) {
        exampleEntityRepo.delete(exampleEntity);
    }

    public ExampleEntity findExampleEntity(Long id) {
        return exampleEntityRepo.findOne(id);
    }

    public List<ExampleEntity> findAllExampleEntities() {
        return exampleEntityRepo.findAll();
    }
}
