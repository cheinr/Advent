package com.advent.controller;

import com.advent.dto.GroupDTO;
import com.advent.entity.Group;
import com.advent.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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

    @RequestMapping(value = "/group/query", method = RequestMethod.GET)
    public List<Group> searchForGroups(@RequestParam(required = false, defaultValue = "", value="groupName") String groupName) { return groupService.searchForGroupsByName(groupName); }

    @RequestMapping(value = "/group/{id}", method = RequestMethod.GET)
    public GroupDTO getGroupById(@PathVariable Long id) {
        return groupService.getGroup(id);
    }

    @RequestMapping(value = "/group/user/{userId}", method = RequestMethod.GET)
    public List<GroupDTO> getGroupsForUser(@PathVariable Long userId) {
        return groupService.getGroupsForUser(userId);
    }

    @RequestMapping(value = "/group/my-groups", method = RequestMethod.GET)
    public List<GroupDTO> getGroupsForCurrentUser(@AuthenticationPrincipal Long userId) {
        return groupService.getGroupsForUser(userId);
    }
}
