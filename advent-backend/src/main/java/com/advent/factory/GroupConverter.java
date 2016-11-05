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
        GroupDTO groupDTO = new GroupDTO();

        groupDTO.setId(group.getId());
        groupDTO.setGroupName(group.getGroupName());
        groupDTO.setDescription(group.getDescription());
        return groupDTO;
    }

    public Group groupDTOtoGroup(GroupDTO groupDTO) {

        Group group = new Group();

        group.setId(groupDTO.getId());
        group.setGroupName(groupDTO.getGroupName());
        group.setDescription(groupDTO.getDescription());
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
