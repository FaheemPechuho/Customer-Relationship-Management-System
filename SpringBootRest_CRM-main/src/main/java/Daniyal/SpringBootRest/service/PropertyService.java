package Daniyal.SpringBootRest.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Daniyal.SpringBootRest.dao.PropertyDao;
import Daniyal.SpringBootRest.entity.Property;

@Service
public class PropertyService {

    @Autowired
    private PropertyDao propertyDao;

    // Method to retrieve all properties
    public List<Property> findAll() {
        return propertyDao.findAll();
    }

    // Method to add a property
    public Property save(Property property) {
        propertyDao.save(property);
        return property;
    }

    // Method to find a particular property by ID
    public Property findOne(int id) {
        Optional<Property> property = propertyDao.findById(id);
        return property.orElse(null);
    }

    // Method to delete a property by ID
    public void deleteById(int id) {
        propertyDao.deleteById(id);
    }

    // Method to update an existing property
    public Property updateProperty(Property updatedProperty) {
        propertyDao.save(updatedProperty);
        return updatedProperty;
    }
}
