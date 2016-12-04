package com.advent.service;

import com.advent.dto.GroupDTO;
import com.advent.entity.Group;
import com.advent.factory.GroupConverter;
import com.advent.repo.GroupRepo;
import com.advent.repo.UserGroupRepo;
import com.advent.service.impl.UserManagementServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GroupService {

    @Autowired
    private GroupRepo groupRepo;
    @Autowired
    private GroupConverter groupConverter;

    @Autowired
    private UserManagementServiceImpl userManagementService;
    @Autowired
    private UserGroupRepo userGroupRepo;

    public GroupDTO getGroup(Long groupId) {
        Group group = groupRepo.findOne(groupId);
        return groupConverter.groupToGroupDTO(group);
    }

    public Group saveGroup(Group group) {
        return groupRepo.save(group);
    }

    public List<Group> getAllGroups() {
        return groupRepo.findAll();
    }

    public List<Group> searchForGroupsByName(String nameQuery) { return groupRepo.searchByGroupName("%" + nameQuery.toUpperCase() + "%");
    }

    public List<GroupDTO> getGroupsForUser(Long userId) {
        List<Group> groups = groupRepo.findGroupsForUser(userId);
        List<GroupDTO> groupDTOs = new ArrayList<>();

        for (Group group : groups) {
            groupDTOs.add(groupConverter.groupToGroupDTO(group));
        }

        return groupDTOs;
    }

    public List<GroupDTO> getGroupsForEmail(String email) {
        List<Group> groups = groupRepo.findGroupsForUserEmail(email);
        List<GroupDTO> groupDTOs = new ArrayList<>();

        for (Group group : groups) {
            groupDTOs.add(groupConverter.groupToGroupDTO(group));
        }

        return groupDTOs;
    }
}
