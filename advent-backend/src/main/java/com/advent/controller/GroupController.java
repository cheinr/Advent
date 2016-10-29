package com.advent.controller;

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
    private GroupService GroupService;

    @RequestMapping("/group")
    public Group getGroupInfo() {
        return null;
    }

    //creates new Group
    @RequestMapping(value = "/group/new", method = RequestMethod.POST)
    public GroupDTO newGroup(@RequestBody GroupDTO groupDTO) {
        return GroupService.newGroup(groupDTO);
    }

    @RequestMapping(value = "/group/edit", method = RequestMethod.POST)
    public GroupDTO editGroup(@RequestBody GroupDTO groupDTO) {
        return GroupService.editGroup(groupDTO);
    }

    @RequestMapping(value = "/group/members/{groupId}", method = RequestMethod.GET)
    public GroupDTO getMembers(@PathVariable Long groupId) {
        return GroupService.findMembers(groupId);
    }

    @RequestMapping(value = "/group/tags", method = RequestMethod.POST)
    public GroupDTO addTag(@RequestBody GroupDTO groupDTO) {
        return GroupService.addTag(groupDTO);
    }

    @RequestMapping(value = "/group/list", method = RequestMethod.POST)
    public List<Group> getGroups() {
        return GroupService.getGroups();
    }



}
