package Daniyal.SpringBootRest.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Daniyal.SpringBootRest.dao.MeetingDao;
import Daniyal.SpringBootRest.entity.Meeting;

@Service
public class MeetingService {

    @Autowired
    private MeetingDao meetingDao;

    // Method to retrieve all meetings
    public List<Meeting> findAll() {
        return meetingDao.findAll();
    }

    // Method to add a meeting
    public Meeting save(Meeting meeting) {
        meetingDao.save(meeting);
        return meeting;
    }

    // Method to find a particular meeting by ID
    public Meeting findOne(int id) {
        Optional<Meeting> meeting = meetingDao.findById(id);
        return meeting.orElse(null);
    }

    // Method to delete a meeting by ID
    public void deleteById(int id) {
        meetingDao.deleteById(id);
    }

    // Method to update an existing meeting
    public Meeting updateMeeting(Meeting updatedMeeting) {
        meetingDao.save(updatedMeeting);
        return updatedMeeting;
    }
}
