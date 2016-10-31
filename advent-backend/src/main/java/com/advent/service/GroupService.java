package com.advent.service;

import com.advent.dto.GroupDTO;
import com.advent.entity.Group;
import com.advent.factory.GroupConverter;
import com.advent.repo.GroupRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupService {

    @Autowired
    private GroupRepo groupRepo;
    @Autowired
    private GroupConverter groupConverter;

    public GroupDTO getGroup(Long groupId) {
        Group group = groupRepo.findOne(groupId);
        group.getEvents().size();
        return groupConverter.groupToGroupDTO(group);
    }

    public Group saveGroup(Group group) {
        return groupRepo.save(group);
    }

    public List<Group> getAllGroups() {
        return groupRepo.findAll();
    }
}
