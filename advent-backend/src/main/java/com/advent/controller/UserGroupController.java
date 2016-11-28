package com.advent.controller;

import com.advent.entity.UserGroup;
import com.advent.service.UserGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by clai on 10/28/16.
 */
@RestController
@RequestMapping(value = "/api")
public class UserGroupController {

    @Autowired
    private UserGroupService userGroupService;

    @RequestMapping(value = "/membership/current/user/group/{groupId}", method = RequestMethod.GET)
    public Boolean isCurrentUserInGroup(@AuthenticationPrincipal Long userId, @PathVariable Long groupId) {
        return userGroupService.isUserInGroup(userId, groupId);
    }

    @RequestMapping(value = "/join/user/{userId}/group/{groupId}/role/{role}", method = RequestMethod.POST)
    public UserGroup joinGroupAsUser(@PathVariable Long userId, @PathVariable Long groupId, @PathVariable String role) {
        return userGroupService.joinGroupAsUser(userId, groupId, role);
    }

    @RequestMapping(value = "/remove/user/{userId}/group/{groupId}", method = RequestMethod.POST)
    public void removeUserFromGroup(@PathVariable Long userId, @PathVariable Long groupId) {
        userGroupService.removeUserFromGroup(userId, groupId);
    }

    @RequestMapping(value = "/remove/user/current/group/{groupId}", method = RequestMethod.POST)
    public void removeCurrentUserFromGroup(@AuthenticationPrincipal Long userId, @PathVariable Long groupId) {
        userGroupService.removeUserFromGroup(userId, groupId);
    }
}
