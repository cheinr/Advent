package com.advent.entity;

import com.advent.utils.NotificationType;

import javax.persistence.*;

@Entity
@Table(name = "notification")
public class Notification {

    private Long id;
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

    @Column(name = "is_read")
    // TODO dszopa 10/23/16 - Create converter & update sql insert
    public Boolean getIsRead() {
        return isRead;
    }

    public void setIsRead(Boolean isRead) {
        this.isRead = isRead;
    }

    @Column(name = "notification_type")
//    @Convert // TODO dszopa 10/23/16 - Create converter & update sql insert
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
}
