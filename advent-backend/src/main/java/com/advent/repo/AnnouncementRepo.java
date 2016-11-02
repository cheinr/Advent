package com.advent.repo;

import com.advent.entity.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnnouncementRepo extends JpaRepository<Announcement, Long> {

    // TODO dszopa 11/1/16 - implement this
    @Query("")
    List<Announcement> findHomepageAnnouncementsForUser(@Param("userId") Long userId);

    // TODO dszopa 11/1/16 - implement this
    @Query("")
    List<Announcement> findAllAnnouncementsByGroup(@Param("groupId") Long groupId);
}
