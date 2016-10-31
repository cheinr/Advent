package com.advent.controller;

import com.advent.entity.Group;
import com.advent.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GroupController {

    @Autowired
    private GroupService groupService;

    @RequestMapping(value = "/group/create", method = RequestMethod.POST)
    public Group saveGroup(@RequestBody Group group) {
        return groupService.saveGroup(group);
    }

    @RequestMapping(value = "/group/list", method = RequestMethod.POST)
    public List<Group> getAllGroups() {
        return groupService.getAllGroups();
    }

}
