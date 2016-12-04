package com.advent.service;

import com.advent.dto.EventDTO;
import com.advent.entity.Event;
import com.advent.entity.EventResponse;
import com.advent.entity.Notification;
import com.advent.entity.UserGroup;
import com.advent.factory.EventConverter;
import com.advent.repo.*;
import com.advent.utils.NotificationType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepo eventRepo;
    @Autowired
    private GroupRepo groupRepo;
    @Autowired
    private NotificationRepo notificationRepo;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private UserGroupRepo userGroupRepo;
    @Autowired
    private EventResponseRepo eventResponseRepo;
    @Autowired
    private EventConverter eventConverter;

    public EventDTO createEvent(EventDTO eventDTO, Long currentUserId) {
        UserGroup userGroup = userGroupRepo.findByUserIdAndGroupId(currentUserId, eventDTO.getGroup().getId());

        //don't allow normal users to create events
        if(!userGroup.getRole().equalsIgnoreCase("ADMIN") && !userGroup.getRole().equalsIgnoreCase("MODERATOR")
                && !userGroup.getRole().equalsIgnoreCase("OWNER"))
            return null;

        eventDTO.setGroup(groupRepo.findOne(eventDTO.getGroup().getId()));
        Event event = eventRepo.save(eventConverter.eventDTOtoEvent(eventDTO));
        List<UserGroup> userGroups = eventDTO.getGroup().getUserGroups();
        for(int i = 0; i < userGroups.size(); i++){
            Notification notification = new Notification();
            notification.setHeader("Invite to " + event.getName());
            notification.setMessage("You have been invited to attend the event " + event.getName());
            notification.setLink("/event/" + Long.toString(event.getId()));
            notification.setNotificationType(NotificationType.EVENT);
            notification.setRead(false);
            notification.setUser(userGroups.get(i).getUser());
            notificationRepo.save(notification);
        }
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
        EventResponse eventResponse = eventResponseRepo.findByUserIdandEventId(userId, eventId);
        if (eventResponse == null) {
            eventResponse = new EventResponse();
            eventResponse.setUser(userRepo.findOne(userId));
            eventResponse.setEvent(eventRepo.findOne(eventId));
        }
        eventResponse.setResponse(response);
        return eventResponseRepo.save(eventResponse);
    }

    public List<EventDTO> getUpcomingEventsForUser(Long userId) {
        List<Event> upcomingEvents = eventRepo.findUpcomingEventsForUser(userId);
        List<EventDTO> upcomingEventDTOs = new ArrayList<>();

        for (Event event : upcomingEvents) {
                upcomingEventDTOs.add(eventConverter.eventToEventDTO(event));
        }

        return upcomingEventDTOs;
    }

    public List<EventDTO> getUpcomingEventsForEmail(String email) {
        List<Event> upcomingEvents = eventRepo.findUpcomingEventsForEmail(email);
        List<EventDTO> upcomingEventDTOs = new ArrayList<>();

        for (Event event : upcomingEvents) {
            upcomingEventDTOs.add(eventConverter.eventToEventDTO(event));
        }

        return upcomingEventDTOs;
    }
}
