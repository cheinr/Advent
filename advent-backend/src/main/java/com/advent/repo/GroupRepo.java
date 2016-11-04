package com.advent.repo;

import com.advent.entity.Event;
import com.advent.entity.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroupRepo extends JpaRepository<Group, Long> {

    @Query("select g from Group g where g.groupName LIKE :nameQuery")
    List<Group> searchByGroupName(@Param("nameQuery") String nameQuery);

}
