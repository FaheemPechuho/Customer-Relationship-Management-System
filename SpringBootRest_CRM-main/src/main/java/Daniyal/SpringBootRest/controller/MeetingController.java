package Daniyal.SpringBootRest.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Daniyal.SpringBootRest.service.MeetingService;
import Daniyal.SpringBootRest.entity.Meeting;

@RestController
public class MeetingController {

    @Autowired
    private MeetingService service;

    @GetMapping("/meetings")
    public List<Meeting> retrieveAllMeetings() {
        return service.findAll();
    }

    @GetMapping("/meetings/{id}")
    public Meeting retrieveMeeting(@PathVariable int id) {
        return service.findOne(id);
    }

    @PostMapping("/meetings")
    public Meeting createMeeting(@RequestBody Meeting meeting) {
        Meeting savedMeeting = service.save(meeting);
        return savedMeeting;
    }

    @DeleteMapping("/meetings/{id}")
    public void deleteMeeting(@PathVariable int id) throws Exception {
        try {
            service.deleteById(id);
        } catch (Exception e) {
            throw new Exception("Not found id: " + id);
        }
    }

    @PutMapping("/meetings/{id}")
    public Meeting updateMeeting(@RequestBody Meeting meeting, @PathVariable int id) {
        Meeting existingMeeting = service.findOne(id);
        if (existingMeeting == null) {
            throw new RuntimeException("Meeting not found with id: " + id);
        }
        meeting.setId(id); // Ensure the ID in the request body matches the path variable
        return service.updateMeeting(meeting);
    }
}
