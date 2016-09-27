package com.advent.dto;

public class UserDTO {

    private Long id;
    private String username;
    private String displayName;
    private String email;
    private String password;
    private String description;
    private String pictureFilename;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPictureFilename() {
        return pictureFilename;
    }

    public void setPictureFilename(String pictureFilename) {
        this.pictureFilename = pictureFilename;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserDTO userDTO = (UserDTO) o;

        if (!id.equals(userDTO.id)) return false;
        if (!username.equals(userDTO.username)) return false;
        if (!displayName.equals(userDTO.displayName)) return false;
        if (!email.equals(userDTO.email)) return false;
        if (description != null ? !description.equals(userDTO.description) : userDTO.description != null) return false;
        return pictureFilename != null ? pictureFilename.equals(userDTO.pictureFilename) : userDTO.pictureFilename == null;

    }

    @Override
    public int hashCode() {
        int result = id.hashCode();
        result = 31 * result + username.hashCode();
        result = 31 * result + displayName.hashCode();
        result = 31 * result + email.hashCode();
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (pictureFilename != null ? pictureFilename.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", displayName='" + displayName + '\'' +
                ", email='" + email + '\'' +
                ", description='" + description + '\'' +
                ", pictureFilename=" + pictureFilename +
                '}';
    }
}
