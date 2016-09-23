package com.advent.controller;

import com.advent.entity.ExampleEntity;
import com.advent.service.interfaces.ExampleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class ExampleRestController {

    private final Logger LOG = LoggerFactory.getLogger(ExampleRestController.class);

    @Autowired
    private ExampleService exampleService;

    @RequestMapping(value = "/helloWorld", method = RequestMethod.GET)
    public ExampleEntity getGreeting(@RequestParam("name") String name) {
        return new ExampleEntity("Hello " + name + "!");
    }

    @RequestMapping(value = "/example", method = RequestMethod.GET)
    public List<ExampleEntity> getAllExampleEntities() {
        return exampleService.findAllExampleEntities();
    }

    @RequestMapping(value = "/example/{exampleEntityId}", method = RequestMethod.GET)
    public ExampleEntity getExampleEntity(@PathVariable("exampleEntityId") Long exampleEntityId) {
        return exampleService.findExampleEntity(exampleEntityId);
    }

    @RequestMapping(value = "/example/create", method = RequestMethod.GET)
    public ExampleEntity createExampleEntity() {
        ExampleEntity exampleEntity = new ExampleEntity("characteristic");
        exampleEntity = exampleService.saveExampleEntity(exampleEntity);
        LOG.info("Example Entity was saved");
        return exampleEntity;
    }
}
