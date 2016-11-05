package com.advent.controller;

import com.advent.dto.GroupDTO;
import com.advent.entity.Group;
import com.advent.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GroupController {

    @Autowired
    private GroupService groupService;

    @RequestMapping("/group")
    public Group getGroupInfo() {
        return null;
    }

    //creates new Group
    @RequestMapping(value = "/group/new", method = RequestMethod.POST)
    public Group newGroup(@RequestBody Group group) {
        return groupService.saveGroup(group);
    }

    @RequestMapping(value = "/group/edit", method = RequestMethod.POST)
    public Group editGroup(@RequestBody Group group) {
        return groupService.saveGroup(group);
    }

    @RequestMapping(value = "/group/members/{groupId}", method = RequestMethod.GET)
    public GroupDTO getMembers(@PathVariable Long groupId) {
        return null;
    }

    @RequestMapping(value = "/group/tags", method = RequestMethod.POST)
    public GroupDTO addTag(@RequestBody GroupDTO groupDTO) {
        return null;
    }

    @RequestMapping(value = "/group/list", method = RequestMethod.POST)
    public List<Group> getGroups() {
        return groupService.getAllGroups();
    }

    @RequestMapping(value = "/group/query/{query}", method = RequestMethod.GET)
    public List<Group> searchForGroups(@PathVariable String query) { return groupService.searchForGroupsByName(query); }

    @RequestMapping(value = "/group/{id}", method = RequestMethod.GET)
    public GroupDTO getGroupById(@PathVariable Long id) {
        GroupDTO group =groupService.getGroup(id);
        return group;
    }
}
