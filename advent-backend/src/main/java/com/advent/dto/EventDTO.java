package com.advent.dto;

import com.advent.entity.EventResponse;
import com.advent.entity.Group;
import com.advent.entity.User;
import com.advent.entity.UserGroup;

import java.util.Date;
import java.util.List;

/**
 * Created by clai on 10/3/16.
 */
public class EventDTO {
    private Long id;
    private String name;
    private String description;
    private String startDate;
    private String endDate;
    private String location;
    private Boolean isPrivate;
    private Group group;
    private List<EventResponse> eventResponses;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<EventResponse> getEventResponses() {
        return eventResponses;
    }

    public void setEventResponses(List<EventResponse> eventResponses) {
        this.eventResponses = eventResponses;
    }

    public Boolean getPrivate() {
        return isPrivate;
    }

    public void setPrivate(Boolean aPrivate) {
        isPrivate = aPrivate;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }
}
