package com.advent.repo;

import com.advent.entity.UserGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by clai on 10/28/16.
 */
@Repository
public interface UserGroupRepo extends JpaRepository<UserGroup, Long> {
}
