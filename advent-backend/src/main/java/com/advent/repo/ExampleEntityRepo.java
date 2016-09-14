package com.advent.repo;

import com.advent.entity.ExampleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExampleEntityRepo extends JpaRepository<ExampleEntity, Long> {
}
