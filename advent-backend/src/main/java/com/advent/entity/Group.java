package com.advent.entity;



import javax.persistence.*;


@Entity
@Table(name = "group")
public class Group {
    private Long id;
    private String groupName;
    private String groupPicture;
    private String tags;
    private String leaders;
    private String description;

    @Id
    @Column(name = "id", unique = true, nullable = false, length = 20)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "generator")
    @SequenceGenerator(name = "generator", sequenceName = "group_seq", allocationSize = 1)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "group_name", nullable = false)
    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    @Column(name = "group_picture", nullable = false)
    public String getGroupPicture() {
        return groupPicture;
    }

    public void setGroupPicture(String groupPicture) {
        this.groupPicture = groupPicture;
    }

    @Column(name = "tags", nullable = false)
    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    @Column(name = "leaders", nullable = false)
    public String getLeaders() {
        return leaders;
    }

    public void setLeaders(String leaders) {
        this.leaders = leaders;
    }

    @Column(name = "description", nullable = false)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Group{" +
                "id=" + id +
                ", groupName='" + groupName + '\'' +
                ", groupPicture='" + groupPicture + '\'' +
                ", tags='" + tags + '\'' +
                ", leaders='" + leaders + '\'' +
                ", description='" + description + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Group group = (Group) o;

        if (!id.equals(group.id)) return false;
        if (!groupName.equals(group.groupName)) return false;
        if (!groupPicture.equals(group.groupPicture)) return false;
        if (!tags.equals(group.tags)) return false;
        if (!leaders.equals(group.leaders)) return false;
        return description.equals(group.description);

    }

}
