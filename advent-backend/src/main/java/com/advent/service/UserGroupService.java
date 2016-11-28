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

    public Boolean isUserInGroup(Long userId, Long groupId) {
        UserGroup userGroup = userGroupRepo.findByUserIdAndGroupId(userId, groupId);
        return userGroup != null;
    }

    public UserGroup joinGroupAsUser(Long userId, Long groupId, String role) {
        UserGroup userGroup = userGroupRepo.findByUserIdAndGroupId(userId, groupId);
        if (userGroup != null) {
            return userGroup;
        }
        userGroup = new UserGroup();
        userGroup.setUser(userRepo.findOne(userId));
        userGroup.setGroup(groupRepo.findOne(groupId));
        userGroup.setRole(role);
        return userGroupRepo.save(userGroup);
    }

    public void removeUserFromGroup(Long userId, Long groupId) {
        UserGroup userGroup = userGroupRepo.findByUserIdAndGroupId(userId, groupId);
        userGroupRepo.delete(userGroup);
    }
}
