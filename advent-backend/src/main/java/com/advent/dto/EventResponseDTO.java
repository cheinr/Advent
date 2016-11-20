package com.advent.dto;

/**
 * Created by clai on 11/6/16.
 */
public class EventResponseDTO {
    private Long eventId;
    private String response;

    public Long getEventId() {
        return eventId;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }
}
