package com.advent.repo;

import com.advent.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface EventRepo extends JpaRepository<Event, Long> {

    @Query("select e from Event e where e.group.id = :groupId")
    List<Event> findByKeyGroup(@Param("groupId") Long groupId);

    @Query("select e from Event e inner join e.group.userGroups u where u.user.id = :userId AND e.startDate >= CURRENT_DATE ORDER BY e.startDate ASC")
    List<Event> findUpcomingEventsForUser(@Param("userId") Long userId);

    @Query("select e from Event e inner join e.group.userGroups u where u.user.email = :email AND e.startDate >= CURRENT_DATE ORDER BY e.startDate ASC")
    List<Event> findUpcomingEventsForEmail(@Param("email") String email);
}
