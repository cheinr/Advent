package com.advent.dto;

import com.advent.entity.User;

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
    // todo clai when groups are implemented
    private String group;
    private List<User> usersGoing;

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

    public List<User> getUsersGoing() {
        return usersGoing;
    }

    public void setUsersGoing(List<User> usersGoing) {
        this.usersGoing = usersGoing;
    }

    public Boolean getPrivate() {
        return isPrivate;
    }

    public void setPrivate(Boolean aPrivate) {
        isPrivate = aPrivate;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }
}
