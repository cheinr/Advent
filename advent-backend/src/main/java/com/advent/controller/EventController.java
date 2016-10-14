package com.advent.controller;

import com.advent.dto.EventDTO;
import com.advent.entity.Event;
import com.advent.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EventController {

    @Autowired
    private EventService eventService;

    //TODO clai add group id when that is implemented
    @RequestMapping(value = "/event/create", method = RequestMethod.POST)
    public EventDTO createEvent(@RequestBody EventDTO event) {
        return eventService.createEvent(event);
    }

    // Temp
    @RequestMapping(value = "/event/list", method = RequestMethod.POST)
    public List<EventDTO> getAllEvents() {
        return eventService.getAllEvents();
    }
}

