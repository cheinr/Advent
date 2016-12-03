package com.advent.repo;

import com.advent.entity.Announcement;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnnouncementRepo extends JpaRepository<Announcement, Long> {

    @Query("select a from Announcement a inner join a.group.userGroups u where u.user.id = :userId ORDER BY a.date DESC")
    List<Announcement> findHomepageAnnouncementsForUser(@Param("userId") Long userId);

    @Query("select a from Announcement a where a.group.id = :groupId ORDER BY a.date DESC")
    List<Announcement> findAllAnnouncementsByGroup(@Param("groupId") Long groupId);

    @Query("select a from Announcement a where a.group.id = :groupId ORDER BY a.date DESC")
    List<Announcement> findFirstTenAnnouncementsByGroup(@Param("groupId") Long groupId, Pageable pageable);
}
