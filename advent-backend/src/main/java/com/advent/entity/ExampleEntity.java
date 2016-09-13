package com.advent.entity;

import javax.persistence.*;

@Entity
@Table(name = "example_entity")
public class ExampleEntity {

    private Long id;
    private String characteristic;

    protected ExampleEntity() {}

    public ExampleEntity(String characteristic) {
        this.characteristic = characteristic;
    }

    @Id
    @Column(name = "id", unique = true, nullable = false, length = 20)
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "characteristic", nullable = false)
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
