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

import Daniyal.SpringBootRest.service.LeadService;
import Daniyal.SpringBootRest.entity.Lead;

@RestController
public class LeadController {

    @Autowired
    private LeadService service;

    @GetMapping("/leads")
    public List<Lead> retrieveAllLeads() {
        return service.findAll();
    }

    @GetMapping("/leads/{id}")
    public Lead retrieveLead(@PathVariable int id) {
        return service.findOne(id);
    }

    @PostMapping("/leads")
    public Lead createLead(@RequestBody Lead lead) {
        Lead savedLead = service.save(lead);
        return savedLead;
    }

    @DeleteMapping("/leads/{id}")
    public void deleteLead(@PathVariable int id) throws Exception {
        try {
            service.deleteById(id);
        } catch (Exception e) {
            throw new Exception("Not found id: " + id);
        }
    }

    @PutMapping("/leads/{id}")
    public Lead updateLead(@RequestBody Lead lead, @PathVariable int id) {
        Lead existingLead = service.findOne(id);
        if (existingLead == null) {
            throw new RuntimeException("Lead not found with id: " + id);
        }
        lead.setId(id); // Ensure the ID in the request body matches the path variable
        return service.updateLead(lead);
    }
}
