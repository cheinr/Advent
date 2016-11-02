package com.advent.service;

import com.advent.dto.AnnouncementDTO;
import com.advent.entity.Announcement;
import com.advent.factory.AnnouncementConverter;
import com.advent.repo.AnnouncementRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AnnouncementService {

    @Autowired
    private AnnouncementRepo announcementRepo;

    @Autowired
    private AnnouncementConverter announcementConverter;

    public AnnouncementDTO createAnnouncement(AnnouncementDTO announcementDTO) {
        Announcement announcement = announcementRepo.save(announcementConverter.announcementDTOToAnnouncement(announcementDTO));
        return announcementConverter.announcementToAnnouncementDTO(announcement);
    }

    public AnnouncementDTO deleteAnnouncement(AnnouncementDTO announcementDTO) {
        announcementRepo.delete(announcementDTO.getId());
        return announcementDTO;
    }

    public void deleteAnnouncementById(Long id) {
        announcementRepo.delete(id);
    }

    // TODO dszopa 11/1/16 - Change this to get pages that load on scroll down.
    public List<AnnouncementDTO> getHomepageAnnouncementsForUser(Long userId) {

        List<Announcement> announcements = announcementRepo.findHomepageAnnouncementsForUser(userId);
        List<AnnouncementDTO> announcementDTOs = new ArrayList<>();

        announcements.forEach(announcement ->
            announcementDTOs.add(announcementConverter.announcementToAnnouncementDTO(announcement))
        );

        return announcementDTOs;
    }

    public List<AnnouncementDTO> getAllAnnouncementsForGroup(Long groupId) {
        List<Announcement> announcements = announcementRepo.findAllAnnouncementsByGroup(groupId);
        List<AnnouncementDTO> announcementDTOs = new ArrayList<>();

        announcements.forEach(announcement ->
            announcementDTOs.add(announcementConverter.announcementToAnnouncementDTO(announcement))
        );

        return announcementDTOs;
    }
}
