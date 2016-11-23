package com.advent.controller;

import com.advent.dto.AnnouncementDTO;
import com.advent.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AnnouncementController {

    @Autowired
    private AnnouncementService announcementService;

    @RequestMapping(value = "/announcement/create", method = RequestMethod.POST)
    public AnnouncementDTO createAnnouncement(@RequestBody AnnouncementDTO announcementDTO) {
        return announcementService.createAnnouncement(announcementDTO);
    }

    @RequestMapping(value = "/announcement/delete/id/{announcementId}", method = RequestMethod.POST)
    public void deleteAnnouncement(@PathVariable Long announcementId) {
        announcementService.deleteAnnouncementById(announcementId);
    }

    @RequestMapping(value = "/announcement/homepage/current/user", method = RequestMethod.GET)
    public List<AnnouncementDTO> getHomepageAnnouncementsForCurrentUser(@AuthenticationPrincipal Long userId) {
        return announcementService.getHomepageAnnouncementsForUser(userId);
    }

    @RequestMapping(value = "/announcement/group/{groupId}", method = RequestMethod.GET)
    public List<AnnouncementDTO> getAllAnnouncementsForGroup(@PathVariable Long groupId) {
        return announcementService.getAllAnnouncementsForGroup(groupId);
    }
}
