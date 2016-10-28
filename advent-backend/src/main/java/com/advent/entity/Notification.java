package com.advent.entity;

import com.advent.converter.BooleanConverter;
import com.advent.converter.NotificationTypeConverter;
import com.advent.utils.NotificationType;

import javax.persistence.*;

@Entity
@Table(name = "notification")
public class Notification {

    private Long id;
    private String header;
    private String message;
    private String link;
    private NotificationType notificationType;
    private Boolean isRead;
    private User user;

    @Id
    @Column(name = "id", unique = true, nullable = false, length = 20)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "generator")
    @SequenceGenerator(name = "generator", sequenceName = "notification_seq")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "header")
    public String getHeader() {
        return header;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    @Column(name = "message")
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Column(name = "link")
    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    @Column(name = "notification_type")
    @Convert(converter = NotificationTypeConverter.class)
    public NotificationType getNotificationType() {
        return notificationType;
    }

    public void setNotificationType(NotificationType notificationType) {
        this.notificationType = notificationType;
    }

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Column(name = "is_read")
    @Convert(converter = BooleanConverter.class)
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

        Notification that = (Notification) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (header != null ? !header.equals(that.header) : that.header != null) return false;
        if (message != null ? !message.equals(that.message) : that.message != null) return false;
        if (link != null ? !link.equals(that.link) : that.link != null) return false;
        if (notificationType != that.notificationType) return false;
        if (isRead != null ? !isRead.equals(that.isRead) : that.isRead != null) return false;
        return user != null ? user.equals(that.user) : that.user == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (header != null ? header.hashCode() : 0);
        result = 31 * result + (message != null ? message.hashCode() : 0);
        result = 31 * result + (link != null ? link.hashCode() : 0);
        result = 31 * result + (notificationType != null ? notificationType.hashCode() : 0);
        result = 31 * result + (isRead != null ? isRead.hashCode() : 0);
        result = 31 * result + (user != null ? user.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Notification{" +
                "id=" + id +
                ", header='" + header + '\'' +
                ", message='" + message + '\'' +
                ", link='" + link + '\'' +
                ", notificationType=" + notificationType +
                ", isRead=" + isRead +
                ", user=" + user +
                '}';
    }
}
