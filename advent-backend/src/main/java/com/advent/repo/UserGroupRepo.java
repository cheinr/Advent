package com.advent.repo;

import com.advent.entity.UserGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by clai on 10/28/16.
 */
@Repository
public interface UserGroupRepo extends JpaRepository<UserGroup, Long> {


    @Query("select u from UserGroup u where u.user.id =:userId and u.group.id =:groupId")
    UserGroup findByUserIdAndGroupId(@Param("userId") Long userId, @Param("groupId") Long groupId);
}
