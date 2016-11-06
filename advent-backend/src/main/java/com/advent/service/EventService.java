package com.advent.service;

import com.advent.dto.EventDTO;
import com.advent.entity.Event;
import com.advent.entity.EventResponse;
import com.advent.factory.EventConverter;
import com.advent.repo.EventRepo;
import com.advent.repo.EventResponseRepo;
import com.advent.repo.GroupRepo;
import com.advent.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepo eventRepo;
    @Autowired
    private GroupRepo groupRepo;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private EventResponseRepo eventResponseRepo;
    @Autowired
    private EventConverter eventConverter;

    public EventDTO createEvent(EventDTO eventDTO) {
        eventDTO.setGroup(groupRepo.findOne(eventDTO.getGroup().getId()));
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

    public EventResponse saveEventResponse(Long userId, Long eventId, String response) {
        EventResponse eventResponse = new EventResponse();
        eventResponse.setUser(userRepo.findOne(userId));
        eventResponse.setEvent(eventRepo.findOne(eventId));
        eventResponse.setResponse(response);
        return eventResponseRepo.save(eventResponse);
    }
}
