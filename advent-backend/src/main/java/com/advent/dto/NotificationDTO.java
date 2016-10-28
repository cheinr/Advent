package com.advent.dto;

import com.advent.utils.NotificationType;

public class NotificationDTO {

    private Long id;
    private String header;
    private String message;
    private String link;
    private NotificationType notificationType;
    private Boolean isRead;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHeader() {
        return header;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public NotificationType getNotificationType() {
        return notificationType;
    }

    public void setNotificationType(NotificationType notificationType) {
        this.notificationType = notificationType;
    }

    public Boolean getRead() {
        return isRead;
    }

    public void setRead(Boolean read) {
        isRead = read;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        NotificationDTO that = (NotificationDTO) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (header != null ? !header.equals(that.header) : that.header != null) return false;
        if (message != null ? !message.equals(that.message) : that.message != null) return false;
        if (link != null ? !link.equals(that.link) : that.link != null) return false;
        if (notificationType != that.notificationType) return false;
        return isRead != null ? isRead.equals(that.isRead) : that.isRead == null;

    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (header != null ? header.hashCode() : 0);
        result = 31 * result + (message != null ? message.hashCode() : 0);
        result = 31 * result + (link != null ? link.hashCode() : 0);
        result = 31 * result + (notificationType != null ? notificationType.hashCode() : 0);
        result = 31 * result + (isRead != null ? isRead.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "NotificationDTO{" +
                "id=" + id +
                ", header='" + header + '\'' +
                ", message='" + message + '\'' +
                ", link='" + link + '\'' +
                ", notificationType=" + notificationType +
                ", isRead=" + isRead +
                '}';
    }
}
