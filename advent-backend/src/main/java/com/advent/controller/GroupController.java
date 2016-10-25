package com.advent.controller;

import com.advent.entity.Group;
import com.advent.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
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
}
