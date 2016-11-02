package com.advent.factory;

import com.advent.dto.NotificationDTO;
import com.advent.entity.Notification;
import org.springframework.stereotype.Component;

@Component
public class NotificationFactory {

    public NotificationDTO createNotificationDTO() {
        return new NotificationDTO();
    }

    public Notification notificationDTOToNotification(NotificationDTO notificationDTO) {
        if (notificationDTO == null) {
            return null;
        }

        Notification notification = new Notification();

        notification.setId(notificationDTO.getId());
        notification.setHeader(notificationDTO.getHeader());
        notification.setLink(notificationDTO.getLink());
        notification.setMessage(notificationDTO.getMessage());
        notification.setNotificationType(notificationDTO.getNotificationType());
        notification.setRead(notificationDTO.getRead());

        return notification;
    }

    public NotificationDTO notificationToNotificationDTO(Notification notification) {
        if (notification == null) {
            return null;
        }

        NotificationDTO notificationDTO = new NotificationDTO();

        notificationDTO.setId(notification.getId());
        notificationDTO.setHeader(notification.getHeader());
        notificationDTO.setLink(notification.getLink());
        notificationDTO.setMessage(notification.getMessage());
        notificationDTO.setNotificationType(notification.getNotificationType());
        notificationDTO.setRead(notification.getRead());

        return notificationDTO;
    }
}
