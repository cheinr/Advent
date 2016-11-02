package com.advent.factory;

import com.advent.dto.AnnouncementDTO;
import com.advent.entity.Announcement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AnnouncementConverter {

    @Autowired
    private GroupConverter groupConverter;

    public Announcement announcementDTOToAnnouncement(AnnouncementDTO announcementDTO) {
        Announcement announcement = new Announcement();

        announcement.setId(announcementDTO.getId());
        announcement.setTitle(announcementDTO.getTitle());
        announcement.setContent(announcementDTO.getContent());
        announcement.setGroup(groupConverter.groupDTOtoGroup(announcementDTO.getGroupDTO()));

        return announcement;
    }

    public AnnouncementDTO announcementToAnnouncementDTO(Announcement announcement) {
        AnnouncementDTO announcementDTO = new AnnouncementDTO();

        announcementDTO.setId(announcement.getId());
        announcementDTO.setTitle(announcement.getTitle());
        announcementDTO.setContent(announcement.getContent());
        announcementDTO.setGroupDTO(groupConverter.groupToGroupDTO(announcement.getGroup()));

        return announcementDTO;
    }
}
