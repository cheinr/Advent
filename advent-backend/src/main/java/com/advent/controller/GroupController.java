package com.advent.controller;

import com.advent.dto.GroupDTO;
import com.advent.entity.Group;
import com.advent.entity.UserGroup;
import com.advent.repo.UserGroupRepo;
import com.advent.service.GroupService;
import com.advent.service.UserGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GroupController {

    @Autowired
    private GroupService groupService;

    @Autowired
    private UserGroupService userGroupService;

    @Autowired
    private UserGroupRepo userGroupRepo;

    @RequestMapping("/group")
    public Group getGroupInfo() {
        return null;
    }

    //creates new Group
    @RequestMapping(value = "/group/new", method = RequestMethod.POST)
    public Group newGroup(@RequestBody Group group) {
        Group g = groupService.saveGroup(group);
        userGroupService.joinGroup(g.getId(), "Owner"); //Add the current user as a moderator
        return g;
    }

    @RequestMapping(value = "/group/edit", method = RequestMethod.POST)
    public Group editGroup(@RequestBody Group group, @AuthenticationPrincipal Long userId) {
        //make sure logged in user is MODERATOR of group
        UserGroup userGroup = userGroupRepo.findByUserIdAndGroupId(userId, group.getId());

        if(userGroup == null || !userGroup.getRole().equalsIgnoreCase("ADMIN") && !userGroup.getRole().equalsIgnoreCase("OWNER")) {
            return null;
        }
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

    @RequestMapping(value = "/auth/group/my-groups/{email:.+}", method = RequestMethod.GET)
    public List<GroupDTO> getGroupsForUser(@PathVariable String email) {
        System.out.println(email);
        return groupService.getGroupsForEmail(email);
    }
}
