package com.advent.service;

import com.advent.dto.NotificationDTO;
import com.advent.entity.Notification;
import com.advent.factory.NotificationFactory;
import com.advent.repo.NotificationRepo;
import com.advent.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private NotificationRepo notificationRepo;

    @Autowired
    private NotificationFactory notificationFactory;

    public NotificationDTO createNotification(NotificationDTO notificationDTO, Long userId) {
        Notification notification = notificationFactory.notificationDTOToNotification(notificationDTO);
        notification.setUser(userRepo.findOne(userId));
        Notification savedNotification = notificationRepo.save(notification);
        return notificationFactory.notificationToNotificationDTO(savedNotification);
    }

    public NotificationDTO markNotificationAsRead(Long id) {
        // There's probably no reason we couldn't just delete them, but to be safe we wont
        Notification notification = notificationRepo.findOne(id);
        notification.setRead(true);
        notificationRepo.save(notification);
        return notificationFactory.notificationToNotificationDTO(notification);
    }

    public List<NotificationDTO> markAllNotificationsForUserAsRead(Long userId) {
        List<Notification> notifications = notificationRepo.getAllNotificationsForUser(userId);
        List<NotificationDTO> notificationDTOs = new ArrayList<>();

        for(Notification notification : notifications) {
            notification.setRead(true);
            notificationRepo.save(notification);
            notificationDTOs.add(notificationFactory.notificationToNotificationDTO(notification));
        }

        return notificationDTOs;
    }

    public List<NotificationDTO> getAllNotifications(Long userId) {
        List<Notification> notifications = notificationRepo.getAllNotificationsForUser(userId);
        List<NotificationDTO> notificationDTOs = new ArrayList<>();

        notifications.forEach(notification ->
            notificationDTOs.add(notificationFactory.notificationToNotificationDTO(notification)));

        return notificationDTOs;
    }

    public List<NotificationDTO> getAllUnreadNotifications(Long userId) {
        List<Notification> notifications = notificationRepo.getAllUnreadNotifications(userId);
        List<NotificationDTO> notificationDTOs = new ArrayList<>();

        notifications.forEach(notification ->
                notificationDTOs.add(notificationFactory.notificationToNotificationDTO(notification)));

        return notificationDTOs;
    }
}
