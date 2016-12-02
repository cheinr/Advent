package com.advent.controller;

import com.advent.dto.NotificationDTO;
import com.advent.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @RequestMapping(value = "/notification/create/user-id/{userId}", method = RequestMethod.POST)
    public NotificationDTO createNotification(@PathVariable Long userId, @RequestBody NotificationDTO notificationDTO) {
        return notificationService.createNotification(notificationDTO, userId);
    }

    @RequestMapping(value = "notification/mark-read/{notificationId}", method = RequestMethod.POST)
    public NotificationDTO markNotificationAsRead(@PathVariable Long notificationId) {
        return notificationService.markNotificationAsRead(notificationId);
    }

    @RequestMapping(value = "notification/mark-read/all/current/user", method = RequestMethod.POST)
    public List<NotificationDTO> markAllNotificationsForCurrentUserAsRead(@AuthenticationPrincipal Long userId) {
        return notificationService.markAllNotificationsForUserAsRead(userId);
    }

    @RequestMapping(value = "/notification/unread/current/user", method = RequestMethod.GET)
    public List<NotificationDTO> getAllUnreadNotificationsForCurrentUser(@AuthenticationPrincipal Long userId) {
        return notificationService.getAllUnreadNotifications(userId);
    }

    @RequestMapping(value = "/notification/all/current/user", method = RequestMethod.GET)
    public List<NotificationDTO> getAllNotificationsForCurrentUser(@AuthenticationPrincipal Long userId) {
        return notificationService.getAllNotifications(userId);
    }
}
