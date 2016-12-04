package com.advent.controller;

import com.advent.dto.EventDTO;
import com.advent.dto.EventResponseDTO;
import com.advent.entity.EventResponse;
import com.advent.service.EventService;
import com.advent.service.UserManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EventController {

    @Autowired
    private EventService eventService;
    @Autowired
    private UserManagementService userManagementService;

    //TODO clai add group id when that is implemented
    @RequestMapping(value = "/event/create", method = RequestMethod.POST)
    public EventDTO createEvent(@RequestBody EventDTO event, @AuthenticationPrincipal Long userId) {
        return eventService.createEvent(event, userId);
    }

    @RequestMapping(value = "/event/edit", method = RequestMethod.POST)
    public EventDTO editEvent(@RequestBody EventDTO event, @AuthenticationPrincipal Long userId) {
        return eventService.createEvent(event, userId);
    }

    // Temp
    @RequestMapping(value = "/event/list", method = RequestMethod.POST)
    public List<EventDTO> getAllEvents() {
        return eventService.getAllEvents();
    }

    @RequestMapping(value = "/event/id/{id}", method = RequestMethod.GET)
    public EventDTO getEventById(@PathVariable Long id) {
        return eventService.getEventById(id);
    }

    @RequestMapping(value = "/event/group/{groupId}")
    public List<EventDTO> getEventByGroup(@PathVariable Long groupId) {
        return eventService.getEventByGroup(groupId);
    }

    @RequestMapping(value = "/event/respond/", method = RequestMethod.POST)
    public EventResponse respondToEvent(@RequestBody EventResponseDTO eventResponseDTO) {
        return eventService.saveEventResponse(userManagementService.getLoggedInUser().getId(),
                eventResponseDTO.getEventId(), eventResponseDTO.getResponse());
    }

    @RequestMapping(value = "/event/upcoming/current/user", method = RequestMethod.GET)
    public List<EventDTO> getUpcomingEventsForCurrentUser(@AuthenticationPrincipal Long userId) {
        return eventService.getUpcomingEventsForUser(userId);
    }

    @RequestMapping(value = "/auth/event/my-events/{email}", method = RequestMethod.GET)
    public List<EventDTO> getGroupsForUser(@PathVariable String email) {
        return eventService.getUpcomingEventsForEmail(email);
    }
}

