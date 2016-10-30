package com.advent.repo;

import com.advent.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepo extends JpaRepository<Notification, Long> {

//    TODO dszopa 10/30/16 - Finish implementing these notification methods
//    @Query("select n from Notification n inner join n.user")
    List<Notification> getAllNotificationsForUser(@Param("userId") String userId);

//    @Query()
    List<Notification> getAllUnreadNotifications(@Param("userId") String userId);
}
