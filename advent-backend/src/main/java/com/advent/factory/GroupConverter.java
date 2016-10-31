package com.advent.factory;

import com.advent.dto.GroupDTO;
import com.advent.entity.Group;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by clai on 10/28/16.
 */
@Component
public class GroupConverter {

    public GroupDTO groupToGroupDTO(Group group) {
        GroupDTO groupDTO = new GroupDTO();

        groupDTO.setId(group.getId());
        groupDTO.setGroupName(group.getGroupName());
        groupDTO.setDescription(group.getDescription());
        groupDTO.setEvents(new ArrayList<>(group.getEvents()));
        groupDTO.setUserGroups(group.getUserGroups());
        groupDTO.setAnnouncements(group.getAnnouncements());
        return groupDTO;
    }

    public Group groupDTOtoGroup(GroupDTO groupDTO) {

        Group group = new Group();

        group.setId(groupDTO.getId());
        group.setGroupName(groupDTO.getGroupName());
        group.setDescription(groupDTO.getDescription());
        group.setEvents(groupDTO.getEvents());
        group.setUserGroups(groupDTO.getUserGroups());
        group.setAnnouncements(groupDTO.getAnnouncements());
        return group;
    }

    public List<GroupDTO> groupToGroupDTO(List<Group> events) {
        List<GroupDTO> groupDTOs = new ArrayList<>();
        for (Group event : events) {
            groupDTOs.add(groupToGroupDTO(event));
        }
        return groupDTOs;
    }
}
