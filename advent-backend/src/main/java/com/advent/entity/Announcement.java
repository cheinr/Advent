package com.advent.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "announcement")
public class Announcement {

    private Long id;
    private String title;
    private String text;
    // TODO dszopa 10/23/16 - Make sure to add a relationship between groups & announcements
    // TODO dszopa 10/23/16 - this will somehow tie to if a user has read it or not

}
