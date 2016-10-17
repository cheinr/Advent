package com.advent.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {

    private Long id;
    private String fullName;
    private String displayName;
    private String email;
    private String description;
    private String profilePicUrl;
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

    @Column(name = "fullname", nullable = false)
    public String getFullName() {
        return fullName;
    }

    public void setFullname(String username) {
        this.fullName = username;
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

    @Column(name = "picture_filename")
    public String getProfilePicUrl() {
        return profilePicUrl;
    }

    public void setProfilePicUrl(String pictureFilename) {
        this.profilePicUrl = pictureFilename;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        User user = (User) o;

        if (id != null ? !id.equals(user.id) : user.id != null) return false;
        if (!fullName.equals(user.fullName)) return false;
        if (!displayName.equals(user.displayName)) return false;
        if (!email.equals(user.email)) return false;
       // if (!password.equals(user.password)) return false;
        if (description != null ? !description.equals(user.description) : user.description != null) return false;
        return profilePicUrl != null ? profilePicUrl.equals(user.profilePicUrl) : user.profilePicUrl == null;

    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + fullName + '\'' +
                ", displayName='" + displayName + '\'' +
                ", email='" + email + '\'' +
           //     ", password='" + password + '\'' +
                ", description='" + description + '\'' +
                ", pictureFilename='" + profilePicUrl + '\'' +
                '}';
    }
}
