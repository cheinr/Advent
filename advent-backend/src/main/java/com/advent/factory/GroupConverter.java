package com.advent.factory;

import com.advent.dto.GroupDTO;
import com.advent.entity.Group;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by clai on 10/28/16.
 */
@Component
public class GroupConverter {

    public GroupDTO groupToGroupDTO(Group group) {
        if (group == null) {
            return null;
        }
        GroupDTO groupDTO = new GroupDTO();

        groupDTO.setId(group.getId());
        groupDTO.setGroupName(group.getGroupName());
        groupDTO.setDescription(group.getDescription());
        groupDTO.setGroupPictureUrl(group.getGroupPictureUrl());
        groupDTO.setTags(group.getTags());
        groupDTO.setEvents(group.getEvents());
        groupDTO.setUserGroups(group.getUserGroups());
        groupDTO.setAnnouncements(group.getAnnouncements());
        return groupDTO;
    }

    public Group groupDTOtoGroup(GroupDTO groupDTO) {

        Group group = new Group();

        group.setId(groupDTO.getId());
        group.setGroupName(groupDTO.getGroupName());
        group.setDescription(groupDTO.getDescription());
        group.setGroupPictureUrl(groupDTO.getGroupPictureUrl());
        group.setTags(groupDTO.getTags());
        groupDTO.setEvents(group.getEvents());
        groupDTO.setUserGroups(group.getUserGroups());
        groupDTO.setAnnouncements(group.getAnnouncements());
        return group;
    }

    public List<GroupDTO> groupToGroupDTO(List<Group> groups) {
        List<GroupDTO> groupDTOs = new ArrayList<>();
        for (Group group : groups) {
            groupDTOs.add(groupToGroupDTO(group));
        }
        return groupDTOs;
    }
}
