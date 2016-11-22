package com.advent.controller;

import com.advent.dto.EventDTO;
import com.advent.dto.UserDTO;
import com.advent.entity.UserGroup;
import com.advent.service.UserGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by clai on 10/28/16.
 */
@RestController
@RequestMapping(value = "/api")
public class UserGroupController {

    @Autowired
    private UserGroupService userGroupService;

    @RequestMapping(value = "/join/user/{userId}/group/{groupId}/role/{role}", method = RequestMethod.POST)
    public UserGroup joinGroupAsUser(@PathVariable Long userId, @PathVariable Long groupId, @PathVariable String role) {
        return userGroupService.joinGroupAsUser(userId, groupId, role);
    }

    @RequestMapping(value = "/join/group/{groupId}", method = RequestMethod.POST)
    public UserGroup joinGroupAsMember(@PathVariable Long groupId) {
        return userGroupService.joinGroup(groupId, "MEMBER");
    }

    @RequestMapping(value = "/group/{groupId}/members/{userId}", method = RequestMethod.GET)
    public UserGroup getUserGroup(@PathVariable Long groupId, @PathVariable Long userId) {
        return userGroupService.getUserGroup(userId, groupId);
    }

    @RequestMapping(value = "/usergroup/{userGroupId}/role/set/{newRole}", method = RequestMethod.POST)
    public UserGroup changeUserRoleForGroup(@PathVariable Long userGroupId, @PathVariable String newRole) {
        return userGroupService.changeUserRoleForGroup(userGroupId, newRole);
    }
}
