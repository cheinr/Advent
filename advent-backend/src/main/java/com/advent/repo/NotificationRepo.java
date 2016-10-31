package com.advent.repo;

import com.advent.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepo extends JpaRepository<Notification, Long> {

    @Query("select n from Notification n where n.user.id = :userId")
    List<Notification> getAllNotificationsForUser(@Param("userId") Long userId);

    @Query("select n from Notification n where n.user.id =:userId and n.read = false")
    List<Notification> getAllUnreadNotifications(@Param("userId") Long userId);
}
