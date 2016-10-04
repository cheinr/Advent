package com.advent.factory;

import com.advent.dto.EventDTO;
import com.advent.entity.Event;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

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
        event.setGroup(eventDTO.getGroup());

        return event;
    }

    private Date stringToDate(String dateStr) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        try {
            return format.parse(dateStr);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    private String dateToString(Date date) {

        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return format.format(date);

    }
}
