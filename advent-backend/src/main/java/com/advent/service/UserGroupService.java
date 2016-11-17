package com.advent.service;

import com.advent.dto.UserDTO;
import com.advent.entity.UserGroup;
import com.advent.repo.GroupRepo;
import com.advent.repo.UserGroupRepo;
import com.advent.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
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

    /*
    TODO - @chein this should check the security context to make sure the currently logged in user has the
    right authorities to add the selected user as a moderator.
     */
    public UserGroup joinGroupAsUser(Long userId, Long groupId, String role) {
        UserGroup userGroup = new UserGroup();
        userGroup.setUser(userRepo.findOne(userId));
        userGroup.setGroup(groupRepo.findOne(groupId));
        userGroup.setRole(role);
        return userGroupRepo.save(userGroup);
    }

    /**
     * Same as joinGroupAsUser but adds the user in the security context instead.
     * @param id
     * @param moderator
     */
    public UserGroup joinGroup(Long groupId, String role) {
        UserDTO currentUser = null;

        Authentication a = SecurityContextHolder.getContext().getAuthentication();
        currentUser = (UserDTO) a.getDetails();

        UserGroup userGroup = new UserGroup();
        userGroup.setUser(userRepo.findOne(currentUser.getId()));
        userGroup.setGroup(groupRepo.findOne(groupId));
        userGroup.setRole(role);
        return userGroupRepo.save(userGroup);
    }
}
