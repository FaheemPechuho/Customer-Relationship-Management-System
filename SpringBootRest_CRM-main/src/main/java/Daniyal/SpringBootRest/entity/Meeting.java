package Daniyal.SpringBootRest.entity;

import java.util.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Meeting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;
    private Date meetingDate;
    private String location;
    private String participants;

    public Meeting() {
        super();
    }

    public Meeting(Integer id, String title, String description, Date meetingDate, String location, String participants) {
        super();
        this.id = id;
        this.title = title;
        this.description = description;
        this.meetingDate = meetingDate;
        this.location = location;
        this.participants = participants;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getMeetingDate() {
        return meetingDate;
    }

    public void setMeetingDate(Date meetingDate) {
        this.meetingDate = meetingDate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getParticipants() {
        return participants;
    }

    public void setParticipants(String participants) {
        this.participants = participants;
    }

    @Override
    public String toString() {
        return String.format("Meeting [id=%s, title=%s, description=%s, meetingDate=%s, location=%s, participants=%s]", id, title, description, meetingDate, location, participants);
    }
}
