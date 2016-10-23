package com.advent.dto;

public class UserDTO {

    private Long id;
    private String displayName;
    private String fullName;
    private String email;
    private String description;
    private String pictureUrl;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserDTO userDTO = (UserDTO) o;

        if (!id.equals(userDTO.id)) return false;
        if (!fullName.equals(userDTO.fullName)) return false;
        if (!displayName.equals(userDTO.displayName)) return false;
        if (!email.equals(userDTO.email)) return false;
        if (description != null ? !description.equals(userDTO.description) : userDTO.description != null) return false;
        return pictureUrl != null ? pictureUrl.equals(userDTO.pictureUrl) : userDTO.pictureUrl == null;

    }

    @Override
    public int hashCode() {
        int result = id.hashCode();
        result = 31 * result + fullName.hashCode();
        result = 31 * result + displayName.hashCode();
        result = 31 * result + email.hashCode();
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (pictureUrl != null ? pictureUrl.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "id=" + id +
                ", fullName='" + fullName + '\'' +
                ", displayName='" + displayName + '\'' +
                ", email='" + email + '\'' +
                ", description='" + description + '\'' +
                ", pictureUrl=" + pictureUrl +
                '}';
    }
}