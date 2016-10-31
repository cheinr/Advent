package com.advent.controller;

import com.advent.dto.GroupDTO;
import com.advent.entity.Group;
import com.advent.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
    public GroupDTO newGroup(@RequestBody GroupDTO groupDTO) {
        return groupService.saveGroup(groupDTO);
    }

    @RequestMapping(value = "/group/edit", method = RequestMethod.POST)
    public GroupDTO editGroup(@RequestBody GroupDTO groupDTO) {
        return groupService.saveGroup(groupDTO);
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

    @RequestMapping(value = "/group/{id}", method = RequestMethod.GET)
    public GroupDTO getGroupById(@PathVariable Long id) {
        GroupDTO group =groupService.getGroup(id);
        return group;
    }
}
