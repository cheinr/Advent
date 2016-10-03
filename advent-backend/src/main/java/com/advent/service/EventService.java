package com.advent.service;

import com.advent.entity.Event;
import com.advent.repo.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    @Autowired
    private EventRepo eventRepo;

    public Event createEvent(Event event) {
        return eventRepo.save(event);
    }

}
