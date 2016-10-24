package com.advent.entity;

import javax.persistence.*;

@Entity
@Table(name = "calendar")
public class Calendar {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "generator")
    @SequenceGenerator(name = "generator", sequenceName = "event_seq", allocationSize = 1)
    private Long id;

    @Column(name = "link", nullable = false)
    private String link;
}
