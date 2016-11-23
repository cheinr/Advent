package com.advent.controller;

import com.advent.entity.UserGroup;
import com.advent.service.UserGroupService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @RequestMapping(value = "/join/user/{userId}/group/{groupId}/role/{role}", method = RequestMethod.POST)
    public UserGroup joinGroupAsUser(@PathVariable Long userId, @PathVariable Long groupId, @PathVariable String role) {
        return userGroupService.joinGroupAsUser(userId, groupId, role);
    }

    @RequestMapping(value = "/remove/user/{userId}/group/{groupId}", method = RequestMethod.POST)
    public void removeUserFromGroup(@PathVariable Long userId, @PathVariable Long groupId) {
        userGroupService.removeUserFromGroup(userId, groupId);
    }

}
