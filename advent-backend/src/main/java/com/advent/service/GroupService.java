package com.advent.service;

import com.advent.entity.Group;
import com.advent.repo.GroupRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupService {

    @Autowired
    private GroupRepo groupRepo;

    public Group getGroup(Long groupId) {
        return groupRepo.findOne(groupId);
    }

    public Group saveGroup(Group group) {
        return groupRepo.save(group);
    }

    public List<Group> getAllGroups() {
        return groupRepo.findAll();
    }
}
