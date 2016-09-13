package com.advent.service;

import com.advent.entity.ExampleEntity;
import com.advent.service.interfaces.ExampleService;
import org.springframework.stereotype.Service;

@Service
public class ExampleServiceImpl implements ExampleService {

    public ExampleEntity getExampleEntity() {
        return new ExampleEntity("This is an example entity!");
    }
}
