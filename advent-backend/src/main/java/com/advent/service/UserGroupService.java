package com.advent.service;

import com.advent.entity.UserGroup;
import com.advent.repo.GroupRepo;
import com.advent.repo.UserGroupRepo;
import com.advent.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by clai on 10/28/16.
 */
@Service
public class UserGroupService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private GroupRepo groupRepo;
    @Autowired
    private UserGroupRepo userGroupRepo;

    public UserGroup joinGroupAsUser(Long userId, Long groupId, String role) {
        UserGroup userGroup = new UserGroup();
        userGroup.setUser(userRepo.findOne(userId));
        userGroup.setGroup(groupRepo.findOne(groupId));
        userGroup.setRole(role);
        return userGroupRepo.save(userGroup);
    }
}
