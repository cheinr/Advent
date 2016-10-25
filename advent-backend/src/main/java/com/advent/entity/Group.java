package com.advent.entity;



import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "group_table")
public class Group {

    private Long id;
    private String groupName;
    private String groupPictureUrl;
    private String tags;
    private String description;
    private List<Event> events;
    private List<UserGroup> userGroups;
    private List<User> groupMembers;

    @Id
    @Column(name = "id", unique = true, nullable = false, length = 20)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "generator")
    @SequenceGenerator(name = "generator", sequenceName = "group_seq", allocationSize = 1)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "group_name", nullable = false)
    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    @Column(name = "group_picture_url", nullable = false)
    public String getGroupPictureUrl() {
        return groupPictureUrl;
    }

    public void setGroupPictureUrl(String groupPictureUrl) {
        this.groupPictureUrl = groupPictureUrl;
    }

    @Column(name = "tags", nullable = false)
    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    @Column(name = "description", nullable = false)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "group")
    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "group")
    public List<UserGroup> getUserGroups() {
        return userGroups;
    }

    public void setUserGroups(List<UserGroup> userGroups) {
        this.userGroups = userGroups;
    }

    @ManyToMany
    @JoinTable(name = "group_members",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "group_id", referencedColumnName = "id"))
    public List<User> getGroupMembers() {
        return groupMembers;
    }

    public void setGroupMembers(List<User> groupMembers) {
        this.groupMembers = groupMembers;
    }

    @Override
    public String toString() {
        return "Group{" +
                "id=" + id +
                ", groupName='" + groupName + '\'' +
                ", groupPictureUrl='" + groupPictureUrl + '\'' +
                ", tags='" + tags + '\'' +
                ", description='" + description + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Group group = (Group) o;

        if (!id.equals(group.id)) return false;
        if (!groupName.equals(group.groupName)) return false;
        if (!groupPictureUrl.equals(group.groupPictureUrl)) return false;
        if (!tags.equals(group.tags)) return false;
        return description.equals(group.description);
    }

}
