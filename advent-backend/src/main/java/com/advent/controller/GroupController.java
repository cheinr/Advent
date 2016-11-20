package com.advent.controller;

import com.advent.dto.GroupDTO;
import com.advent.entity.Group;
import com.advent.service.GroupService;
import com.advent.service.UserGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GroupController {

    @Autowired
    private GroupService groupService;

    @Autowired
    private UserGroupService userGroupService;

    @RequestMapping("/group")
    public Group getGroupInfo() {
        return null;
    }

    //creates new Group
    @RequestMapping(value = "/group/new", method = RequestMethod.POST)
    public Group newGroup(@RequestBody Group group) {
        Group g = groupService.saveGroup(group);
        userGroupService.joinGroup(g.getId(), "MODERATOR"); //Add the current user as a moderator
        return g;
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
        GroupDTO group =groupService.getGroup(id);
        return group;
    }
}
