package com.advent.factory;

import com.advent.dto.EventDTO;
import com.advent.entity.Event;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by clai on 10/3/16.
 */
@Component
public class EventConverter {

    public EventDTO eventToEventDTO(Event event) {
        EventDTO eventDTO = new EventDTO();

        eventDTO.setId(event.getId());
        eventDTO.setName(event.getName());
        eventDTO.setDescription(event.getDescription());
        eventDTO.setStartDate(dateToString(event.getStartDate()));
        eventDTO.setEndDate(dateToString(event.getEndDate()));
        eventDTO.setDescription(event.getDescription());
        eventDTO.setLocation(event.getLocation());
        eventDTO.setEventResponses(event.getEventResponses());
        eventDTO.setGroup(event.getGroup());

        return eventDTO;
    }

    public Event eventDTOtoEvent(EventDTO eventDTO) {
        Event event = new Event();

        event.setId(eventDTO.getId());
        event.setName(eventDTO.getName());
        event.setDescription(eventDTO.getDescription());
        event.setStartDate(stringToDate(eventDTO.getStartDate()));
        event.setEndDate(stringToDate(eventDTO.getEndDate()));
        event.setLocation(eventDTO.getLocation());
        event.setGroup(eventDTO.getGroup());

        return event;
    }

    public List<EventDTO> eventsToEventDTOs(List<Event> events) {
        List<EventDTO> eventDTOs = new ArrayList<>();
        for (Event event : events) {
            eventDTOs.add(eventToEventDTO(event));
        }
        return eventDTOs;
    }

    private Date stringToDate(String dateStr) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        try {
            if (!StringUtils.isEmpty(dateStr)) {
                return format.parse(dateStr);
            }
            return null;
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    private String dateToString(Date date) {

        SimpleDateFormat format = new SimpleDateFormat("MM/dd/yyyy HH:mm a");
        if (date != null) {
            return format.format(date);
        }
        return null;

    }
}
