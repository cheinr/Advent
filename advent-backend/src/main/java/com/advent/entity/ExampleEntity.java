package com.advent.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ExampleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String characteristic;

    protected ExampleEntity() {}

    public ExampleEntity(String characteristic) {
        this.characteristic = characteristic;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCharacteristic() {
        return characteristic;
    }

    public void setCharacteristic(String characteristic) {
        this.characteristic = characteristic;
    }

    @Override
    public String toString() {
        return "ExampleEntity{" +
                "id=" + id +
                ", characteristic='" + characteristic + '\'' +
                '}';
    }
}
