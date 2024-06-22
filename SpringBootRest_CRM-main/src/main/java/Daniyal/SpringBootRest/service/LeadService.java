package Daniyal.SpringBootRest.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Daniyal.SpringBootRest.dao.LeadDao;
import Daniyal.SpringBootRest.entity.Lead;

@Service
public class LeadService {

    @Autowired
    private LeadDao leadDao;

    // Method to retrieve all leads from the list
    public List<Lead> findAll() {
        return leadDao.findAll();
    }

    // Method to add a lead to the list
    public Lead save(Lead lead) {
        leadDao.save(lead);
        return lead;
    }

    // Method to find a particular lead by ID
    public Lead findOne(int id) {
        Optional<Lead> lead = leadDao.findById(id);
        return lead.orElse(null);
    }

    // Method to delete a lead by ID
    public void deleteById(int id) {
        leadDao.deleteById(id);
    }

    // Method to update an existing lead
    public Lead updateLead(Lead updatedLead) {
        leadDao.save(updatedLead);
        return updatedLead;
    }
}
