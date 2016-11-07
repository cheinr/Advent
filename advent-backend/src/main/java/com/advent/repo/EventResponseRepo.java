package com.advent.repo;

import com.advent.entity.EventResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Created by clai on 11/6/16.
 */
@Repository
public interface EventResponseRepo extends JpaRepository<EventResponse, Long> {

    @Query("select e from EventResponse e where e.user.id =:userId and e.event.id =:eventId")
    EventResponse findByUserIdandEventId(@Param("userId") Long userId,@Param("eventId") Long eventId);

}
