package com.advent.repo;

import com.advent.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    @Query("select u from User u where u.fullName = :fullName")
    User findByFullName(@Param("fullName") String fullName);

    @Query("select u from User u where u.email = :email")
    User findByEmail(@Param("email") String email);

}
