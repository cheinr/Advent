package com.advent.controller;

import com.advent.entity.ExampleEntity;
import com.advent.service.interfaces.ExampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
public class ExampleRestController {

    @Autowired
    private ExampleService exampleService;

    @RequestMapping(value = "/example", method = RequestMethod.GET)
    public ExampleEntity getExampleEntity() {
        return exampleService.getExampleEntity();
    }

    @RequestMapping(value = "/helloWorld", method = RequestMethod.GET)
    public ExampleEntity getGreeting(@RequestBody String name) {
        // note: It is bad practice to be making entities in the controller but for the sake of the example I will
        return new ExampleEntity("Hello " + name + "!");
    }
}
