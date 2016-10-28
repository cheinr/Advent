package com.advent.controller;

import com.advent.entity.Group;
import com.advent.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/group")
public class GroupController {

    @Autowired
    private GroupService groupService;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Group saveGroup(@RequestBody Group group) {
        return groupService.saveGroup(group);
    }

    @RequestMapping(value = "/list", method = RequestMethod.POST)
    public List<Group> getAllGroups() {
        return groupService.getAllGroups();
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Group getGroupById(@PathVariable Long id) {
        return groupService.getGroup(id);
    }
}
