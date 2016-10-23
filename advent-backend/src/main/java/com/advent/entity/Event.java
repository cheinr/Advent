package com.advent.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "event")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "generator")
    @SequenceGenerator(name = "generator", sequenceName = "event_seq", allocationSize = 1)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "start_date")
    private Date startDate;
    @Column(name = "end_date")
    private Date endDate;
    @Column(name = "location")
    private String location;
    @Column(name = "is_private")
    private Boolean isPrivate;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "event")
    private Set<UserEventMapping> userEventMappings;

    // Temporarily Transient group should relate to groups

    @Transient
    private String group;
    @Transient
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

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
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

    public Set<UserEventMapping> getUserEventMappings() {
        return userEventMappings;
    }

    public void setUserEventMappings(Set<UserEventMapping> userEventMappings) {
        this.userEventMappings = userEventMappings;
    }
}
