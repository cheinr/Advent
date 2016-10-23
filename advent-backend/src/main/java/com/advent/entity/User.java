package com.advent.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "user")
public class User {

    private Long id;
    private String displayName;
    private String email;
    private String description;
    private String pictureUrl;
    private Set<UserEventMapping> userEventMappings;
    // TODO dszopa 9/25/16 - Add List of groups the user is in (groups need to be made first)
    // TODO dszopa 9/25/16 - Add List of chats the user is in (chats need to be made first)

    @Id
    @Column(name = "id", unique = true, nullable = false, length = 20)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "generator")
    @SequenceGenerator(name = "generator", sequenceName = "user_seq", allocationSize = 1)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "display_name", nullable = false)
    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    @Column(name = "email", nullable = false)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Column(name = "picture_url")
    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "event")
    public Set<UserEventMapping> getUserEventMappings() {
        return userEventMappings;
    }

    public void setUserEventMappings(Set<UserEventMapping> userEventMappings) {
        this.userEventMappings = userEventMappings;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        User user = (User) o;

        if (id != null ? !id.equals(user.id) : user.id != null) return false;
        if (!displayName.equals(user.displayName)) return false;
        if (!email.equals(user.email)) return false;
        if (description != null ? !description.equals(user.description) : user.description != null) return false;
        return pictureUrl != null ? pictureUrl.equals(user.pictureUrl) : user.pictureUrl == null;

    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", displayName='" + displayName + '\'' +
                ", email='" + email + '\'' +
                ", description='" + description + '\'' +
                ", pictureUrl='" + pictureUrl + '\'' +
                '}';
    }
}
