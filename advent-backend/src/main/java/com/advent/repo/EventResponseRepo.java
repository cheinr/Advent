package com.advent.repo;

import com.advent.entity.EventResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by clai on 11/6/16.
 */
@Repository
public interface EventResponseRepo extends JpaRepository<EventResponse, Long> {
}
