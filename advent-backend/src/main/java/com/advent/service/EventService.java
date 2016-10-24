package com.advent.service;

import com.advent.dto.EventDTO;
import com.advent.entity.Event;
import com.advent.factory.EventConverter;
import com.advent.repo.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepo eventRepo;
    @Autowired
    private EventConverter eventConverter;

    public EventDTO createEvent(EventDTO eventDTO) {
        Event event = eventRepo.save(eventConverter.eventDTOtoEvent(eventDTO));
        return eventConverter.eventToEventDTO(event);
    }

    public List<EventDTO> getAllEvents() {
        return eventConverter.eventsToEventDTOs(eventRepo.findAll());
    }

    public EventDTO getEventById(Long id) {
        return eventConverter.eventToEventDTO(eventRepo.findOne(id));
    }

    public List<EventDTO> getEventByGroup(Long groupId) {
        return eventConverter.eventsToEventDTOs(eventRepo.findByKeyGroup(groupId));
    }
}
