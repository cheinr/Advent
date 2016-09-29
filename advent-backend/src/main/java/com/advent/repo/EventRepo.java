package com.advent.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.w3c.dom.events.Event;

@Repository
public interface EventRepo extends JpaRepository<Event, Long> {
}
